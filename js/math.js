function basicOp(operation, value1, value2) {
  let math;

  switch (operation) {
    case '+':
      math = value1 + value2;
      break;
    case '-':
      math = value1 - value2;
      break;
    case '*':
      math = value1 * value2;
      break;
    case '/':
      math = value1 / value2;
      break;
  }
  return math;
}

console.log(basicOp('+', 4, 7)); //11
