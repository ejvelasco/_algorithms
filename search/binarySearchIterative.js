/**
* Given a sorted array of numbers a, write a function to search for a given number x in a.
* Approach: Iteration. 
* Time Complexity: O(log(n)).
* Space Complexity: O(1).
* @param {number[]} a 
* @param {number} x
* @returns {number} The index of x in a, or -1 if x is not in a.
*/

function binarySearchIterative(a, x) {
	let start = 0;
	let end = a.length - 1;
	while (start <= end) {
		const index = Math.floor((start + end) / 2);
		if (a[index] === x) {
			return index;
		}
		if (a[index] > x) {
			end = index - 1;
		} else {
			start = index + 1; 
		}
	} 
	return -1;
}
