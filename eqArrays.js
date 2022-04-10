// REQUIREMENTS
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {
  const sameLength = array1.length === array2.length;
  if (!sameLength) return false;

  for (let i = 0; i < array1.length; i++) {
    const sameElement = array1[i] === array2[i];
    if (!sameElement) return false;
  }

  return true;
};

// EXPORT FUNCTION
module.exports = eqArrays;

// TEST CASES
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
