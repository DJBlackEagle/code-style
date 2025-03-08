import path from 'node:path';
import { Linter } from 'eslint';
import { rules } from '../rules';

/**
 * Asynchronously retrieves the base ESLint configuration.
 * @param {string} [projectPath] - The project path to use for retrieving the configuration.
 * @returns {Promise<Linter.Config[]>} A promise that resolves to an array of ESLint configurations.
 */
async function base(projectPath: string = ''): Promise<Linter.Config[]> {
  const config: Array<Linter.Config> = [];

  const projectPathSave = path.resolve(projectPath);

  config.push(...(await rules.getCommon(projectPathSave)));
  config.push(...(await rules.getEslint()));
  config.push(...(await rules.getEslintJs()));
  config.push(...(await rules.getIgnores(projectPathSave)));
  config.push(...(await rules.getImportResolver()));
  config.push(...(await rules.getPluginImport()));
  config.push(...(await rules.getPluginJsDoc()));
  config.push(...(await rules.getPluginPrettier()));
  config.push(...(await rules.getPluginStylistic()));
  config.push(...(await rules.getTypeScript()));

  return config;
}

export { base };
