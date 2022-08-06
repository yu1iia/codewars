function twoSort(s) {
  let sortedString = s.sort();

  return sortedString[0].split('').join('***');
}

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ]),
);
