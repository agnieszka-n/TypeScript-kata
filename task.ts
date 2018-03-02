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
