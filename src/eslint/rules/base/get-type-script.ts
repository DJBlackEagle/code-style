import tseslint from 'typescript-eslint';

/**
 * Asynchronously retrieves the TypeScript ESLint configuration.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getTypeScript(): Promise<import('eslint').Linter.Config[]> {
  const config: Array<object> = [];

  config.push(...tseslint.configs.recommended);

  return config;
}

export { getTypeScript };
