/**
* Given an array of numbers a, write a function that returns a in sorted order from minimum to maximum.
* Approach: Iteration. 
* Time Complexity: O(n^2).
* Space Complexity: O(1).
* @param {number[]} a 
* @returns {number[]} a in sorted order.
*/

function insertionSort(a) {
	for (let i = 1; i < a.length; i++) {
		let key = a[i];
		let j = i - 1;
		while (j >= 0 && a[j] > key) {
			a[j + 1] = a[j];
			j = j - 1;
		}
		a[j + 1] = key;
	}
	return a;	
}