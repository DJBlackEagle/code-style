import fs from 'fs';
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import { getIgnores } from './get-ignores';

jest.mock('fs');
jest.mock('node:path');
jest.mock('@eslint/compat');

describe('getIgnores', () => {
  const mockFsStatSync = fs.statSync as jest.Mock;
  const mockPathResolve = path.resolve as jest.Mock;
  const mockPathDirname = path.dirname as jest.Mock;
  const mockIncludeIgnoreFile = includeIgnoreFile as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return default ignores when no projectPath is provided', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => false });
    mockPathResolve.mockImplementation((...args) => args.join('/'));
    mockIncludeIgnoreFile.mockReturnValue({
      name: 'gitignore',
      ignores: ['node_modules'],
    });

    const result = await getIgnores('');

    expect(result).toEqual([
      {
        name: 'Ignore folders and files globally',
        ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
      },
      { name: 'gitignore', ignores: ['node_modules'] },
    ]);
  });

  it('should handle projectPath as a file', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => true });
    mockPathResolve.mockImplementation((...args) => args.join('/'));
    mockPathDirname.mockReturnValue('/path/to');
    mockIncludeIgnoreFile.mockReturnValue({
      name: 'gitignore',
      ignores: ['node_modules'],
    });

    const result = await getIgnores('/path/to/file.ts');

    expect(mockPathDirname).toHaveBeenCalledWith('/path/to/file.ts');
    expect(mockPathResolve).toHaveBeenCalledWith('/path/to', '.gitignore');

    expect(result).toEqual([
      {
        name: 'Ignore folders and files globally',
        ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
      },
      { name: 'gitignore', ignores: ['node_modules'] },
    ]);
  });

  it('should handle projectPath as a directory', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => false });
    mockPathResolve.mockImplementation((...args) => args.join('/'));
    mockIncludeIgnoreFile.mockReturnValue({
      name: 'gitignore',
      ignores: ['node_modules'],
    });

    const result = await getIgnores('/path/to/directory');
    expect(mockPathResolve).toHaveBeenCalledWith(
      '/path/to/directory',
      '.gitignore',
    );

    expect(result).toEqual([
      {
        name: 'Ignore folders and files globally',
        ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
      },
      { name: 'gitignore', ignores: ['node_modules'] },
    ]);
  });

  it('should return default ignores when no .gitignore is found', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => false });
    mockPathResolve.mockImplementation((...args) => args.join('/'));
    mockIncludeIgnoreFile.mockReturnValue(undefined);

    const result = await getIgnores('/path/to/directory');
    expect(result).toEqual([
      {
        name: 'Ignore folders and files globally',
        ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
      },
      undefined,
    ]);
  });
});
