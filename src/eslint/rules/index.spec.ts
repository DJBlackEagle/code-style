import { rules } from './index';

describe('rules', () => {
  const expectedKeys = [
    'getCommon',
    'getEslint',
    'getEslintJs',
    'getIgnores',
    'getImportResolver',
    'getPluginImport',
    'getPluginJsDoc',
    'getPluginPrettier',
    'getPluginStylistic',
    'getTypeScript',
  ] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(rules).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(rules)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid function in rules',
    (property) => {
      expect(rules).toBeInstanceOf(Object);
      expect(rules).toHaveProperty(property);
      expect((rules as Record<string, unknown>)[property]).toBeInstanceOf(
        Function,
      );
    },
  );
});
