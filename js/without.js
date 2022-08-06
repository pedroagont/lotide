// REQUIREMENTS
// const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const without = (source, itemsToRemove) => {
  const newArray = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
};

// EXPORT FUNCTION
module.exports = without;

// TEST CASES
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([6, 7, 8], [7, 8]), [6]);
// assertArraysEqual(without(['keep', 'all', 123], []), ['keep', 'all', 123]);
// assertArraysEqual(without(['remove', 'all', 123], ['remove', 'all', 123]), []);
