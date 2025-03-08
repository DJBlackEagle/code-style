import { djblackeagle } from './index';

describe('djblackeagle', () => {
  const expectedKeys = [
    'getEslint',
    'getPluginImport',
    'getPluginStylistic',
    'getTypeScript',
  ] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(djblackeagle).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(djblackeagle)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid function in djblackeagle',
    (property) => {
      expect(djblackeagle).toBeInstanceOf(Object);
      expect(djblackeagle).toHaveProperty(property);
      expect(
        (djblackeagle as Record<string, unknown>)[property],
      ).toBeInstanceOf(Object);
    },
  );
});
