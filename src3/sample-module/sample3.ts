import { criticalFunction } from './criticalFunction';

export const funcThatCallsCriticalFunction = (): void => {
  criticalFunction();
  return;
};
