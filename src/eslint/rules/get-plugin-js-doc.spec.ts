import { getPluginJsDoc } from './get-plugin-js-doc';

jest.mock('eslint-plugin-jsdoc', () => ({
  __esModule: true,
  default: {
    configs: {
      'flat/recommended-error': {
        name: 'mock-recommended-error-config',
        rules: {
          'mock-jsdoc-rule-1': 'error',
          'mock-jsdoc-rule-2': 'warn',
        },
      },
    },
  },
}));

describe('getPluginJsDoc', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array with one configuration object', async () => {
    const result = await getPluginJsDoc();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(1);
  });

  it('should return a configuration object with the correct name', async () => {
    const result = await getPluginJsDoc();
    expect(result[0].name).toBe('mock-recommended-error-config');
  });

  it('should return a configuration object with the correct rules', async () => {
    const result = await getPluginJsDoc();
    expect(result[0].rules).toEqual({
      'mock-jsdoc-rule-1': 'error',
      'mock-jsdoc-rule-2': 'warn',
    });
  });
});
