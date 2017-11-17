/**
* Given an array of integers, find the maximum possible sum you can get
* from one of its contiguous subarrays. The subarray from which this 
* sum comes must contain at least 1 element.
* Approach: Kadane's Algorithm.
* Time Complexity: O(n).  
* Space Complexity: O(n).
* @param {number[]} inputArray 
* @returns {number} Maximum consecutive sum.
*/

function findMaxConsecutiveSum(inputArray) {
  let maxEndingHere = inputArray[0];
  let maxSoFar = inputArray[0];
  inputArray.slice(1, inputArray.length).forEach((x) => {
    maxEndingHere = Math.max(x, maxEndingHere + x);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  });
  return maxSoFar;
}