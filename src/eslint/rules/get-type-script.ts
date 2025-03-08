import tseslint from 'typescript-eslint';
import { Linter } from 'eslint';

/**
 * Asynchronously retrieves the TypeScript ESLint configuration.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getTypeScript(): Promise<Linter.Config[]> {
  const config: Array<object> = [];

  config.push(...tseslint.configs.recommended);

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
