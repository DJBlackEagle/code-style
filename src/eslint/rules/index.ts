import { getCommon } from './get-common';
import { getEslint } from './get-eslint';
import { getEslintJs } from './get-eslint-js';
import { getIgnores } from './get-ignores';
import { getImportResolver } from './get-import-resolver';
import { getPluginImport } from './get-plugin-import';
import { getPluginJsDoc } from './get-plugin-js-doc';
import { getPluginPrettier } from './get-plugin-prettier';
import { getPluginStylistic } from './get-plugin-stylistic';
import { getTypeScript } from './get-type-script';

export const rules = {
  getCommon,
  getEslint,
  getEslintJs,
  getIgnores,
  getImportResolver,
  getPluginImport,
  getPluginJsDoc,
  getPluginPrettier,
  getPluginStylistic,
  getTypeScript,
};
