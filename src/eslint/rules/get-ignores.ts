import fs from 'fs';
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import { Linter } from 'eslint';

/**
 * Asynchronously retrieves ESLint ignore configurations based on the provided root path.
 * @param {string} [projectPath] - The root path to start searching for ignore files.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint Linter configurations.
 */
async function getIgnores(projectPath: string): Promise<Linter.Config[]> {
  const isFile = fs.statSync(projectPath).isFile();
  const projectPathSave = path.resolve(
    isFile ? path.dirname(projectPath) : projectPath,
  );
  const gitignorePath = path.resolve(projectPathSave, '.gitignore');
  const config: Array<Linter.Config> = [];

  config.push({
    name: 'Ignore folders and files globally',
    ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
  });

  config.push(includeIgnoreFile(gitignorePath));

  return config;
}

export { getIgnores };
