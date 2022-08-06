// REQUIREMENTS
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// EXPORT FUNCTION
module.exports = findKeyByValue;

// TEST CASES
// const bestTVShowsByGenre = {
//   sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire'
// };
//
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
