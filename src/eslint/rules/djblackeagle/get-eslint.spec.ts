import { Linter } from 'eslint';
import { getEslint } from './get-eslint';

describe('getEslint', () => {
  it('should return an array with one configuration', async () => {
    const config = await getEslint();
    expect(config).toBeInstanceOf(Array);
    expect(config.length).toBe(1);
  });

  it('should return a configuration with the correct name', async () => {
    const config = await getEslint();
    expect(config[0].name).toBe('djblackeagle/eslint');
  });

  it('should return a configuration with the correct rules', async () => {
    const config = await getEslint();
    const rules = config[0].rules as Linter.RulesRecord;

    expect(rules['class-methods-use-this']).toBe('error');
    expect(rules['constructor-super']).toBe('error');
    expect(rules['eqeqeq']).toEqual(['error', 'always']);
    expect(rules['logical-assignment-operators']).toBe('error');
    expect(rules['max-classes-per-file']).toEqual(['error', 1]);
    expect(rules['no-alert']).toBe('error');
    expect(rules['no-async-promise-executor']).toBe('error');
    expect(rules['no-cond-assign']).toBe('error');
    expect(rules['no-console']).toBe('error');
    expect(rules['no-const-assign']).toBe('error');
    expect(rules['no-constructor-return']).toBe('error');
    expect(rules['no-dupe-class-members']).toBe('error');
    expect(rules['no-dupe-else-if']).toBe('error');
    expect(rules['no-dupe-keys']).toBe('error');
    expect(rules['no-duplicate-case']).toBe('error');
    expect(rules['no-duplicate-imports']).toBe('error');
    expect(rules['no-empty-character-class']).toBe('error');
    expect(rules['no-empty-function']).toEqual([
      'error',
      { allow: ['constructors'] },
    ]);
    expect(rules['no-eq-null']).toBe('error');
    expect(rules['no-eval']).toBe('error');
    expect(rules['no-import-assign']).toBe('error');
    expect(rules['no-inline-comments']).toBe('error');
    expect(rules['no-labels']).toBe('error');
    expect(rules['no-lone-blocks']).toBe('error');
    expect(rules['no-lonely-if']).toBe('error');
    expect(rules['no-negated-condition']).toBe('error');
    expect(rules['no-new']).toBe('error');
    expect(rules['no-octal']).toBe('error');
    expect(rules['no-octal-escape']).toBe('error');
    expect(rules['no-param-reassign']).toBe('error');
    expect(rules['no-plusplus']).toBe('error');
    expect(rules['no-redeclare']).toBe('error');
    expect(rules['no-restricted-syntax']).toBe('error');
    expect(rules['no-self-assign']).toBe('error');
    expect(rules['no-self-compare']).toBe('error');
    expect(rules['no-throw-literal']).toBe('error');
    expect(rules['no-underscore-dangle']).toBe('error');
    expect(rules['no-unreachable']).toBe('error');
    expect(rules['no-unsafe-negation']).toBe('error');
    expect(rules['no-unused-labels']).toBe('error');
    expect(rules['no-unused-private-class-members']).toBe('error');
    expect(rules['no-unused-vars']).toBe('off');
    expect(rules['no-useless-catch']).toBe('error');
    expect(rules['no-useless-rename']).toBe('error');
    expect(rules['no-useless-return']).toBe('error');
    expect(rules['no-var']).toBe('error');
    expect(rules['object-shorthand']).toEqual(['error', 'always']);
    expect(rules['operator-assignment']).toEqual(['error', 'always']);
    expect(rules['prefer-arrow-callback']).toEqual([
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true },
    ]);
    expect(rules['prefer-const']).toBe('error');
    expect(rules['prefer-template']).toBe('error');
    expect(rules['use-isnan']).toBe('error');
    expect(rules['valid-typeof']).toEqual([
      'error',
      { requireStringLiterals: true },
    ]);
  });
});
