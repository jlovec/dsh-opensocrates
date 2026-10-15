#!/usr/bin/env node
/**
 * Build skills/opensocrates/ from the official content-only release asset,
 * trimmed to a single instruction locale (zh).
 *
 * Why a script instead of a hand-edited copy: the payload must stay auditable
 * against the upstream release. Anyone can re-run this and diff the result
 * against the official ZIP, so "what did you change?" is answerable exactly.
 *
 * Input : the official `opensocrates-<v>-claude-chat-skills.zip`
 *         (executable-free, host-neutral: no hooks, no runtime, no telemetry)
 * Output: skills/opensocrates/ with only the zh instruction locale.
 *
 * The trim is NOT a pure delete: upstream SKILL.md links to guide.<locale>.md
 * for all ten locales, so deleting files alone leaves dead links. This script
 * rewrites those links to zh as well.
 *
 * Usage:
 *   node tools/build-payload.mjs --zip <path to official zip> [--locale zh] [--check]
 */

import { readFileSync, writeFileSync, existsSync, rmSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
const DEST = join(repoRoot, 'skills', 'opensocrates');

const ALL_LOCALES = ['en', 'ko', 'zh', 'ja', 'fr', 'de', 'it', 'es', 'pt', 'th'];

const argv = process.argv.slice(2);
const arg = (name) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : undefined);
const zipPath = arg('--zip');
const keepLocale = arg('--locale') ?? 'zh';
const checkOnly = argv.includes('--check');

if (!zipPath) {
  console.error('usage: node tools/build-payload.mjs --zip <official claude-chat-skills.zip> [--locale zh] [--check]');
  process.exit(1);
}
if (!existsSync(zipPath)) {
  console.error(`zip not found: ${zipPath}`);
  process.exit(1);
}
if (!ALL_LOCALES.includes(keepLocale)) {
  console.error(`unsupported locale: ${keepLocale}`);
  process.exit(1);
}

const drop = ALL_LOCALES.filter((l) => l !== keepLocale);

// ---- extract the official asset into a scratch dir -------------------------
const scratch = join(repoRoot, '.payload-scratch');
rmSync(scratch, { recursive: true, force: true });
mkdirSync(scratch, { recursive: true });
execFileSync('unzip', ['-q', zipPath, '-d', scratch]);

const srcSkill = join(scratch, 'opensocrates');
if (!existsSync(srcSkill)) {
  console.error('unexpected zip layout: expected a top-level opensocrates/ directory');
  process.exit(1);
}

// ---- trim locale-specific files -------------------------------------------
const removed = [];
for (const loc of drop) {
  const targets = [
    join(srcSkill, 'references/decision/methods', loc),
    join(srcSkill, 'references/decision', `guide.${loc}.md`),
    join(srcSkill, 'references/decision', `catalog.${loc}.json`),
    join(srcSkill, 'references/reader', `guide.${loc}.md`),
  ];
  for (const t of targets) {
    if (existsSync(t)) {
      rmSync(t, { recursive: true, force: true });
      removed.push(relative(srcSkill, t));
    }
  }
}

// ---- rewrite SKILL.md: keep only the kept locale's sections + shared contract
const skillFile = join(srcSkill, 'SKILL.md');
let skill = readFileSync(skillFile, 'utf8');

// 1. Point every guide link at the kept locale (upstream links all ten).
for (const loc of drop) {
  skill = skill.replaceAll(`guide.${loc}.md`, `guide.${keepLocale}.md`);
  skill = skill.replaceAll(`catalog.${loc}.json`, `catalog.${keepLocale}.json`);
}

// 2. Retarget the link LABELS that named a dropped locale's language, so the
//    prose no longer advertises ten languages it does not ship.
const LABEL_REWRITES = [
  ['[파일 전달 판단 안내]', '[判断节点指南]'],
  ['[독자를 위한 안내]', '[读者指南]'],
  ['[file-delivery decision guide]', '[判断节点指南]'],
  ['[reader guide]', '[读者指南]'],
];
for (const [from, to] of LABEL_REWRITES) skill = skill.replaceAll(from, to);

