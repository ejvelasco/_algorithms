/**
* You have a collection of coins, and you know the values of the coins and 
* the quantity of each type of coin in it. You want to know how many distinct 
* sums you can make from non-empty groupings of these coins.
* Approach: Iteration.
* Time Complexity: O(n * m), where n is the length of coins and m is the quantity of each coin.
* Space Complexity: O(n * m), where n is the length of coins and m is the quantity of each coin..
* @param {number[]} coins
* @param {number[]} quantity
* @returns {number} Number of distinct sums of nonempty groupings of coins.
*/

function findPossibleSums(coins, quantity) {
  const sums = new Set();
  coins.forEach((coin, i) => {
    const sumsPartial = new Set();
    let quanta = quantity[i];
    while (quanta > 0) {
      sumsPartial.add(coin * quanta);
      quanta--;
    }
    const sumsCopy = new Set(sums);
    sumsCopy.forEach((sum) => {
      sumsPartial.forEach((sumPartial) => {
        sums.add(sumPartial + sum);
      });
    });
    sumsPartial.forEach((sumPartial) => {
      sums.add(sumPartial);
    });
  });
  return sums.size;
}

