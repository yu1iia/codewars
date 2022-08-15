function isPalindrome(x) {
  let palindrome = x.split('').reverse().join('').toLowerCase();
  return x.toLowerCase() === palindrome;
}

console.log(isPalindrome('Madam'));
