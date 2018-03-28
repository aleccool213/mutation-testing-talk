import { isOldEnough } from './sample';

describe('isOldEnough', () => {
  it('should return true if old enough', () => {
    const person = { age: 35 };
    expect(isOldEnough(person)).toEqual(true);
  });

  it('should return true if old enough', () => {
    const person = { age: 30 };
    expect(isOldEnough(person)).toEqual(true);
  });
});
