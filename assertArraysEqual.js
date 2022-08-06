// REQUIREMENTS
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2)
    ? console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
};

// EXPORT FUNCTION
module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], ['different', 'things']);
