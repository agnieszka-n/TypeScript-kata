import { executeTestCases } from "../testing-environment";

export class G964 {

  public static convertFrac = (lst) => {
    const fractions = (<Array<any>>lst).map(item => ({ numerator: item[0], denominator: item[1] }));
    const denominatorMultiplicity = G964.getLeastCommonMultiplicity(fractions.map(item => item.denominator));
    const expandedFractions = fractions.map(item => {
      const expansionFactor = denominatorMultiplicity / item.denominator;
      return {
        numerator: item.numerator * expansionFactor,
        denominator: denominatorMultiplicity
      };
    });

    const result = expandedFractions.map(item => `(${item.numerator},${item.denominator})`).join('');
    return result;
  }

  private static getLeastCommonMultiplicity(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => {
      const lcd = G964.getLargestCommonDivisor(accumulator, current);
      return accumulator / lcd * current;
    }, numbers[0]);
  }

  private static getLargestCommonDivisor(a: number, b: number): number {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }

    return a;
  }
}

export function executeTests() {
  const testCases = [
    {
      params: [[[1, 2], [1, 3], [1, 4]]],
      expectedResult: "(6,12)(4,12)(3,12)"
    },
    {
      params: [[[69, 130], [87, 1310], [3, 4]]],
      expectedResult: "(18078,34060)(2262,34060)(25545,34060)"
    }
  ];

  executeTestCases(testCases, G964.convertFrac, (actual, expected) => actual === expected, 'convertFrac');
}
