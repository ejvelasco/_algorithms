/**
* Calculate the power set of a finite set.
* Approach: Recursion.
* Time Complexity: O(n*2^n).
* Space Complexity: O(n*2^n).
* @param {[]} set 
* @returns {[][]} Power set of set.
*/

function findSubsetsRecursive(set) {
	if (set.length === 0) {
		return [[]];
	}
	const setPrev = set.slice();
	const element = setPrev.pop();
	const powerSetPartial = findSubsetsRecursive(setPrev);
	const powerSetElement = powerSetPartial.map((subset) => {
		const subsetCopy = subset.slice();
		subsetCopy.push(element);
		return subsetCopy;
	});
	const powerSet = powerSetPartial.concat(powerSetElement);
	return powerSet;
}