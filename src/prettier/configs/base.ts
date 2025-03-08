/**
 * Returns a configuration object for Prettier.
 * @returns {object} A configuration object with the following properties:
 * - `printWidth` {number}: The line length where Prettier will try to wrap code. Default is 80.
 * - `semi` {boolean}: Whether to add a semicolon at the end of every statement. Default is true.
 * - `tabWidth` {number}: Number of spaces per indentation level. Default is 2.
 * - `trailingComma` {string}: Print trailing commas wherever possible. Options are 'none', 'es5', or 'all'. Default is 'all'.
 * - `singleQuote` {boolean}: Use single quotes instead of double quotes. Default is true.
 * - `bracketSpacing` {boolean}: Print spaces between brackets in object literals. Default is true.
 * - `bracketSameLine` {boolean}: Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line. Default is true.
 * - `endOfLine` {string}: Which end of line characters to apply. Options are 'auto', 'lf', 'crlf', or 'cr'. Default is 'lf'.
 */
function base(): { [key: string]: unknown } {
  const config = {
    printWidth: 80,
    semi: true,
    tabWidth: 2,
    trailingComma: 'all',
    singleQuote: true,
    bracketSpacing: true,
    bracketSameLine: true,
    endOfLine: 'lf',
  };

  return config;
}

export { base };
