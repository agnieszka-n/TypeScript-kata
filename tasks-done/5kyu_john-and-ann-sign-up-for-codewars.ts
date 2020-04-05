import { Assert } from '../testing-environment';

export class G964 {
  public static ann(n: number): number[] {
    const annCache = [1];
    const johnCache = [0];

    for (let i = 0; i < n - 1; i++) {
      johnCache[annCache[i]] = johnCache[annCache[i]] | G964.calculateJohnElementAt(annCache[i], annCache, johnCache);
      annCache[i + 1] = G964.calculateAnnElementAt(i + 1, annCache, johnCache);
    }

    return annCache;
  }

  public static john(n: number): number[] {
    const annCache = [1];
    const johnCache = [0];

    for (let i = 0; i < n - 1; i++) {
      annCache[johnCache[i]] = annCache[johnCache[i]] | G964.calculateAnnElementAt(johnCache[i], annCache, johnCache);
      johnCache[i + 1] = G964.calculateJohnElementAt(i + 1, annCache, johnCache);
    }

    return johnCache;
  }

  public static sumJohn(n: number): number {
    return G964.john(n).reduce((sum, value) => sum += value, 0);
  }

  public static sumAnn(n: number): number {
    return G964.ann(n).reduce((sum, value) => sum += value, 0);
  }

  private static calculateAnnElementAt(index: number, annCache: number[], johnCache: number[]) {
    return index - johnCache[annCache[index - 1]];
  }
  private static calculateJohnElementAt(index: number, annCache: number[], johnCache: number[]) {
    return index - annCache[johnCache[index - 1]];
  }
}

export function executeTests() {
  Assert.assertArrayItemsEqual('John(11)', G964.john(11), [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]);
  Assert.assertArrayItemsEqual('Ann(6)', G964.ann(6), [1, 1, 2, 2, 3, 3]);
  Assert.assertEqual('Sum John(75)', G964.sumJohn(75), 1720);
  Assert.assertEqual('Sum Ann(150)', G964.sumAnn(150), 6930);
  Assert.assertEqual('Sum Ann(115)', G964.sumAnn(115), 4070);
}
