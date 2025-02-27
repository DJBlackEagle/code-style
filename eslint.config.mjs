import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import { includeIgnoreFile } from '@eslint/compat';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';

const projectFile = fileURLToPath(import.meta.url);
const projectPath = path.resolve(path.dirname(projectFile), './');
const gitignorePath = path.resolve(projectPath, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { name: 'Applies to files matching', files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  {
    name: 'Ignore folders and files globally',
    ignores: ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
  },
  includeIgnoreFile(gitignorePath),
  {
    name: 'Language options',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
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
  },
  { name: '@eslint/js', ...pluginJs.configs.recommended },
  ...tseslint.configs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      'import/no-anonymous-default-export': ['warn', { allowObject: false }],
      'import/no-extraneous-dependencies': 'error',
      'import/order': 'error',
      // 'import/no-unresolved': 'off',
    },
  },
  {
    name: '@stylistic/eslint-plugin',
    ...stylistic.configs['recommended-flat'],
  },
  {
    name: 'eslint-plugin-prettier/recommended',
    ...eslintPluginPrettierRecommended,
  },
  jsdoc.configs['flat/recommended-error'],
  {
    ...importPlugin.flatConfigs.recommended,
    name: '@djblackeagle/eslint-plugin-import',
    rules: {},
  },
  {
    name: '@djblackeagle/stylistic/eslint-plugin',
    rules: {
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      '@stylistic/semi-style': ['error', 'last'],
    },
  },
  {
    name: '@djblackeagle/eslint',
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
  },
  {
    name: '@djblackeagle/typescript-eslint',
    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true },
      ],
    },
  },
  {
    name: '@djblackeaagle/stylistic-disable-for-prettier',
    rules: {
      '@stylistic/space-infix-ops': 'off',
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/no-multiple-empty-lines': 'off',
    },
  },
];

export default config;