// 3. Upstream lists the SAME guide twice under two language labels ("X or Y").
//    With one locale left both halves are identical, so drop the duplicate
//    half to keep the prose honest instead of linking the same file twice.
for (const target of ['references/decision/guide.zh.md', 'references/reader/guide.zh.md']) {
  const esc = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  skill = skill.replace(
    new RegExp(`\\[([^\\]]+)\\]\\(${esc}\\)\\s*or\\s*\\n?\\[[^\\]]+\\]\\(${esc}\\)`, 'g'),
    '[$1](' + target + ')',
  );
}

/**
 * Drop a `## <heading>` section body, stopping at the next `## ` heading.
 * Used to remove the nine non-kept-language controller/guide sections.
 */
function dropSection(text, headingPrefix) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => l.startsWith(headingPrefix));
  if (start === -1) return text;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i])) { end = i; break; }
  }
  lines.splice(start, end - start);
  return lines.join('\n');
}

// Controllers and guides for dropped locales.
const DROP_SECTIONS = [
  '## English controller',
  '## 한국어 컨트롤러',
  '## 日本語コントローラー',
  '## Contrôleur en français',
  '## Deutscher Controller',
  '## Controller in italiano',
  '## Controlador en español',
  '## Controlador em português',
  '## ตัวควบคุมภาษาไทย',
  '### 작성 단계의 표현 안내',
  '### 表現の作成ガイド',
  '### Conseils de rédaction',
  '### Hinweise zur Formulierung',
  '### Guida alla formulazione',
  '### Orientación para redactar',
  '### Orientação de redação',
  '### แนวทางการเรียบเรียง',
  '## 日本語ガイド',
  '## Français',
  '## Deutsch',
  '## Italiano',
  '## Español',
  '## Português',
  '## ไทย',
];
for (const h of DROP_SECTIONS) skill = dropSection(skill, h);

// The Mandatory grounding gate carries the exact English footer contract and a
// Korean restatement; drop only the Korean paragraph.
skill = skill.replace(
  /\n한국어 접지 규칙:[\s\S]*?실제 완료 조건을 충족하면 마무리합니다\.\n/,
  '\n',
);

// Collapse runs of >2 blank lines left by removals.
skill = skill.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';

writeFileSync(skillFile, skill);

// ---- report ----------------------------------------------------------------
const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const files = walk(srcSkill);
const bytes = files.reduce((a, f) => a + statSync(f).size, 0);

// Verify no dead locale links remain.
const dead = [];
for (const f of files) {
  if (!f.endsWith('.md')) continue;
  const text = readFileSync(f, 'utf8');
  const re = /guide\.(en|ko|ja|fr|de|it|es|pt|th)\.md|catalog\.(en|ko|ja|fr|de|it|es|pt|th)\.json|methods\/(en|ko|ja|fr|de|it|es|pt|th)\//g;
  const hits = text.match(re);
  if (hits) dead.push(`${relative(srcSkill, f)}: ${[...new Set(hits)].join(', ')}`);
}

const summary = [
  `locale kept   : ${keepLocale}`,
  `files removed : ${removed.length}`,
  `files kept    : ${files.length}`,
  `payload size  : ${(bytes / 1024 / 1024).toFixed(2)} MiB`,
  `dead links    : ${dead.length === 0 ? 'none' : dead.join(' | ')}`,
].join('\n');

if (checkOnly) {
  console.log(summary);
  console.log(dead.length === 0 ? 'CHECK OK' : 'CHECK FAILED');
  rmSync(scratch, { recursive: true, force: true });
  process.exit(dead.length === 0 ? 0 : 1);
}

rmSync(DEST, { recursive: true, force: true });
mkdirSync(dirname(DEST), { recursive: true });
execFileSync('cp', ['-r', srcSkill, DEST]);
rmSync(scratch, { recursive: true, force: true });
console.log(summary);
console.log(`wrote ${relative(repoRoot, DEST)}/`);
if (dead.length) process.exit(1);