import { prettier } from './index';

describe('prettier', () => {
  const expectedKeys = ['configs'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(prettier).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(prettier)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in prettier',
    (property) => {
      expect(prettier).toBeInstanceOf(Object);
      expect(prettier).toHaveProperty(property);
      expect((prettier as Record<string, unknown>)[property]).toBeInstanceOf(
        Object,
      );
    },
  );
});
