import { getTypeScript } from './get-type-script';

// Mock the typescript-eslint module
jest.mock('typescript-eslint', () => ({
  __esModule: true,
  default: {
    configs: {
      recommended: [
        {
          name: 'mock-recommended-config-1',
          rules: {
            'mock-typescript-rule-1': 'error',
            'mock-typescript-rule-2': 'warn',
          },
        },
        {
          name: 'mock-recommended-config-2',
          rules: {
            'mock-typescript-rule-3': 'error',
          },
        },
      ],
    },
  },
}));

describe('getTypeScript', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of configuration objects', async () => {
    const result = await getTypeScript();
    expect(result).toBeInstanceOf(Array);
  });

  it('should return a configuration object with the correct rules', async () => {
    const result = await getTypeScript();
    expect(result[0].rules).toEqual({
      'mock-typescript-rule-1': 'error',
      'mock-typescript-rule-2': 'warn',
    });
    expect(result[1].rules).toEqual({
      'mock-typescript-rule-3': 'error',
    });
  });

  it('should return a configuration object with the correct name', async () => {
    const result = await getTypeScript();
    expect(result[0].name).toBe('mock-recommended-config-1');
    expect(result[1].name).toBe('mock-recommended-config-2');
  });

  it('should spread recommended config properties', async () => {
    const result = await getTypeScript();
    expect(result[0]).toEqual(
      expect.objectContaining({
        rules: expect.any(Object),
        name: expect.any(String),
      }),
    );
    expect(result[1]).toEqual(
      expect.objectContaining({
        rules: expect.any(Object),
        name: expect.any(String),
      }),
    );
  });
});
