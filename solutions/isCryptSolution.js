/**
* Decodes a message and checks if the solution is a valid equation.
* Approach: Maps.
* Time Complexity: O(c*w + s), c = crypt.length, w = crypt[i].length, s = solution.length.  
* Space Complexity: O(c + s), c = crypt.length, s = solution.length.
* @param {string[]} crypt 
* @param {string[][]} solution 
* @returns {boolean} result.
*/

function isCryptSolution(crypt, solution) {
  const key = {};
  solution.forEach((row) => {
    key[row[0]] = row[1];
  });
  let flag = false;
  const decoded = crypt.map((word, i) => {
    const term = word.split('').map((letter, j) => {
      if (j === 0 && key[letter] === '0' && word.length > 1) {
        flag = true;
      }
      return key[letter];
    });
    return Number(term.join(''));
  });
  const result = (decoded[0] + decoded[1]) === decoded[2];
  return flag ? false : result;
}