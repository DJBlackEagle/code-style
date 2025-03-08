import { base } from './index';

describe('base', () => {
  const expectedKeys = [
    'getCommon',
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
    expect(Object.keys(base).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(base)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid function in base',
    (property) => {
      expect(base).toBeInstanceOf(Object);
      expect(base).toHaveProperty(property);
      expect((base as Record<string, unknown>)[property]).toBeInstanceOf(
        Function,
      );
    },
  );
  // const functionNames = [
  //   'getCommon',
  //   'getEslintJs',
  //   'getIgnores',
  //   'getImportResolver',
  //   'getPluginImport',
  //   'getPluginJsDoc',
  //   'getPluginPrettier',
  //   'getPluginStylistic',
  //   'getTypeScript',
  // ];

  // it('should have exactly 9 functions', () => {
  //   expect(Object.keys(base).length).toBe(functionNames.length);
  // });

  // it('should have all expected keys', () => {
  //   expect(Object.keys(base)).toEqual(functionNames);
  // });

  // it('should have correct object structure', () => {
  //   expect(typeof base).toBe('object');
  //   expect(typeof base.getCommon).toBe('function');
  //   expect(typeof base.getEslintJs).toBe('function');
  //   expect(typeof base.getIgnores).toBe('function');
  //   expect(typeof base.getImportResolver).toBe('function');
  //   expect(typeof base.getPluginImport).toBe('function');
  //   expect(typeof base.getPluginJsDoc).toBe('function');
  //   expect(typeof base.getPluginPrettier).toBe('function');
  //   expect(typeof base.getPluginStylistic).toBe('function');
  //   expect(typeof base.getTypeScript).toBe('function');
  // });
});
