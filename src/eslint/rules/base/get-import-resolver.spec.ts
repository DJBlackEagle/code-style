import type { Linter } from 'eslint';
import { getImportResolver } from './get-import-resolver';

describe('getImportResolver', () => {
  it('should return an array with one configuration object', async () => {
    const result: Linter.Config[] = await getImportResolver();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(1);
  });

  it('should return a configuration object with the correct name', async () => {
    const result: Linter.Config[] = await getImportResolver();
    expect(result[0].name).toBe('import resolver settings');
  });

  it('should return a configuration object with the correct settings', async () => {
    const result: Linter.Config[] = await getImportResolver();
    expect(result[0].settings).toBeDefined();
    expect(result[0].settings?.['import/extensions']).toEqual([
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ]);
  });

  it('should return a configuration object with node resolver settings', async () => {
    const result: Linter.Config[] = await getImportResolver();
    const resolver = result[0].settings?.['import/resolver'] as {
      node?: { extensions: string[] };
    };
    expect(resolver).toBeDefined();
    expect(resolver?.node?.extensions).toEqual(['.js', '.jsx', '.ts', '.tsx']);
  });

  it('should return a configuration object with core modules settings', async () => {
    const result: Linter.Config[] = await getImportResolver();
    expect(result[0].settings?.['import/core-modules']).toBeDefined();
    expect(result[0].settings?.['import/core-modules']).toEqual([
      '@typescript-eslint/parser',
      'typescript-eslint',
    ]);
  });
});
