/**
 * Asynchronously retrieves the ESLint configuration for the 'djblackeagle/typescript-eslint' ruleset.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getTypeScript(): Promise<import('eslint').Linter.Config[]> {
  const config: Array<object> = [];

  config.push({
    name: 'djblackeagle/typescript-eslint',
    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true },
      ],
    },
  });

  return config;
}

export { getTypeScript };
