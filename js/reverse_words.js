function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'
