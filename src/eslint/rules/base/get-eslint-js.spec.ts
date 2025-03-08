import { getEslintJs } from './get-eslint-js';

jest.mock('@eslint/js', () => ({
  __esModule: true,
  default: {
    configs: {
      recommended: {
        plugins: ['test-plugin'],
        rules: {
          'test-rule': 'error',
        },
      },
    },
  },
}));

describe('getEslintJs', () => {
  it('should return an array of ESLint configurations', async () => {
    const configs = await getEslintJs();
    expect(configs).toBeInstanceOf(Array);
    expect(configs.length).toBe(1);
    expect(configs[0]).toHaveProperty('name', '@eslint/js');
  });

  it('should return configurations from @eslint/js/recommended', async () => {
    const configs = await getEslintJs();
    expect(configs[0]).toMatchObject({
      plugins: ['test-plugin'],
      rules: {
        'test-rule': 'error',
      },
    });
  });

  it('should return an array of Linter.Config', async () => {
    const configs = await getEslintJs();

    expect(Array.isArray(configs)).toBeTruthy();
    configs.forEach((item) => {
      expect(item).toHaveProperty('name');
      expect(typeof item.name).toBe('string');
    });
  });
});
