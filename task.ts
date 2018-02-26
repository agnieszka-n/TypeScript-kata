let expected = true;
let actual = arrayItemsEqual([true, false], [true, false]);
assert('Array contains items: should accept booleans', expected === actual, `Expected ${expected}, but was: ${actual}.`);

expected = true;
actual = arrayItemsEqual([1, 2, 3], [1, 2, 3]);
assert('Array contains items: should accept numbers', expected === actual, `Expected ${expected}, but was: ${actual}.`);

expected = false;
actual = arrayItemsEqual([1, 2, 3], [1, 2, 4]);
assert('Array contains items: should not accept different numbers', expected === actual, `Expected ${expected}, but was: ${actual}.`);

expected = false;
actual = arrayItemsEqual([1, 2, 3], [1, 3, 2]);
assert('Array contains items: should not accept different order', expected === actual, `Expected ${expected}, but was: ${actual}.`);

expected = false;
actual = arrayItemsEqual([1, 2, 3], []);
assert('Array contains items: should not accept different cardinality', expected === actual, `Expected ${expected}, but was: ${actual}.`);

expected = false;
actual = arrayItemsEqual(null, [1, 2]);
assert('Array contains items: should not accept that first is null', expected === actual, `Expected ${expected}, but was: ${actual}.`);

expected = false;
actual = arrayItemsEqual([1, 2], null);
assert('Array contains items: should not accept that second is null', expected === actual, `Expected ${expected}, but was: ${actual}.`);

function arrayItemsEqual<T>(array: T[], expectedItems: T[]) {
  if (!array || !expectedItems)
    return false;

  if (array.length !== expectedItems.length)
    return false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== expectedItems[i])
      return false;
  }

  return true;
}

function assert(title: string, testExpression: boolean, failMessage?: string) {
  const testsRoot = document.getElementById('testResults');
  const currentTestElement = document.createElement('li');
  currentTestElement.classList.add('test');

  testsRoot.appendChild(currentTestElement);

  if (testExpression) {
    currentTestElement.innerText = title;
    currentTestElement.classList.add('test-passed');
  }
  else {
    currentTestElement.innerText = failMessage ? failMessage : title;
    currentTestElement.classList.add('test-failed');
  }
}
