/**
* You have an array nums. We determine two functions to perform on nums. 
* In both cases, n is the length of nums:
* fi(nums) = nums[0] · nums[1] · ... · nums[i - 1] · nums[i + 1] · ... · nums[n - 1]. 
* (In other words, fi(nums) is the product of all array elements except the ithf.)
* g(nums) = f0(nums) + f1(nums) + ... + fn-1(nums).
* Using these two functions, calculate all values of f modulo the given m. 
* Take these new values and add them together to get g. 
* You should return the value of g modulo the given m.
* Approach: Prefix Products.
* Time Complexity: O(n).
* Space Complexity: O(n).
* @param {number[]} nums
* @returns {number} Maximum consecutive sum.
*/

function findProductExceptSelf(nums, m) {
  const prefixProducts = nums.map(num => 1);
  let g = 0;
  let suffixProduct = 1;
  for (let i = 1; i < nums.length; i++) {
    prefixProducts[i] = (prefixProducts[i - 1] * nums[i - 1]) % m;
  }
  for (let i = 0; i < nums.length; i++) {
    g += (prefixProducts[prefixProducts.length - i - 1] * suffixProduct) % m;
    suffixProduct = (suffixProduct * nums[nums.length - i - 1]) % m;
  }
  return g % m;
}