// REQUIREMENTS
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const countLetters = string => {
  const result = {};

  for (const letter of string) {
    if (letter !== ' ') {
      result[letter] = (result[letter] || 0) + 1;
    }
  }

  return result;
};

// EXPORT FUNCTION
module.exports = countLetters;

// TEST CASES
// const result1 = countLetters('LHL');
// const result2 = countLetters('lighthouse in the house');
//
// assertEqual(result1['L'], 2);
// assertEqual(result1['H'], 1);
// assertEqual(result1['O'], undefined);
// assertEqual(result2['i'], 2);
// assertEqual(result2['h'], 4);
// assertEqual(result2['w'], undefined);
