// REQUIREMENTS
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const without = (source, itemsToRemove) => {
  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }

  console.log(source, newArray);
  return newArray;
};

// EXPORT FUNCTION
module.exports = without;

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([6, 7, 8], [7, 8]), [6]);
assertArraysEqual(without(['keep', 'all', 123], []), ['keep', 'all', 123]);
assertArraysEqual(without(['remove', 'all', 123], ['remove', 'all', 123]), []);
