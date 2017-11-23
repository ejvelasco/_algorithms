/**
* You have an unsorted array arr of non-negative integers and a number s. 
* Find a longest contiguous subarray in arr that has a sum equal to s. 
* Return two integers that represent its inclusive bounds. If there are 
* several possible answers, return the one with the smallest left bound. 
* If there are no answers, return [-1]. Your answer should be 1-based, 
* meaning that the first position of the array is 1 instead of 0.
* Approach: Iterative.
* Time Complexity: O(n).  
* Space Complexity: O(n).
* @param {number} s 
* @param {number[]} arr
* @returns {number[]} Longest contiguous subarray with sum s, or [-1].
*/

function findLongestSubarrayBySum(s, arr) {
  let currentSum = arr[0];
  let start = 0;
  const n = arr.length;
  const sequences = [];
  for (let i = 1; i <= n; i++) {
    while (currentSum > s && start < i - 1) {
      currentSum -= arr[start];
      start++;
    }
    if (currentSum === s) {
      sequences.push([start + 1, i]);
    }
    if (i < n) {
      currentSum += arr[i];
    }
  }
  if (sequences.length === 0) {
    return [-1];
  }
  let longestSequence = sequences[0];
  let largestMagnitude = Math.abs(longestSequence[0] - longestSequence[1]);
  for (let i = 1; i < sequences.length; i++) {
    const sequence = sequences[i];
    const magnitude = Math.abs(sequence[0] - sequence[1]);
    if (largestMagnitude < magnitude) {
      largestMagnitude = magnitude;
      longestSequence = sequence;
    }
  }
  return longestSequence;
}




