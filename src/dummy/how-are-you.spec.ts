import { howAreYou } from './how-are-you';

describe('howAreYou', () => {
  it('should return "How are you world! " when no argument is passed', () => {
    expect(howAreYou()).toBe('How are you world! ');
  });

  it('should return "How are you John! " when "John" is passed as an argument', () => {
    expect(howAreYou('John')).toBe('How are you John! ');
  });
});
