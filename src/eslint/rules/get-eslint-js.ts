import pluginJs from '@eslint/js';
import { Linter } from 'eslint';

/**
 * Asynchronously retrieves an array of ESLint configurations.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getEslintJs(): Promise<Linter.Config[]> {
  const config: Array<Linter.Config> = [];

  config.push({
    name: '@eslint/js',
    ...pluginJs.configs.recommended,
  });

  return config;
}

export { getEslintJs };
