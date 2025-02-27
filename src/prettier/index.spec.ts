import { prettier } from './index';

describe('prettier.getConfig', () => {
  it('should return the correct configuration object', () => {
    const config = prettier.getConfig();
    expect(config).toEqual({
      printWidth: 80,
      semi: true,
      tabWidth: 2,
      trailingComma: 'all',
      singleQuote: true,
      bracketSpacing: true,
      bracketSameLine: true,
      endOfLine: 'lf',
    });
  });
});
