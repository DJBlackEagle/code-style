import { getPluginStylistic } from './get-plugin-stylistic';

// Mock the @stylistic/eslint-plugin module
jest.mock('@stylistic/eslint-plugin', () => ({
  __esModule: true,
  default: {
    configs: {
      recommended: {
        name: '@stylistic/eslint-plugin',
        rules: {
          'mock-stylistic-rule-1': 'error',
          'mock-stylistic-rule-2': 'warn',
        },
      },
    },
  },
}));

describe('getPluginStylistic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array with one configuration object', async () => {
    const result = await getPluginStylistic();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(1);
  });

  it('should return a configuration object with the correct name', async () => {
    const result = await getPluginStylistic();
    expect(result[0].name).toBe('@stylistic/eslint-plugin');
  });

  it('should return a configuration object with the correct rules', async () => {
    const result = await getPluginStylistic();
    expect(result[0].rules).toEqual({
      'mock-stylistic-rule-1': 'error',
      'mock-stylistic-rule-2': 'warn',
    });
  });

  it('should spread recommended config properties', async () => {
    const result = await getPluginStylistic();
    expect(result[0]).toEqual(
      expect.objectContaining({
        rules: expect.any(Object),
      }),
    );
  });

  it('should have a property `name`', async () => {
    const result = await getPluginStylistic();
    expect(result[0]).toHaveProperty('name', '@stylistic/eslint-plugin');
  });
});
