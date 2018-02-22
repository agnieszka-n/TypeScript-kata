function add(a: number, b: number) {
  return a + b;
}

const correctExpected = 5;
const actual = add(2, 3);

assert('Passing test', correctExpected === actual, `Expected ${correctExpected}, but was: ${actual}.`);

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
