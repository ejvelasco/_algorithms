/**
* Given a sorted array of numbers a, write a function to search for a given number x in a.
* Approach: Divide and Conquer, Recursion. 
* Time Complexity: O(log(n)).
* Space Complexity: O(log(n)) if stack is considered, O(1) otherwise.
* @param {number[]} a 
* @param {number} x
* @returns {number} The index of x in a, or -1 if x is not in a.
*/

function search(a, start, end, x) {
	if (start <= end) {
		const index = Math.floor(start + end)/2;
		if (a[index] === x) {
			return index;
		}
		if (a[index] < x) {
			return search(a, index + 1, end, x);
		} 
		return search(a, start, index - 1, x);
	}
	return -1;
}

function binarySearchRecursive(a, x) {
	const start = 0;
	const end = a.length - 1;
	return search(a, start, end, x);
}

