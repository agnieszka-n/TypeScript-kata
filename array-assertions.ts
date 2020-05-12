import { Assert } from "./testing-environment";

export class ArrayAssertions {
  static areArrayItemsEqual(array: any[], expectedItems: any[]): boolean {
    if (!array && !expectedItems)
      return true;

    if (!array || !expectedItems)
      return false;

    if (array.length !== expectedItems.length)
      return false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        if (!ArrayAssertions.areArrayItemsEqual(array[i], expectedItems[i])) {
          return false;
        }
      }
      else if (array[i] !== expectedItems[i])
        return false;
    }

    return true;
  }
}

export function executeTests() {
  let result = ArrayAssertions.areArrayItemsEqual([true, false], [true, false]);
  Assert.assertTrue('areArrayItemsEqual: should accept booleans', result);

  result = ArrayAssertions.areArrayItemsEqual(['a', 'b'], ['a', 'b']);
  Assert.assertTrue('areArrayItemsEqual: should accept strings', result);

  result = ArrayAssertions.areArrayItemsEqual([1, 2, 3], [1, 2, 3]);
  Assert.assertTrue('areArrayItemsEqual: should accept numbers', result);

  result = ArrayAssertions.areArrayItemsEqual([1, 2, 3], [1, 2, 4]);
  Assert.assertFalse('areArrayItemsEqual: should not accept different numbers', result);

  result = ArrayAssertions.areArrayItemsEqual([1, 2, 3], [1, 3, 2]);
  Assert.assertFalse('areArrayItemsEqual: should not accept different order', result);

  result = ArrayAssertions.areArrayItemsEqual([1, 2, 3], []);
  Assert.assertFalse('areArrayItemsEqual: should not accept different cardinality', result);

  result = ArrayAssertions.areArrayItemsEqual(null, [1, 2]);
  Assert.assertFalse('areArrayItemsEqual: should not accept that first is null', result);

  result = ArrayAssertions.areArrayItemsEqual([1, 2], null);
  Assert.assertFalse('areArrayItemsEqual: should not accept that second is null', result);
}
