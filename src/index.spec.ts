import { codeStyle } from './index';

describe('index', () => {
  const expectedKeys = ['commitlint', 'eslint', 'prettier'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(codeStyle).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(codeStyle)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in codeStyle',
    (property) => {
      expect(codeStyle).toBeInstanceOf(Object);
      expect(codeStyle).toHaveProperty(property);
      expect((codeStyle as Record<string, unknown>)[property]).toBeInstanceOf(
        Object,
      );
    },
  );
});
