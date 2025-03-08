import { Linter } from 'eslint';
import { getPluginStylistic } from './get-plugin-stylistic';

describe('getPluginStylistic', () => {
  it('should return an array with two configurations', async () => {
    const config = await getPluginStylistic();
    expect(config).toBeInstanceOf(Array);
    expect(config.length).toBe(2);
  });

  it('should return a configuration with the correct name for the first config', async () => {
    const config = await getPluginStylistic();
    expect(config[0].name).toBe('djblackeagle/stylistic/eslint-plugin');
  });

  it('should return a configuration with the correct rules for the first config', async () => {
    const config = await getPluginStylistic();
    const rules = config[0].rules as Linter.RulesRecord;

    expect(rules['@stylistic/newline-per-chained-call']).toBe('error');
    expect(rules['@stylistic/padding-line-between-statements']).toEqual([
      'error',
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ]);
    expect(rules['@stylistic/semi-style']).toEqual(['error', 'last']);
  });

  it('should return a configuration with the correct name for the second config', async () => {
    const config = await getPluginStylistic();
    expect(config[1].name).toBe('djblackeaagle/stylistic-disable-for-prettier');
  });

  it('should return a configuration with the correct rules for the second config', async () => {
    const config = await getPluginStylistic();
    const rules = config[1].rules as Linter.RulesRecord;

    expect(rules['@stylistic/space-infix-ops']).toBe('off');
    expect(rules['@stylistic/semi']).toEqual(['error', 'always']);
    expect(rules['@stylistic/quotes']).toBe('off');
    expect(rules['@stylistic/indent']).toBe('off');
    expect(rules['@stylistic/no-multiple-empty-lines']).toBe('off');
  });
});
