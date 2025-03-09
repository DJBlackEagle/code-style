import baseConfig from './jest.config.mjs';

/** @type {import('jest').Config} */
const config = {
  ...baseConfig,

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'text-summary',
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
  ],
};

export default config;
