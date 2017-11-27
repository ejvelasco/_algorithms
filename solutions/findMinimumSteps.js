/**
* You are given a sequence of points and the order in which you need to cover the points. 
* Give the minimum number of steps in which you can achieve it. You start from the first point.
* You can move in the following directions:
* (x,y) to 
* (x+1, y), 
* (x - 1, y), 
* (x, y+1), 
* (x, y-1), 
* (x-1, y-1), 
* (x+1,y+1), 
* (x-1,y+1), 
* (x+1,y-1) 
* Approach: Iteration.
* Time Complexity: O(n).
* Space Complexity: O(n).
* @param {number[]} a 
* @param {number[]} b
* @returns {number} Minimum number of steps needed to traverse the points in order.
*/

function findMininumSteps(a, b) {
  let minSteps = 0;
  for (let i = 0; i < a.length - 1; i++) {
    const first = [a[i], b[i]];
    const second = [a[i + 1], b[i + 1]];
    const firstMagnitude = Math.abs(first[0] - second[0]);
    const secondMagnitude = Math.abs(first[1] - second[1]);
    minSteps += Math.max(firstMagnitude, secondMagnitude);
  }
  return minSteps;
}

