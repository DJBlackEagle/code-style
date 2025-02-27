/**
 * Asynchronously imports the 'eslint-plugin-import' module and returns an array of ESLint configurations.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginImport(): Promise<import('eslint').Linter.Config[]> {
  const pluginImport = await import('eslint-plugin-import');
  const config: Array<import('eslint').Linter.Config> = [];

  config.push(pluginImport.flatConfigs.recommended);

  return config;
}

export { getPluginImport };
