// Buy stock than sale for higher price, check if actual price is lower than

const prices = [10, 5, 7, 4, 3, 1, 4, 5, 6];

function maxStockProfit(arr) {
  let profit = -1;
  let buy = 0;
  let sell = 0;
  let changeBuyPrice = true;
  for (let i = 0; i < arr.length; i++) {
    if (changeBuyPrice) {
      buy = prices[i];
    }
    sell = prices[i + 1];

    if (sell < buy) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sell - buy;
      if (tempProfit > profit) {
        profit = tempProfit;
        changeBuyPrice = false;
      }
    }
  }

  return profit;
}

maxStockProfit(prices);

export {};
