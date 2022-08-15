function solution(nums) {
  if (nums.length === 0) {
    return [];
  } else {
    return nums.sort(function (a, b) {
      return a - b;
    });
  }
}

console.log(solution([1, 2, 3, 10, 5])); //[1,2,3,5,10]
