import { executeTestCases, TestCase } from "../testing-environment";
import { ArrayAssertions } from "../array-assertions";

export class G964 {

  public static decompose = (n) => {
    // Numbers are tested and stored in a sequence in the decreasing order, they'll be reversed at the end.
    let sequence: number[] = [];
    let squaresSumToDecompose = n * n;
    let startNumber = n - 1;

    do {
      let nextNumberInSequence = Math.floor(Math.sqrt(squaresSumToDecompose));

      if (nextNumberInSequence > startNumber)
        nextNumberInSequence = startNumber;

      // There is still something to decompose, but we've reached 1 in testing numbers.
      if (nextNumberInSequence === 0) {
        let lastNumberInSequence: number;

        do {
          lastNumberInSequence = sequence.pop();
          squaresSumToDecompose += Math.pow(lastNumberInSequence, 2);
        }
        while (lastNumberInSequence === 1 && sequence.length > 0);

        if (sequence.length === 0)
          return null;

        sequence.push(lastNumberInSequence - 1);
        squaresSumToDecompose -= Math.pow(lastNumberInSequence - 1, 2);
        startNumber = lastNumberInSequence - 2;
        continue;
      }

      const nextNumberSquare = Math.pow(nextNumberInSequence, 2);
      if (squaresSumToDecompose >= nextNumberSquare) {
        sequence.push(nextNumberInSequence);
        squaresSumToDecompose -= nextNumberSquare;
      }
      startNumber = nextNumberInSequence - 1;
    }
    while (squaresSumToDecompose !== 0);

    return sequence.reverse();
  }
}

export function executeTests() {
  const testCases: TestCase[] = [
    {
      params: [11],
      expectedResult: [1, 2, 4, 10]
    },
    {
      params: [50],
      expectedResult: [1, 3, 5, 8, 49]
    },
    {
      params: [44],
      expectedResult: [2, 3, 5, 7, 43]
    },
    {
      params: [7],
      expectedResult: [2, 3, 6]
    },
    {
      params: [4],
      expectedResult: null
    }
  ];

  executeTestCases(testCases, G964.decompose, (actual, expected) => ArrayAssertions.areArrayItemsEqual(actual, expected), 'decompose');
}
