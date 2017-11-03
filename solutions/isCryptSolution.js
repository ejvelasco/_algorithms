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