import fs from 'fs';
import path from 'node:path';
import globals from 'globals';

/**
 * Asynchronously retrieves common ESLint configurations based on the provided root path.
 * @param {string} [rootPath] - The root path to determine the project directory.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getCommon(
  rootPath: string,
): Promise<import('eslint').Linter.Config[]> {
  const isFile = rootPath ? fs.statSync(rootPath).isFile() : false;
  const projectPath = path.resolve(isFile ? path.dirname(rootPath) : rootPath);
  const pluginTsParser = await import('@typescript-eslint/parser');
  const config: Array<import('eslint').Linter.Config> = [];

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
        tsconfigRootDir: projectPath,
      },
      globals: { ...globals.browser, ...globals.node },
    },
  });

  return config;
}

export { getCommon };
