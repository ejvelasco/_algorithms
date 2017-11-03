function sumInRange(nums, queries) {
   const prefixSums = [];
   nums.forEach((num, i) => {
    if (i === 0) {
      prefixSums.push(num);
    } else {
      prefixSums.push(num + prefixSums[i - 1])
    }
   });
   prefixSums.unshift(0);
   let counter = 0;
   queries.forEach((query) => {
    const first = prefixSums[query[0]];
    const second = prefixSums[query[1] + 1];
    counter += second - first;
   });
   return counter;
}

const nums = [3, 0, -2, 6, -3, 2];
const queries = [[0, 2], [2, 5], [0, 5]];

console.log(sumInRange(nums, queries));