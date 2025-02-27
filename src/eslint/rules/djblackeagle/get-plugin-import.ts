/**
 * Asynchronously retrieves the ESLint configuration for the 'djblackeagle/eslint-plugin-import' ruleset.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginImport(): Promise<import('eslint').Linter.Config[]> {
  const config: Array<import('eslint').Linter.Config> = [];

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
