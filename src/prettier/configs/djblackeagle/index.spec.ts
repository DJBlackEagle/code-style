import { djblackeagle } from './index';

describe('prettier.configs.djblackeagle.getConfig', () => {
  it('should return the correct configuration object', () => {
    const config = djblackeagle.getConfig();
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
