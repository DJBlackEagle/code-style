/**
 * Generates a greeting message.
 * @param {string} [who] - The name of the person to greet.
 * @returns {string} The greeting message.
 */
function howAreYou(who: string = 'world'): string {
  return `How are you ${who}! `;
}

export { howAreYou };
