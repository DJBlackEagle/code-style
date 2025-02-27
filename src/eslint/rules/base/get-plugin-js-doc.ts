/**
 * Asynchronously retrieves the ESLint configuration for the JSDoc plugin.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginJsDoc(): Promise<import('eslint').Linter.Config[]> {
  const pluginJsdoc = await import('eslint-plugin-jsdoc');
  const config: Array<import('eslint').Linter.Config> = [];

  config.push(pluginJsdoc.default.configs['flat/recommended-error']);

  return config;
}

export { getPluginJsDoc };
