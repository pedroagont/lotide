// REQUIREMENTS
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const letterPositions = string => {
  const result = {};

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    letter !== ' ' && result[letter]
      ? result[letter].push(i)
      : (result[letter] = [i]);
  }

  return result;
};

// EXPORT FUNCTION
module.exports = letterPositions;

// TEST CASES
const result1 = letterPositions('hello');

assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);
