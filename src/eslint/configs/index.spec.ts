import { configs } from './index';

describe('configs', () => {
  const expectedKeys = ['base'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(configs).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(configs)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid function in configs',
    (property) => {
      expect(configs).toBeInstanceOf(Object);
      expect(configs).toHaveProperty(property);
      expect((configs as Record<string, unknown>)[property]).toBeInstanceOf(
        Function,
      );
    },
  );
});
