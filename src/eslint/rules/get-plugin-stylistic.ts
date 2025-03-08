import { Linter } from 'eslint';

/**
 * Asynchronously loads the '@stylistic/eslint-plugin' and returns its recommended ESLint configuration.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getPluginStylistic(): Promise<Linter.Config[]> {
  const pluginStylistic = await import('@stylistic/eslint-plugin');
  const config: Array<Linter.Config> = [];

  config.push({
    name: '@stylistic/eslint-plugin',
    ...pluginStylistic.default.configs.recommended,
  });

  config.push({
    name: 'djblackeagle/stylistic/eslint-plugin',
    rules: {
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      '@stylistic/semi-style': ['error', 'last'],
    },
  });

  config.push({
    name: 'djblackeaagle/stylistic-disable-for-prettier',
    rules: {
      '@stylistic/space-infix-ops': 'off',
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/no-multiple-empty-lines': 'off',
    },
  });

  return config;
}

export { getPluginStylistic };
