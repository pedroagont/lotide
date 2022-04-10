// REQUIREMENTS
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

// EXPORT FUNCTION
module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([6, 7, 8], ['different', 'things']);
// assertArraysEqual(['same', 'first', 123], ['same', 'different']);
