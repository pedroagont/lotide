// REQUIREMENTS
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const isPalindrome = function(s) {
  const stringNoSpace = s.replace(/ /g, '');
  const stringReverse = stringNoSpace
    .split('')
    .reverse()
    .join('');
  return stringNoSpace === stringReverse;
};

// EXPORT FUNCTION
module.exports = isPalindrome;

// TEST CODE
// assertEqual(isPalindrome('anita lava la tina'), true);
// assertEqual(isPalindrome('not a palindrome!'), false);
