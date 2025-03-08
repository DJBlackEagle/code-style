import fs from 'fs';
import path from 'node:path';
import { Linter } from 'eslint';
import globals from 'globals';
import { getCommon } from './get-common';

jest.mock('fs');
jest.mock('node:path');

describe('getCommon', () => {
  const mockFsStatSync = fs.statSync as jest.Mock;
  const mockPathResolve = path.resolve as jest.Mock;
  const mockPathDirname = path.dirname as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return correct ESLint configurations when no projectPath is provided', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => false });
    mockPathResolve.mockImplementation((...args) => args.join('/'));

    const config: Linter.Config[] = await getCommon('');

    expect(mockPathResolve).toHaveBeenCalledWith('');

    expect(config).toHaveLength(2);
    expect(config[0]).toEqual({
      name: 'Applies to files matching',
      files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    });
    expect(config[1]).toEqual({
      name: 'Language options',
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: expect.any(Object),
        parserOptions: {
          project: './tsconfig.eslint.json',
          tsconfigRootDir: '',
        },
        globals: expect.objectContaining({
          ...globals.browser,
          ...globals.node,
        }),
      },
    });
  });

  it('should return correct ESLint configurations for a given project path', async () => {
    const mockedPath = '/path/to';
    mockFsStatSync.mockReturnValue({ isFile: () => false });
    mockPathResolve.mockImplementation((...args) => args.join('/'));

    const config: Linter.Config[] = await getCommon(mockedPath);

    expect(mockFsStatSync).toHaveBeenCalledWith(mockedPath);
    expect(mockPathResolve).toHaveBeenCalledWith(mockedPath);

    expect(config).toHaveLength(2);
    expect(config[0]).toEqual({
      name: 'Applies to files matching',
      files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    });
    expect(config[1]).toEqual({
      name: 'Language options',
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: expect.any(Object),
        parserOptions: {
          project: './tsconfig.eslint.json',
          tsconfigRootDir: mockedPath,
        },
        globals: expect.objectContaining({
          ...globals.browser,
          ...globals.node,
        }),
      },
    });
  });

  it('hould handle project path as a file', async () => {
    mockFsStatSync.mockReturnValue({ isFile: () => true });
    mockPathResolve.mockImplementation((...args) => args.join('/'));
    mockPathDirname.mockReturnValue('/path/to');

    const config: Linter.Config[] = await getCommon('/path/to/file.ts');

    expect(mockFsStatSync).toHaveBeenCalledWith('/path/to/file.ts');
    expect(mockPathDirname).toHaveBeenCalledWith('/path/to/file.ts');
    expect(mockPathResolve).toHaveBeenCalledWith('/path/to');

    expect(config).toHaveLength(2);
    expect(config[0]).toEqual({
      name: 'Applies to files matching',
      files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    });
    expect(config[1]).toEqual({
      name: 'Language options',
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: expect.any(Object),
        parserOptions: {
          project: './tsconfig.eslint.json',
          tsconfigRootDir: '/path/to',
        },
        globals: expect.objectContaining({
          ...globals.browser,
          ...globals.node,
        }),
      },
    });
  });
});
