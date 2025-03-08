import { getPluginImport } from './get-plugin-import';

jest.mock('eslint-plugin-import', () => ({
  __esModule: true,
  flatConfigs: {
    recommended: {
      name: 'mock-recommended-config',
      rules: {
        'mock-rule-1': 'error',
        'mock-rule-2': 'warn',
      },
    },
  },
}));

describe('getPluginImport', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array with one configuration object', async () => {
    const result = await getPluginImport();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(2);
  });

  it('should return a configuration object with the correct name', async () => {
    const result = await getPluginImport();
    expect(result[0].name).toBe('mock-recommended-config');
  });

  it('should return a configuration object with the correct rules', async () => {
    const result = await getPluginImport();
    expect(result[0].rules).toEqual({
      'mock-rule-1': 'error',
      'mock-rule-2': 'warn',
    });
  });
});
