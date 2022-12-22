// Sum Numbers
function sum(numbers) {
  'use strict';

  if (numbers.length === 0) {
    return 0;
  } else {
    let numberSum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      numberSum += numbers[i];
    }
    return numberSum;
  }
}
