function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3])); //6
console.log(positiveSum([22, 45, 61, 2, 3, 0, -2])); //133
