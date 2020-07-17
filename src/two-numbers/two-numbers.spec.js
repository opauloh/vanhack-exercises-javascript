import { checkTwoNumbersFromListAddUpToNumber } from './two-numbers';

describe('Two numbers from the list add up to k', () => {
  test('Find 10 and 7 from list', () => {
    expect(checkTwoNumbersFromListAddUpToNumber([10, 15, 3, 7], 17)).toEqual(true);
  });
  test('Find 10 and 3 from list', () => {
    expect(checkTwoNumbersFromListAddUpToNumber([10, 15, 3, 7], 13)).toEqual(true);
  });
  test('False to find from list', () => {
    expect(checkTwoNumbersFromListAddUpToNumber([10, 15, 3, 7], 9)).toEqual(false);
  });
})