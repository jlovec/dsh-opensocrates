/**
 * OpenSocrates method pack — scoped skill provider for a DSH agent preset.
 *
 * Registers one isolated filesystem skill provider whose only root is this
 * package's own skills/ tree. The calling scope decides visibility: mounted by
 * the `opensocrates` preset, the skill exists only for sessions that select it.
 * Copies no skill bodies, adds no runtime authority, calls no model.
 */

import { fileURLToPath } from 'node:url';
import { apply as applyFilesystemProvider } from '@deepseek-ai/dsh-skill-filesystem';

const skillsRoot = fileURLToPath(new URL('./skills/', import.meta.url));

export const name = 'opensocrates-method-pack';
export const inject = ['skills'];

export function apply(ctx) {
  applyFilesystemProvider(ctx, {
    providerName: 'opensocrates-method-pack',
    includeDefaultRoots: false,
    bundledSkillDir: skillsRoot,
    watch: false,
  });
}
