import { Assert } from './testing-environment';

export function executeTests() {
  let result = Assert.areArrayItemsEqual([true, false], [true, false]);
  Assert.assertTrue('areArrayItemsEqual: should accept booleans', result);

  result = Assert.areArrayItemsEqual(['a', 'b'], ['a', 'b']);
  Assert.assertTrue('areArrayItemsEqual: should accept strings', result);

  result = Assert.areArrayItemsEqual([1, 2, 3], [1, 2, 3]);
  Assert.assertTrue('areArrayItemsEqual: should accept numbers', result);

  result = Assert.areArrayItemsEqual([1, 2, 3], [1, 2, 4]);
  Assert.assertFalse('areArrayItemsEqual: should not accept different numbers', result);

  result = Assert.areArrayItemsEqual([1, 2, 3], [1, 3, 2]);
  Assert.assertFalse('areArrayItemsEqual: should not accept different order', result);

  result = Assert.areArrayItemsEqual([1, 2, 3], []);
  Assert.assertFalse('areArrayItemsEqual: should not accept different cardinality', result);

  result = Assert.areArrayItemsEqual(null, [1, 2]);
  Assert.assertFalse('areArrayItemsEqual: should not accept that first is null', result);

  result = Assert.areArrayItemsEqual([1, 2], null);
  Assert.assertFalse('areArrayItemsEqual: should not accept that second is null', result);
}
