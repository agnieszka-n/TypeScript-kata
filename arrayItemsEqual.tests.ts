/*
let expected = true;
let actual = arrayItemsEqual([true, false], [true, false]);
assert('arrayItemsEqual: should accept booleans', expected === actual);

expected = true;
actual = arrayItemsEqual(['a', 'b'], ['a', 'b']);
assert('arrayItemsEqual: should accept strings', expected === actual);

expected = true;
actual = arrayItemsEqual([1, 2, 3], [1, 2, 3]);
assert('arrayItemsEqual: should accept numbers', expected === actual);

expected = false;
actual = arrayItemsEqual([1, 2, 3], [1, 2, 4]);
assert('arrayItemsEqual: should not accept different numbers', expected === actual);

expected = false;
actual = arrayItemsEqual([1, 2, 3], [1, 3, 2]);
assert('arrayItemsEqual: should not accept different order', expected === actual);

expected = false;
actual = arrayItemsEqual([1, 2, 3], []);
assert('arrayItemsEqual: should not accept different cardinality', expected === actual);

expected = false;
actual = arrayItemsEqual(null, [1, 2]);
assert('arrayItemsEqual: should not accept that first is null', expected === actual);

expected = false;
actual = arrayItemsEqual([1, 2], null);
assert('arrayItemsEqual: should not accept that second is null', expected !== actual);
*/