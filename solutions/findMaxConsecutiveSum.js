function findMaxConsecutiveSum(inputArray) {
    let maxEndingHere = inputArray[0];
    let maxSoFar = inputArray[0];
    inputArray.slice(1, inputArray.length).forEach((x) => {
        maxEndingHere = Math.max(x, maxEndingHere + x);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    });
    return maxSoFar;
}