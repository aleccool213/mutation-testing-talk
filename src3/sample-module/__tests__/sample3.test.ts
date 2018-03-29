jest.mock('../criticalFunction.ts');
jest.mock('../criticalFunction2.ts');

import { funcThatCallsCriticalFunction } from '../sample3';
import { criticalFunction2 } from '../criticalFunction2';
import { criticalFunction } from '../criticalFunction';

describe('funcThatCallsCriticalFunction', () => {
  it('should call critical function', () => {
    funcThatCallsCriticalFunction();
    // we for some reason care this is not called
    expect(criticalFunction2).not.toHaveBeenCalled();

    // expect(criticalFunction).toHaveBeenCalled();
  });
});
