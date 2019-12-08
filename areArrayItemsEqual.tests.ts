/// <reference path="./task.ts" />

let result = areArrayItemsEqual([true, false], [true, false]);
assertTrue('areArrayItemsEqual: should accept booleans', result);

result = areArrayItemsEqual(['a', 'b'], ['a', 'b']);
assertTrue('areArrayItemsEqual: should accept strings', result);

result = areArrayItemsEqual([1, 2, 3], [1, 2, 3]);
assertTrue('areArrayItemsEqual: should accept numbers', result);

result = areArrayItemsEqual([1, 2, 3], [1, 2, 4]);
assertFalse('areArrayItemsEqual: should not accept different numbers', result);

result = areArrayItemsEqual([1, 2, 3], [1, 3, 2]);
assertFalse('areArrayItemsEqual: should not accept different order', result);

result = areArrayItemsEqual([1, 2, 3], []);
assertFalse('areArrayItemsEqual: should not accept different cardinality', result);

result = areArrayItemsEqual(null, [1, 2]);
assertFalse('areArrayItemsEqual: should not accept that first is null', result);

result = areArrayItemsEqual([1, 2], null);
assertFalse('areArrayItemsEqual: should not accept that second is null', result);
