import { Linter } from 'eslint';

/**
 * Asynchronously retrieves the ESLint import resolver configuration.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint Linter configuration objects.
 */
async function getImportResolver(): Promise<Linter.Config[]> {
  const config: Array<Linter.Config> = [];

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
