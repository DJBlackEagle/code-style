import { commitlint } from './index';

describe('commitlint', () => {
  const expectedKeys = ['configs'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(commitlint).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(commitlint)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in commitlint',
    (property) => {
      expect(commitlint).toBeInstanceOf(Object);
      expect(commitlint).toHaveProperty(property);
      expect((commitlint as Record<string, unknown>)[property]).toBeInstanceOf(
        Object,
      );
    },
  );
});
