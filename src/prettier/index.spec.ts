import { prettier } from './index';

describe('prettier', () => {
  const expectedKeys = ['getConfig'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(prettier).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(prettier)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid function in prettier',
    (property) => {
      expect(prettier).toBeInstanceOf(Object);
      expect(prettier).toHaveProperty(property);
      expect((prettier as Record<string, unknown>)[property]).toBeInstanceOf(
        Object,
      );
    },
  );

  describe('getConfig', () => {
    const expectedConfig = {
      printWidth: 80,
      semi: true,
      tabWidth: 2,
      trailingComma: 'all',
      singleQuote: true,
      bracketSpacing: true,
      bracketSameLine: true,
      endOfLine: 'lf',
    };

    const expectedObject: Record<string, unknown> = Object.fromEntries(
      Object.keys(expectedConfig).map((key) => [key, expect.anything()]),
    );

    it('should return the exact configuration object', () => {
      const config = prettier.getConfig();
      expect(config).toStrictEqual(expectedConfig);
    });

    it('should return a valid object with all expected keys', () => {
      const config = prettier.getConfig();
      expect(config).toBeInstanceOf(Object);
      expect(config).toMatchObject(expectedObject);
    });
  });
});
