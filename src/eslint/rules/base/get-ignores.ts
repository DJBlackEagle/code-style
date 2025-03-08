import fs from 'fs';
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';

/**
 * Asynchronously retrieves ESLint ignore configurations based on the provided root path.
 * @param {string} [rootPath] - The root path to start searching for ignore files.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint Linter configurations.
 * @throws {Error} Throws an error if the root path does not exist.
 */
async function getIgnores(
  rootPath: string,
): Promise<import('eslint').Linter.Config[]> {
  if (!fs.existsSync(rootPath)) {
    throw new Error(`The path ${rootPath} does not exist.`);
  }

  const isFile = fs.statSync(rootPath).isFile();
  const projectPath = path.resolve(isFile ? path.dirname(rootPath) : rootPath);
  const gitignorePath = path.resolve(projectPath, '.gitignore');
  const config: Array<import('eslint').Linter.Config> = [];

  config.push({
    name: 'Ignore folders and files globally',
    ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
  });

  config.push(includeIgnoreFile(gitignorePath));

  return config;
}

export { getIgnores };
