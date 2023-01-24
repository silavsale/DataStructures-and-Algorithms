// const prices: number[] = [32, 46, 26, 38, 40, 48, 42, 10, 100];
const prices: number[] = [11, 2, 3, 11, 1, 10, 8, 11];

function maxStockProfit(pricesArr: number[]): number {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) {
      buyPrice = pricesArr[i];
    }
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

maxStockProfit(prices);

export {};
