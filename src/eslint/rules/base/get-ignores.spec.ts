import fs from 'fs';
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import { getIgnores } from './get-ignores';

jest.mock('fs/promises');
jest.mock('fs');
jest.mock('node:path');
jest.mock('@eslint/compat');

describe('getIgnores', () => {
  const mockStatSync = fs.statSync as jest.Mock;
  const mockExistsSync = fs.existsSync as jest.Mock;
  const mockResolve = path.resolve as jest.Mock;
  const mockDirname = path.dirname as jest.Mock;
  const mockIncludeIgnoreFile = includeIgnoreFile as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return default ignores when no rootPath is provided', async () => {
    mockExistsSync.mockReturnValue(true);
    mockStatSync.mockReturnValue({ isFile: () => false });
    mockResolve.mockImplementation((...args) => args.join('/'));
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

  it('should handle rootPath as a file', async () => {
    mockExistsSync.mockReturnValue(true);
    mockStatSync.mockReturnValue({ isFile: () => true });
    mockResolve.mockImplementation((...args) => args.join('/'));
    mockDirname.mockReturnValue('/path/to');
    mockIncludeIgnoreFile.mockReturnValue({
      name: 'gitignore',
      ignores: ['node_modules'],
    });

    const result = await getIgnores('/path/to/file.ts');

    expect(mockDirname).toHaveBeenCalledWith('/path/to/file.ts');
    expect(mockResolve).toHaveBeenCalledWith('/path/to', '.gitignore');

    expect(result).toEqual([
      {
        name: 'Ignore folders and files globally',
        ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/yarn.lock'],
      },
      { name: 'gitignore', ignores: ['node_modules'] },
    ]);
  });

  it('should handle rootPath as a directory', async () => {
    mockExistsSync.mockReturnValue(true);
    mockStatSync.mockReturnValue({ isFile: () => false });
    mockResolve.mockImplementation((...args) => args.join('/'));
    mockIncludeIgnoreFile.mockReturnValue({
      name: 'gitignore',
      ignores: ['node_modules'],
    });

    const result = await getIgnores('/path/to/directory');
    expect(mockResolve).toHaveBeenCalledWith(
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
    mockExistsSync.mockReturnValue(true);
    mockStatSync.mockReturnValue({ isFile: () => false });
    mockResolve.mockImplementation((...args) => args.join('/'));
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

  it('should throw an error if the root path does not exist', async () => {
    mockExistsSync.mockReturnValue(false);
    await expect(getIgnores('/nonexistent/path')).rejects.toThrow(
      'The path /nonexistent/path does not exist.',
    );
  });

  it('should handle fs.stat throwing an error', async () => {
    mockExistsSync.mockReturnValue(true);
    mockStatSync.mockImplementation(() => {
      const error = new Error('stat error') as Error & { code?: string };
      error.code = 'EACCES';
      throw error;
    });
    mockResolve.mockReturnValue('/resolved/path');
    await expect(getIgnores('/some/path')).rejects.toThrow();
  });
});
