import { executeTestCases } from "../testing-environment";
import { ArrayAssertions } from "../array-assertions";

export class G964 {
  public static mix = (s1, s2) => {
    const s1stats: Object = G964.getStringStatistics(s1);
    const s2stats: Object = G964.getStringStatistics(s2);

    const resultStats: Object = {};

    for (const letter in s1stats) {
      if (s1stats.hasOwnProperty(letter) && s1stats[letter] > 1) {
        resultStats[letter] = { stringNumber: '1', count: s1stats[letter] };
      }
    }

    for (const letter in s2stats) {
      if (s2stats.hasOwnProperty(letter) && s2stats[letter] > 1) {
        if (!resultStats[letter] || s2stats[letter] > resultStats[letter].count) {
          resultStats[letter] = { stringNumber: '2', count: s2stats[letter] };
        } else if (resultStats[letter] && resultStats[letter].count === s2stats[letter]) {
          resultStats[letter].stringNumber = '=';
        }
      }
    }

    const sortedResultStats = Object.keys(resultStats)
      .map(letter => {
        return { ...resultStats[letter], letter: letter };
      })
      .sort((a, b) => {
        if (b.count > a.count
          || (b.count === a.count && b.stringNumber < a.stringNumber)
          || (b.count === a.count && b.stringNumber === a.stringNumber && b.letter < a.letter)) {
          return 1;
        }
        return -1;
      });

    const result = sortedResultStats.map(x => `${x.stringNumber}:${Array(x.count + 1).join(x.letter)}`).join('/');
    return result;
  }

  private static getStringStatistics = (text: string) => {
    const letters: string[] = text.split('').map(x => x.charAt(0)).filter(x => x >= 'a' && x <= 'z');
    const lettersCounts = {};

    letters.forEach(letter => {
      if (lettersCounts[letter]) {
        lettersCounts[letter]++;
      } else {
        lettersCounts[letter] = 1;
      }
    });

    return lettersCounts;
  }
}

export function executeTests() {
  const testCases = [
    {
      params: ["A aaaa bb c", "& aaa bbb c d"],
      expectedResult: "1:aaaa/2:bbb"
    },
    {
      params: ["my&friend&Paul has heavy hats! &", "my friend John has many many friends &"],
      expectedResult: "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
    },
    {
      params: ["mmmmm m nnnnn y&friend&Paul has heavy hats! &", "my frie n d Joh n has ma n y ma n y frie n ds n&"],
      expectedResult: "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
    },
    {
      params: ["Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"],
      expectedResult: "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
    },
    {
      params: ["Are they here", "yes, they are here"],
      expectedResult: "2:eeeee/2:yy/=:hh/=:rr"
    },
    {
      params: ["looping is fun but dangerous", "less dangerous than coding"],
      expectedResult: "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
    },
    {
      params: [" In many languages", " there's a pair of functions"],
      expectedResult: "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
    }
  ];

  executeTestCases(testCases, G964.mix, (actual, expected) => ArrayAssertions.areArrayItemsEqual(actual, expected), 'mix');
}
