/**
 * Returns a goodbye message.
 * @param {string} [who] - The name of the person to say goodbye to.
 * @returns {string} The goodbye message.
 */
function goodBye(who: string = 'world'): string {
  return `Good bye ${who}! `;
}

export { goodBye };
