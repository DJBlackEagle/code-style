import { eslint } from './index';

describe('eslint', () => {
  const expectedKeys = ['configs', 'rules'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(eslint).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(eslint)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in eslint',
    (property) => {
      expect(eslint).toBeInstanceOf(Object);
      expect(eslint).toHaveProperty(property);
      expect((eslint as Record<string, unknown>)[property]).toBeInstanceOf(
        Object,
      );
    },
  );
});

// import { rules } from './rules';
// import { eslint } from './index';

// jest.mock('./rules', () => ({
//   rules: {
//     base: {
//       getIgnores: jest.fn(),
//       getCommon: jest.fn(),
//       getImportResolver: jest.fn(),
//       getEslintJs: jest.fn(),
//       getTypeScript: jest.fn(),
//       getPluginImport: jest.fn(),
//       getPluginStylistic: jest.fn(),
//       getPluginJsDoc: jest.fn(),
//       getPluginPrettier: jest.fn(),
//     },
//     djblackeagle: {
//       getEslint: jest.fn(),
//       getPluginImport: jest.fn(),
//       getPluginStylistic: jest.fn(),
//       getTypeScript: jest.fn(),
//     },
//   },
// }));

// describe('eslint.getConfig', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should retrieve ESLint configuration based on the provided root path', async () => {
//     const mockProjectPath = 'mockProjectPath';
//     const mockConfig = [
//       { rules: { 'no-console': 'error' } },
//       { rules: { 'import/no-unresolved': 'error' } },
//     ];

//     (rules.base.getIgnores as jest.Mock).mockResolvedValue([mockConfig[0]]);
//     (rules.base.getCommon as jest.Mock).mockResolvedValue([mockConfig[1]]);
//     (rules.base.getImportResolver as jest.Mock).mockResolvedValue([]);
//     (rules.base.getEslintJs as jest.Mock).mockResolvedValue([]);
//     (rules.base.getTypeScript as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginImport as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginStylistic as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginJsDoc as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginPrettier as jest.Mock).mockResolvedValue([]);

//     (rules.djblackeagle.getEslint as jest.Mock).mockResolvedValue([]);
//     (rules.djblackeagle.getPluginImport as jest.Mock).mockResolvedValue([]);
//     (rules.djblackeagle.getPluginStylistic as jest.Mock).mockResolvedValue([]);
//     (rules.djblackeagle.getTypeScript as jest.Mock).mockResolvedValue([]);

//     const config = await eslint.getConfig(mockProjectPath);

//     expect(config).toEqual(mockConfig);
//     expect(config.length).toEqual(2);
//     expect(rules.base.getIgnores).toHaveBeenCalledWith(mockProjectPath);
//     expect(rules.base.getCommon).toHaveBeenCalledWith(mockProjectPath);
//     expect(rules.base.getImportResolver).toHaveBeenCalled();
//     expect(rules.base.getEslintJs).toHaveBeenCalled();
//     expect(rules.base.getTypeScript).toHaveBeenCalled();
//     expect(rules.base.getPluginImport).toHaveBeenCalled();
//     expect(rules.base.getPluginStylistic).toHaveBeenCalled();
//     expect(rules.base.getPluginJsDoc).toHaveBeenCalled();
//     expect(rules.base.getPluginPrettier).toHaveBeenCalled();
//     expect(rules.djblackeagle.getEslint).toHaveBeenCalled();
//     expect(rules.djblackeagle.getPluginImport).toHaveBeenCalled();
//     expect(rules.djblackeagle.getPluginStylistic).toHaveBeenCalled();
//     expect(rules.djblackeagle.getTypeScript).toHaveBeenCalled();
//   });

//   it('should use default root path if none is provided', async () => {
//     const mockProjectPath = 'mockProjectPath';
//     const mockConfig = [
//       { rules: { 'no-console': 'error' } },
//       { rules: { 'import/no-unresolved': 'error' } },
//       // ...other mock configurations...
//     ];

//     (rules.base.getIgnores as jest.Mock).mockResolvedValue([mockConfig[0]]);
//     (rules.base.getCommon as jest.Mock).mockResolvedValue([mockConfig[1]]);
//     (rules.base.getImportResolver as jest.Mock).mockResolvedValue([]);
//     (rules.base.getEslintJs as jest.Mock).mockResolvedValue([]);
//     (rules.base.getTypeScript as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginImport as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginStylistic as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginJsDoc as jest.Mock).mockResolvedValue([]);
//     (rules.base.getPluginPrettier as jest.Mock).mockResolvedValue([]);

//     (rules.djblackeagle.getEslint as jest.Mock).mockResolvedValue([]);
//     (rules.djblackeagle.getPluginImport as jest.Mock).mockResolvedValue([]);
//     (rules.djblackeagle.getPluginStylistic as jest.Mock).mockResolvedValue([]);
//     (rules.djblackeagle.getTypeScript as jest.Mock).mockResolvedValue([]);

//     const config = await eslint.getConfig(mockProjectPath);

//     expect(config).toEqual(mockConfig);
//     expect(config.length).toEqual(2);
//     expect(rules.base.getIgnores).toHaveBeenCalledWith(mockProjectPath);
//     expect(rules.base.getCommon).toHaveBeenCalledWith(mockProjectPath);
//     expect(rules.base.getImportResolver).toHaveBeenCalled();
//     expect(rules.base.getEslintJs).toHaveBeenCalled();
//     expect(rules.base.getTypeScript).toHaveBeenCalled();
//     expect(rules.base.getPluginImport).toHaveBeenCalled();
//     expect(rules.base.getPluginStylistic).toHaveBeenCalled();
//     expect(rules.base.getPluginJsDoc).toHaveBeenCalled();
//     expect(rules.base.getPluginPrettier).toHaveBeenCalled();
//     expect(rules.djblackeagle.getEslint).toHaveBeenCalled();
//     expect(rules.djblackeagle.getPluginImport).toHaveBeenCalled();
//     expect(rules.djblackeagle.getPluginStylistic).toHaveBeenCalled();
//     expect(rules.djblackeagle.getTypeScript).toHaveBeenCalled();
//   });
// });
