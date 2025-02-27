/**
 * Asynchronously retrieves the ESLint import resolver configuration.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint Linter configuration objects.
 */
async function getImportResolver(): Promise<import('eslint').Linter.Config[]> {
  const config: Array<import('eslint').Linter.Config> = [];

  config.push({
    name: 'import resolver settings',
    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'import/core-modules': ['@typescript-eslint/parser', 'typescript-eslint'],
    },
  });

  return config;
}

export { getImportResolver };
