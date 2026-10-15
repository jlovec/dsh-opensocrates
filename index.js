/**
 * opensocrates-method-pack — a scoped skill provider for DeepSeek Harness.
 *
 * Exposes exactly one skill, `opensocrates`, from this package's own
 * `skills/opensocrates/` tree. The calling scope decides visibility: mounted by
 * the `opensocrates` agent preset, the skill exists only for sessions that
 * select that preset, and other presets never see it.
 *
 * DELIBERATELY DEPENDENCY-FREE. An earlier version imported
 * `@deepseek-ai/dsh-skill-filesystem`. That made activation depend on the
 * loader's module-resolution table for this package's real path; when the
 * lookup failed the preset row never got a fiber and the registry reported
 * `opensocrates-method-pack (dsh-opensocrates/index.js): never started`, so the
 * preset was listed but silently had no skill. Implementing the small provider
 * contract directly on `node:fs` removes that failure mode: this file imports
 * nothing but Node built-ins, so it activates wherever it is installed.
 *
 * The provider contract implemented here (see @deepseek-ai/dsh-skill):
 *   { name, list(options), get(candidate, options) }
 * `list` returns summary candidates; `get` loads one candidate's full body.
 */

import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROVIDER_NAME = 'opensocrates-method-pack';

/** Bundled rank: packaged skill providers and local bundled roots. */
const BUNDLED_SKILL_RANK = 600;

const SKILL_ROOT = fileURLToPath(new URL('./skills/opensocrates/', import.meta.url));
const SKILL_FILE = join(SKILL_ROOT, 'SKILL.md');

export const name = PROVIDER_NAME;
export const inject = ['skills'];

/**
 * Parse the leading YAML frontmatter block.
 *
 * Only the keys a skill catalog reads are recognized. Values may be plain or
 * quoted; quoted values keep inner punctuation, which the `description` needs.
 */
function parseFrontmatter(text) {
  if (!text.startsWith('---')) return { attributes: {}, body: text };
  const end = text.indexOf('\n---', 3);
  if (end === -1) return { attributes: {}, body: text };
  const block = text.slice(text.indexOf('\n', 3) + 1, end);
  const attributes = {};
  for (const line of block.split('\n')) {
    const match = /^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/.exec(line);
    if (!match) continue;
    let value = match[2].trim();
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    attributes[match[1]] = value;
  }
  return { attributes, body: text.slice(end + 4).replace(/^\n/, '') };
}

/** A frontmatter boolean: absent means the surface is permitted. */
function boolAttribute(value, whenAbsent) {
  if (value === undefined) return whenAbsent;
  return /^(true|yes|on|1)$/i.test(value);
}

/** Resolved invocation policy for the skill. */
function invocationOf(attributes) {
  return {
    modelInvocable: !boolAttribute(attributes['disable-model-invocation'], false),
    userInvocable: boolAttribute(attributes['user-invocable'], true),
  };
}

/** Read and parse the bundled skill; undefined when it is missing or unusable. */
function readSkill() {
  let raw;
  try {
    if (!statSync(SKILL_FILE).isFile()) return undefined;
    raw = readFileSync(SKILL_FILE, 'utf8');
  } catch {
    return undefined;
  }
  const { attributes, body } = parseFrontmatter(raw);
  if (!attributes.name || !attributes.description) return undefined;
  return { attributes, body };
}

/** One-skill provider over the bundled tree. */
class BundledSkillProvider {
  name = PROVIDER_NAME;

  async list() {
    const skill = readSkill();
    if (skill === undefined) return [];
    const { attributes } = skill;
    return [
      {
        name: attributes.name,
        description: attributes.description,
        ...(attributes.whenToUse === undefined ? {} : { whenToUse: attributes.whenToUse }),
        invocation: invocationOf(attributes),
        source: 'bundled',
        provider: PROVIDER_NAME,
        rank: BUNDLED_SKILL_RANK,
        locator: { path: SKILL_FILE },
        resourceBase: { kind: 'directory', path: SKILL_ROOT },
        path: SKILL_FILE,
      },
    ];
  }

  async get(winner) {
    // Re-read on every load so editing the body needs no cache invalidation.
    const skill = readSkill();
    if (skill === undefined) return undefined;
    const { attributes, body } = skill;
    return {
      name: attributes.name,
      description: attributes.description,
      ...(attributes.whenToUse === undefined ? {} : { whenToUse: attributes.whenToUse }),
      invocation: invocationOf(attributes),
      source: 'bundled',
      provider: PROVIDER_NAME,
      resourceBase: { kind: 'directory', path: SKILL_ROOT },
      path: winner?.locator?.path ?? SKILL_FILE,
      content: body,
    };
  }
}

export function apply(ctx) {
  ctx.skills.registerProvider(() => new BundledSkillProvider());
}