/**
* Calculate the power set of a finite set.
* Approach: Iteration.
* Time Complexity: O(n*2^n).
* Space Complexity: O(n*2^n).
* @param {[]} set 
* @returns {[][]} Power set of set.
*/

function findSubsetsIterative(set) {
	let index = 0;
	let powerSet = [[]];
	while (index < set.length) {
		const powerSetPartial  = powerSet.map((subset) => {
			const subsetCopy = subset.slice();
			subsetCopy.push(set[index]);
			return subsetCopy;
		});
		powerSet = powerSet.concat(powerSetPartial);
		index++;
	}
	return powerSet;
}



