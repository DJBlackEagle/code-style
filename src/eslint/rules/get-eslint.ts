import { Linter } from 'eslint';

/**
 * Asynchronously retrieves the ESLint configuration for the 'djblackeagle/eslint' ruleset.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getEslint(): Promise<Linter.Config[]> {
  const config: Array<Linter.Config> = [];

  config.push({
    name: 'djblackeagle/eslint',
    rules: {
      'class-methods-use-this': 'error',
      'constructor-super': 'error',
      eqeqeq: ['error', 'always'],
      'logical-assignment-operators': 'error',
      'max-classes-per-file': ['error', 1],
      'no-alert': 'error',
      'no-async-promise-executor': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-const-assign': 'error',
      'no-constructor-return': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-character-class': 'error',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-import-assign': 'error',
      'no-inline-comments': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-negated-condition': 'error',
      'no-new': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'error',
      'no-redeclare': 'error',
      'no-restricted-syntax': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-throw-literal': 'error',
      'no-underscore-dangle': 'error',
      'no-unreachable': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-labels': 'error',
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'off',
      'no-useless-catch': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: true },
      ],
      'prefer-const': 'error',
      'prefer-template': 'error',
      'use-isnan': 'error',
      'valid-typeof': ['error', { requireStringLiterals: true }],
    },
  });

  return config;
}

export { getEslint };
