function between(a, b) {
  let list = [];
  do {
    list.push(a);
    a += 1;
  } while (a <= b);
  return list;
}

console.log(between(2, 5));
