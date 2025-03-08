import fs from 'fs';
import path from 'node:path';
import globals from 'globals';
import { Linter } from 'eslint';

/**
 * Asynchronously retrieves common ESLint configurations based on the provided root path.
 * @param {string} [projectPath] - The root path to determine the project directory.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getCommon(projectPath: string): Promise<Linter.Config[]> {
  const isFile = projectPath ? fs.statSync(projectPath).isFile() : false;
  const projectPathSave = path.resolve(
    isFile ? path.dirname(projectPath) : projectPath,
  );
  const pluginTsParser = await import('@typescript-eslint/parser');
  const config: Array<Linter.Config> = [];

  config.push({
    name: 'Applies to files matching',
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  });

  config.push({
    name: 'Language options',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: pluginTsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: projectPathSave,
      },
      globals: { ...globals.browser, ...globals.node },
    },
  });

  return config;
}

export { getCommon };
