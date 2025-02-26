/**
 * Returns a greeting message.
 * @param {string} [who] - The name of the person to greet.
 * @returns {string} The greeting message.
 */
function hello(who: string = 'world'): string {
  return `Hello ${who}! `;
}

export { hello };
