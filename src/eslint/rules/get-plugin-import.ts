import { Linter } from 'eslint';

/**
 * Asynchronously imports the 'eslint-plugin-import' module and returns an array of ESLint configurations.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginImport(): Promise<Linter.Config[]> {
  const pluginImport = await import('eslint-plugin-import');
  const config: Array<Linter.Config> = [];

  config.push(pluginImport.flatConfigs.recommended);

  config.push({
    name: 'djblackeagle/eslint-plugin-import',
    rules: {
      'import/no-anonymous-default-export': ['warn', { allowObject: false }],
      'import/no-extraneous-dependencies': 'error',
      'import/order': 'error',
      'import/no-unresolved': 'off',
    },
  });

  return config;
}

export { getPluginImport };
