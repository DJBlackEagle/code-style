import { rules } from '../../rules';

/**
 * Asynchronously retrieves the ESLint configuration for the specified root path.
 * @param {string} [rootPath] - The root path to use for retrieving the configuration.
 * @returns {Promise<import('eslint').Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function getConfig(
  rootPath: string = '',
): Promise<import('eslint').Linter.Config[]> {
  const config: Array<import('eslint').Linter.Config> = [];

  config.push(...(await rules.base.getIgnores(rootPath)));
  config.push(...(await rules.base.getCommon(rootPath)));
  config.push(...(await rules.base.getImportResolver()));
  config.push(...(await rules.base.getEslintJs()));
  config.push(...(await rules.base.getTypeScript()));
  config.push(...(await rules.base.getPluginImport()));
  config.push(...(await rules.base.getPluginStylistic()));
  config.push(...(await rules.base.getPluginJsDoc()));
  config.push(...(await rules.base.getPluginPrettier()));
  config.push(...(await rules.djblackeagle.getEslint()));
  config.push(...(await rules.djblackeagle.getPluginImport()));
  config.push(...(await rules.djblackeagle.getPluginStylistic()));
  config.push(...(await rules.djblackeagle.getTypeScript()));

  return config;
}

export const djblackeagle = { getConfig };
