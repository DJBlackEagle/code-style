import { hello } from './hello';

describe('hello', () => {
  it('should return "Hello world! " when no argument is passed', () => {
    expect(hello()).toBe('Hello world! ');
  });

  it('should return "Hello John! " when "John" is passed as an argument', () => {
    expect(hello('John')).toBe('Hello John! ');
  });
});
