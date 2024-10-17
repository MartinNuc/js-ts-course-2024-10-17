function isPalindrome(text) {
  if (typeof text !== "string") {
    throw new Error('Invalid input');
  }

  const characters = text.toUpperCase().split('');
  characters.reverse();
  const reversedUppercasedText = characters.join('');

  return text.toUpperCase() === reversedUppercasedText;
}

console.log(isPalindrome('ahoj')) // false
console.log(isPalindrome('aha')) // true
console.log(isPalindrome('Anna')) // true
console.log(isPalindrome(5)) // false
console.log(isPalindrome([])) // false
console.log(isPalindrome()) // false