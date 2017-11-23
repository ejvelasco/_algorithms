/**
* Given an array of integers, find the maximum possible sum you can get
* from one of its contiguous subarrays. The subarray from which this 
* sum comes must contain at least 1 element.
* Approach: Kadane's Algorithm.
* Time Complexity: O(n).  
* Space Complexity: O(n).
* @param {number[]} a
* @returns {number} Maximum consecutive sum.
*/

function findMaxConsecutiveSum(a) {
  let maxEndingHere = a[0];
  let maxSoFar = a[0];
  a.slice(1, a.length).forEach((x) => {
    maxEndingHere = Math.max(x, maxEndingHere + x);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  });
  return maxSoFar;
}