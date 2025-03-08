import fs from 'fs';
import path from 'node:path';
import { getCommon } from './get-common';

jest.mock('fs');
jest.mock('node:path');
jest.mock('@typescript-eslint/parser', () => ({
  __esModule: true,
  default: {},
}));

describe('getCommon', () => {
  const mockFsStatSync = fs.statSync as jest.Mock;
  const mockPathResolve = path.resolve as jest.Mock;
  const mockPathDirname = path.dirname as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return ESLint configurations for a directory', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => false });
    mockPathResolve.mockReturnValue('/project/path');

    const config = await getCommon('/project/path');

    expect(config).toHaveLength(2);
    expect(config[0].name).toBe('Applies to files matching');
    expect(config[1].name).toBe('Language options');
  });

  it('should return ESLint configurations for a file', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => true });
    mockPathDirname.mockReturnValue('/project/path');
    mockPathResolve.mockReturnValue('/project/path');

    const config = await getCommon('/project/path/file.ts');

    expect(config).toHaveLength(2);
    expect(config[0].name).toBe('Applies to files matching');
    expect(config[1].name).toBe('Language options');
  });
});
