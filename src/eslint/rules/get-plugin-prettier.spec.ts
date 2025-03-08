import { getPluginPrettier } from './get-plugin-prettier';

// Mock the eslint-plugin-prettier/recommended module
jest.mock('eslint-plugin-prettier/recommended', () => ({
  __esModule: true,
  default: {
    name: 'eslint-plugin-prettier/recommended',
    rules: {
      'mock-prettier-rule-1': 'error',
      'mock-prettier-rule-2': 'warn',
    },
  },
}));

describe('getPluginPrettier', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array with one configuration object', async () => {
    const result = await getPluginPrettier();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(1);
  });

  it('should return a configuration object with the correct name', async () => {
    const result = await getPluginPrettier();
    expect(result[0].name).toBe('eslint-plugin-prettier/recommended');
  });

  it('should return a configuration object with the correct rules', async () => {
    const result = await getPluginPrettier();
    expect(result[0].rules).toEqual({
      'mock-prettier-rule-1': 'error',
      'mock-prettier-rule-2': 'warn',
    });
  });

  it('should spread recommended config properties', async () => {
    const result = await getPluginPrettier();
    expect(result[0]).toEqual(
      expect.objectContaining({
        rules: expect.any(Object),
      }),
    );
  });

  it('should have a property `name`', async () => {
    const result = await getPluginPrettier();
    expect(result[0]).toHaveProperty(
      'name',
      'eslint-plugin-prettier/recommended',
    );
  });
});
