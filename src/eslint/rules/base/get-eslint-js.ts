import pluginJs from '@eslint/js';

/**
 * Asynchronously retrieves an array of ESLint configurations.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getEslintJs(): Promise<import('eslint').Linter.Config[]> {
  const config: Array<import('eslint').Linter.Config> = [];

  config.push({
    name: '@eslint/js',
    ...pluginJs.configs.recommended,
  });

  return config;
}

export { getEslintJs };
