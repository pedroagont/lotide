// REQUIREMENTS
// const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const flatten = array => {
  const flattened = [];

  for (let i = 0; i < array.length; i++) {
    Array.isArray(array[i])
      ? flattened.push(...array[i])
      : flattened.push(array[i]);
  }

  return flattened;
};

// EXPORT FUNCTION
module.exports = flatten;

// TEST CASES
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(
//   flatten(['testing', 'strings', ['and', 123], 'numbers', ['123']]),
//   ['testing', 'strings', 'and', 123, 'numbers', '123']
// );
