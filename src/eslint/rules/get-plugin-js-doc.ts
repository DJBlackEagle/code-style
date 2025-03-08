import { Linter } from 'eslint';

/**
 * Asynchronously retrieves the ESLint configuration for the JSDoc plugin.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginJsDoc(): Promise<Linter.Config[]> {
  const pluginJsdoc = await import('eslint-plugin-jsdoc');
  const config: Array<Linter.Config> = [];

  config.push(pluginJsdoc.default.configs['flat/recommended-error']);

  return config;
}

export { getPluginJsDoc };
