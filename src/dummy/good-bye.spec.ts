import { goodBye } from './good-bye';

describe('goodBye', () => {
  it('should return "Good bye world! " when no argument is passed', () => {
    expect(goodBye()).toBe('Good bye world! ');
  });

  it('should return "Good bye John! " when "John" is passed as an argument', () => {
    expect(goodBye('John')).toBe('Good bye John! ');
  });
});
