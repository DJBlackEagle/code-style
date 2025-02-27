import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/**
 * Asynchronously retrieves the ESLint configuration for the Prettier plugin.
 *
 * This function returns an array of ESLint configurations that include the recommended
 * settings for integrating Prettier with ESLint.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginPrettier(): Promise<import('eslint').Linter.Config[]> {
  const config: Array<import('eslint').Linter.Config> = [];

  config.push({
    name: 'eslint-plugin-prettier/recommended',
    ...eslintPluginPrettierRecommended,
  });

  return config;
}

export { getPluginPrettier };
