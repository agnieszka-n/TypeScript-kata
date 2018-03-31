export class G964 {
  public static removeNb(n: number): number[][] {
    let pairsFound: number[][] = [];
    const sequenceSum = n / 2 * (n + 1);
  
    for (let a = 1; a < n; a++) {
      const b = G964.calculateCorrespondingNumber(sequenceSum, a);
      if (b === Math.floor(b) && b <= n) {
        pairsFound.push([a, b]);
      }
    }
  
    pairsFound = pairsFound.sort((item1, item2) => item1[0] < item2[0] ? -1 : 1);
    return pairsFound;
  }
  
  private static calculateCorrespondingNumber(sequenceSum, a): number {
    return (sequenceSum - a) / (a + 1);
  }
}

/*

const testCases: TestCase[] = [
  {
    params: [26],
    expectedResult: [[15, 21], [21, 15]]
  },
  {
    params: [101],
    expectedResult: [[55, 91], [91, 55]]
  },
  {
    params: [102],
    expectedResult: [[70, 73], [73, 70]]
  },
  {
    params: [110],
    expectedResult: [[70, 85], [85, 70]]
  }
];

executeTestCases(testCases, G964.removeNb, (actual, expected) => arrayItemsEqual(actual, expected));

*/