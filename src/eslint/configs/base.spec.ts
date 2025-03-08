import path from 'node:path';
import { rules } from '../rules';
import { base } from './base';

jest.mock('../rules');
jest.mock('node:path');

describe('base', () => {
  const mockPathResolve = path.resolve as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve the ESLint configuration for the specified root path', async () => {
    mockPathResolve.mockImplementation((...args) => args.join('/'));

    const mockConfig = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    (rules.getCommon as jest.Mock).mockResolvedValue([mockConfig[0]]);
    (rules.getEslint as jest.Mock).mockResolvedValue([mockConfig[1]]);
    (rules.getEslintJs as jest.Mock).mockResolvedValue([mockConfig[2]]);
    (rules.getIgnores as jest.Mock).mockResolvedValue([mockConfig[3]]);
    (rules.getImportResolver as jest.Mock).mockResolvedValue([mockConfig[4]]);
    (rules.getPluginImport as jest.Mock).mockResolvedValue([mockConfig[5]]);
    (rules.getPluginJsDoc as jest.Mock).mockResolvedValue([mockConfig[6]]);
    (rules.getPluginPrettier as jest.Mock).mockResolvedValue([mockConfig[7]]);
    (rules.getPluginStylistic as jest.Mock).mockResolvedValue([mockConfig[8]]);
    (rules.getTypeScript as jest.Mock).mockResolvedValue([mockConfig[9]]);

    const result = await base('some/root/path');

    expect(mockPathResolve).toHaveBeenCalledWith('some/root/path');
    expect(mockPathResolve).toHaveBeenCalledTimes(1);

    expect(result).toBeDefined();

    expect(Array.isArray(result)).toBe(true);
    expect(Object.keys(result).length).toBe(10);

    expect(result).toEqual(mockConfig);

    expect(rules.getCommon).toHaveBeenCalledWith('some/root/path');
    expect(rules.getEslint).toHaveBeenCalled();
    expect(rules.getEslintJs).toHaveBeenCalled();
    expect(rules.getIgnores).toHaveBeenCalledWith('some/root/path');
    expect(rules.getImportResolver).toHaveBeenCalled();
    expect(rules.getPluginImport).toHaveBeenCalled();
    expect(rules.getPluginJsDoc).toHaveBeenCalled();
    expect(rules.getPluginPrettier).toHaveBeenCalled();
    expect(rules.getPluginStylistic).toHaveBeenCalled();
    expect(rules.getTypeScript).toHaveBeenCalled();
  });

  it('should retrieve the ESLint configuration with default root path if none is provided', async () => {
    mockPathResolve.mockImplementation((...args) => args.join('/'));

    const mockConfig = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    (rules.getCommon as jest.Mock).mockResolvedValue([mockConfig[0]]);
    (rules.getEslint as jest.Mock).mockResolvedValue([mockConfig[1]]);
    (rules.getEslintJs as jest.Mock).mockResolvedValue([mockConfig[2]]);
    (rules.getIgnores as jest.Mock).mockResolvedValue([mockConfig[3]]);
    (rules.getImportResolver as jest.Mock).mockResolvedValue([mockConfig[4]]);
    (rules.getPluginImport as jest.Mock).mockResolvedValue([mockConfig[5]]);
    (rules.getPluginJsDoc as jest.Mock).mockResolvedValue([mockConfig[6]]);
    (rules.getPluginPrettier as jest.Mock).mockResolvedValue([mockConfig[7]]);
    (rules.getPluginStylistic as jest.Mock).mockResolvedValue([mockConfig[8]]);
    (rules.getTypeScript as jest.Mock).mockResolvedValue([mockConfig[9]]);

    const result = await base();

    expect(mockPathResolve).toHaveBeenCalledWith('');
    expect(mockPathResolve).toHaveBeenCalledTimes(1);

    expect(result).toBeDefined();

    expect(Array.isArray(result)).toBe(true);
    expect(Object.keys(result).length).toBe(10);

    expect(result).toEqual(mockConfig);

    expect(rules.getCommon).toHaveBeenCalledWith('');
    expect(rules.getEslint).toHaveBeenCalled();
    expect(rules.getEslintJs).toHaveBeenCalled();
    expect(rules.getIgnores).toHaveBeenCalledWith('');
    expect(rules.getImportResolver).toHaveBeenCalled();
    expect(rules.getPluginImport).toHaveBeenCalled();
    expect(rules.getPluginJsDoc).toHaveBeenCalled();
    expect(rules.getPluginPrettier).toHaveBeenCalled();
    expect(rules.getPluginStylistic).toHaveBeenCalled();
    expect(rules.getTypeScript).toHaveBeenCalled();
  });
});
