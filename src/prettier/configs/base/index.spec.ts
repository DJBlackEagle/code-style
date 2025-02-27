import { base } from './index';

describe('prettier.configs.base.getConfig', () => {
  it('should return the correct configuration object', () => {
    const config = base.getConfig();
    expect(config).toEqual({
      printWidth: 80,
      semi: true,
      tabWidth: 64,
      trailingComma: 'all',
      singleQuote: false,
      bracketSpacing: true,
      bracketSameLine: true,
      endOfLine: 'lf',
    });
  });
});
