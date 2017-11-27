/**
* Given a one dimensional array of integers A, A[i] is a peak iff A[i - 1] is less than or equal to A[i], 
* and A[i + 1] is less than or equal to A[i]. 
* Find any peak in A. 
* Approach: Divide and Conquer, Recursion. 
* Time Complexity: O(log(n)).
* Space Complexity: O(n) if stack is considered, O(1) otherwise.
* @param {number[]} A 
* @param {number} i
* @param {number} j 
* @returns {number} The index of any one peak in A.
*/

function findPeak(A, i, j, n) {
  const m = Math.floor((i + j) / 2);
  if ((m === 0 || (A[m - 1] <= A[m])) &&
   (m === n - 1 || A[m + 1] <= A[m])) {
    return m;
  } else if (m > 0  && A[m - 1] > A[m]) {
    return findPeak(A, i, m - 1, n);
  } else { 
    return findPeak(A, m + 1, j, n);
  }
}

function findPeakOneDimensional(A) {
  const i = 0;
  const j = A.length;
  const n = A.length;
  return findPeak(A, i, j, n);
}


