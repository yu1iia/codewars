function findMultiples(integer, limit) {
  let multiArr = [];
  let multiNum = limit / integer;
  console.log(multiNum);
  for (let i = 1; i <= multiNum; i += 1) {
    multiArr.push(integer * i);
  }
  return multiArr;
}

console.log(findMultiples(5, 25));
