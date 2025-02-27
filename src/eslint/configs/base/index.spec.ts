import { rules } from '../../rules';
import { base } from './index';

jest.mock('../../rules', () => ({
  rules: {
    base: {
      getIgnores: jest.fn(),
      getCommon: jest.fn(),
      getImportResolver: jest.fn(),
      getEslintJs: jest.fn(),
      getTypeScript: jest.fn(),
      getPluginImport: jest.fn(),
      getPluginStylistic: jest.fn(),
      getPluginJsDoc: jest.fn(),
      getPluginPrettier: jest.fn(),
    },
  },
}));

describe('eslint.configs.base.getConfig', () => {
  const mockRootPath = 'mockRootPath';

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should retrieve ESLint configuration based on the provided root path', async () => {
    const mockConfig = [
      { rules: { 'no-console': 'error' } },
      { rules: { 'import/no-unresolved': 'error' } },
      // ...other mock configurations...
    ];

    (rules.base.getIgnores as jest.Mock).mockResolvedValue([mockConfig[0]]);
    (rules.base.getCommon as jest.Mock).mockResolvedValue([mockConfig[1]]);
    (rules.base.getImportResolver as jest.Mock).mockResolvedValue([]);
    (rules.base.getEslintJs as jest.Mock).mockResolvedValue([]);
    (rules.base.getTypeScript as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginImport as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginStylistic as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginJsDoc as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginPrettier as jest.Mock).mockResolvedValue([]);

    const config = await base.getConfig(mockRootPath);

    expect(config).toEqual(mockConfig);
    expect(config.length).toEqual(2);
    expect(rules.base.getIgnores).toHaveBeenCalledWith(mockRootPath);
    expect(rules.base.getCommon).toHaveBeenCalledWith(mockRootPath);
    expect(rules.base.getImportResolver).toHaveBeenCalled();
    expect(rules.base.getEslintJs).toHaveBeenCalled();
    expect(rules.base.getTypeScript).toHaveBeenCalled();
    expect(rules.base.getPluginImport).toHaveBeenCalled();
    expect(rules.base.getPluginStylistic).toHaveBeenCalled();
    expect(rules.base.getPluginJsDoc).toHaveBeenCalled();
    expect(rules.base.getPluginPrettier).toHaveBeenCalled();
  });

  it('should use default root path if none is provided', async () => {
    const mockConfig = [
      { rules: { 'no-console': 'error' } },
      { rules: { 'import/no-unresolved': 'error' } },
    ];

    (rules.base.getIgnores as jest.Mock).mockResolvedValue([mockConfig[0]]);
    (rules.base.getCommon as jest.Mock).mockResolvedValue([mockConfig[1]]);
    (rules.base.getImportResolver as jest.Mock).mockResolvedValue([]);
    (rules.base.getEslintJs as jest.Mock).mockResolvedValue([]);
    (rules.base.getTypeScript as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginImport as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginStylistic as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginJsDoc as jest.Mock).mockResolvedValue([]);
    (rules.base.getPluginPrettier as jest.Mock).mockResolvedValue([]);

    const config = await base.getConfig();

    expect(config).toEqual(mockConfig);
    expect(config.length).toEqual(2);
    expect(rules.base.getIgnores).toHaveBeenCalledWith('');
    expect(rules.base.getCommon).toHaveBeenCalledWith('');
    expect(rules.base.getImportResolver).toHaveBeenCalled();
    expect(rules.base.getEslintJs).toHaveBeenCalled();
    expect(rules.base.getTypeScript).toHaveBeenCalled();
    expect(rules.base.getPluginImport).toHaveBeenCalled();
    expect(rules.base.getPluginStylistic).toHaveBeenCalled();
    expect(rules.base.getPluginJsDoc).toHaveBeenCalled();
    expect(rules.base.getPluginPrettier).toHaveBeenCalled();
  });
});
