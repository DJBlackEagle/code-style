import { Linter } from 'eslint';
import { getPluginImport } from './get-plugin-import';

describe('getPluginImport', () => {
  it('should return an array with one configuration', async () => {
    const config = await getPluginImport();
    expect(config).toBeInstanceOf(Array);
    expect(config.length).toBe(1);
  });

  it('should return a configuration with the correct name', async () => {
    const config = await getPluginImport();
    expect(config[0].name).toBe('djblackeagle/eslint-plugin-import');
  });

  it('should return a configuration with the correct rules', async () => {
    const config = await getPluginImport();
    const rules = config[0].rules as Linter.RulesRecord;

    expect(rules['import/no-anonymous-default-export']).toEqual([
      'warn',
      { allowObject: false },
    ]);
    expect(rules['import/no-extraneous-dependencies']).toBe('error');
    expect(rules['import/order']).toBe('error');
    expect(rules['import/no-unresolved']).toBe('off');
  });
});
