/**
* Calculate the power set of a finite set.
* Approach: Iterative.
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

/**
* Calculate the power set of a finite set.
* Approach: Recursive.
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

