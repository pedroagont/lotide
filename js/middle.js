// REQUIREMENTS
// const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const middle = array => {
  const middleIndex = Math.floor(array.length / 2);

  if (array.length < 3) {
    return [];
  }

  if (array.length % 2 === 1) {
    const middleElement = array[middleIndex];
    return [middleElement];
  }

  if (array.length % 2 === 0) {
    const middleLeft = array[middleIndex - 1];
    const middleRight = array[middleIndex];
    return [middleLeft, middleRight];
  }
};

// EXPORT FUNCTION
module.exports = middle;

// TEST CASES
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
