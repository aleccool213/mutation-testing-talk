import { isOldEnoughEmployee } from '../sample2';

describe('isOldEnoughEmployee', () => {
  it('should return true if old enough, is full time and knows typescript', () => {
    const person = { age: 35, isFullTime: true, knowsTypeScript: true };
    expect(isOldEnoughEmployee(person)).toEqual(true);
  });

  // it('should return true if old enough, is full time and knows typescript', () => {
  //   const person = { age: 35, isFullTime: false, knowsTypeScript: true };
  //   expect(isOldEnoughEmployee(person)).toEqual(false);
  // });
});
