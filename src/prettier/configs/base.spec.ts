import { base } from './base';

describe('base()', () => {
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
    const config = base();
    expect(config).toStrictEqual(expectedConfig);
  });

  it('should return a valid object with all expected keys', () => {
    const config = base();
    expect(config).toBeInstanceOf(Object);
    expect(config).toMatchObject(expectedObject);
  });
});
