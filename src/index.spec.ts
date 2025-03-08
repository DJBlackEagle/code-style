import { codeStyle } from './index';

describe('index', () => {
  const expectedKeys = ['eslint', 'prettier'] as const;

  it('should have exactly the expected properties', () => {
    expect(codeStyle).toMatchObject({
      eslint: expect.any(Object),
      prettier: expect.any(Object),
    });
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in codeStyle',
    (property) => {
      expect(codeStyle).toBeInstanceOf(Object);
      expect(codeStyle[property]).toBeInstanceOf(Object);
    },
  );
});
