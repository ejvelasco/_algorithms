/**
* Given a two dimensional array of integers M, M[i][j] 
* is a peak iff it is greater than or equal to its four 
* neighbors,
* M[i + 1][j], M[i - 1][j], M[i][j + 1], M[i][j - 1]. 
* Find any peak in M. 
* Approach: Divide and Conquer, Recursion. 
* Time Complexity: O(M * log(N)) for an M x N matrix.
* Space Complexity: O(N) if stack is considered, O(1) otherwise.
* @param {number[][] M}  
* @param {number} m
* @param {number} n 
* @returns {number} Any one peak in M.
*/

function findArrayMaximum(M, m, mid) {
  let maximum = M[0][mid];
  let maximumIndex = 0;
  for (let i = 1; i < m; i++) {
    if (maximum < M[i][mid]) {
      maximum = M[i][mid];
      maximumIndex = i;
    }
  }
  return [maximum, maximumIndex];
}

function findPeak(M, m, n, mid) {
  const [maximum, maximumIndex] = findArrayMaximum(M, m, mid);
  const midHalf = Math.floor(mid / 2);
  if ((mid === 0 || M[maximumIndex][mid - 1] <= maximum) &&
  (mid === n - 1 || M[maximumIndex][mid + 1] <= maximum)) {
    return maximum;
  } else if (mid > 0 && M[maximumIndex][mid - 1] > maximum) {
    return findPeak(M, m, n, midHalf);
  } else {
    return findPeak(M, m, n, mid + midHalf);
  }
}

function findPeakTwoDimensional(M, m, n) {
  const mid = Math.floor(n / 2);
  return findPeak(M, m, n, mid);
}

