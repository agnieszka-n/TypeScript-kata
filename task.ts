interface TestCase {
  params: any[];
  expectedResult: any;
}

function executeTestCases(testCases: TestCase[], functionUnderTest: Function, testCallback: (actualResult: any, expectedResult: any) => boolean, titlePrefix?: string) {
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const actualResult = functionUnderTest.apply(undefined, testCase.params);
    const prefix = titlePrefix ? titlePrefix : `${functionUnderTest.name}`;
    const title = `${prefix} (${i + 1}), params: ${testCase.params}`;
    assert(title, testCallback(actualResult, testCase.expectedResult), `${title} - Expected: ${testCase.expectedResult}, but was: ${actualResult}.`);
  }
}

function arrayItemsEqual(array: any[], expectedItems: any[]): boolean {
  if (!array && !expectedItems)
    return true;

  if (!array || !expectedItems)
    return false;

  if (array.length !== expectedItems.length)
    return false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      if (!arrayItemsEqual(array[i], expectedItems[i])) {
        return false;
      }
    }
    else if (array[i] !== expectedItems[i])
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
