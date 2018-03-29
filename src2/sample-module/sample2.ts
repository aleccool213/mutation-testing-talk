import { isOldEnough } from './isOldEnough';

/**
 * A hand-written implementation of something could that be done
 * with Rambda.
 * @param {*} Person A person.
 * @return {Boolean} True if the person old enough, full time and know typescript
 */
export const isOldEnoughEmployee = ({
  age,
  isFullTime,
  knowsTypeScript
}): boolean => {
  return isOldEnough({ age }) && isFullTime && knowsTypeScript;
};
