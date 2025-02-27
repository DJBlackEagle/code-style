/**
 * Asynchronously loads the '@stylistic/eslint-plugin' and returns its recommended ESLint configuration.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginStylistic(): Promise<import('eslint').Linter.Config[]> {
  const pluginStylistic = await import('@stylistic/eslint-plugin');
  const config: Array<import('eslint').Linter.Config> = [];

  config.push({
    name: '@stylistic/eslint-plugin',
    ...pluginStylistic.default.configs.recommended,
  });

  return config;
}

export { getPluginStylistic };
