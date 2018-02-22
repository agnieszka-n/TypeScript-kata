function assert(title: string, testExpression: boolean) {
  const testsRoot = document.getElementById('testResults');
  const currentTestElement = document.createElement('li');
  currentTestElement.classList.add('test');
  currentTestElement.innerText = title;

  testsRoot.appendChild(currentTestElement);

  if (testExpression) {
    currentTestElement.classList.add('test-passed');
  }
  else {
    currentTestElement.classList.add('test-failed');
  }
}

const x: number = 1, y: number = 4;

assert('1 > 4', x > y);
assert('1 === 4', x === y);
assert('1 < 4', x < y);
