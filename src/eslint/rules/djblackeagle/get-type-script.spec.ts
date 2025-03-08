import { Linter } from 'eslint';
import { getTypeScript } from './get-type-script';

describe('getTypeScript', () => {
  it('should return an array with one configuration', async () => {
    const config = await getTypeScript();
    expect(config).toBeInstanceOf(Array);
    expect(config.length).toBe(1);
  });

  it('should return a configuration with the correct name', async () => {
    const config = await getTypeScript();
    expect(config[0].name).toBe('djblackeagle/typescript-eslint');
  });

  it('should return a configuration with the correct rules', async () => {
    const config = await getTypeScript();
    const rules = config[0].rules as Linter.RulesRecord;

    expect(rules['@typescript-eslint/explicit-function-return-type']).toEqual([
      'error',
      { allowExpressions: true },
    ]);
  });
});
