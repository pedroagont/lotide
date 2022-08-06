// REQUIREMENTS
const eqObjects = require('./eqObjects');
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {
  if (!array1 || !array2) return false;

  const sameLength = array1.length === array2.length;
  if (!sameLength) return false;

  for (let i = 0; i < array1.length; i++) {
    const isArray = Array.isArray(array1[i]);
    const isObject = typeof array1[i] === 'object' && !Array.isArray(array1[i]);

    if (isArray) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (isObject) {
      if (!eqObjects(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
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
//
// assertEqual(
//   eqArrays(
//     [
//       [1, 2],
//       [1, 2]
//     ],
//     [
//       [1, 2],
//       [1, 2]
//     ]
//   ),
//   true
// );
// assertEqual(
//   eqArrays(
//     [
//       [1, 2],
//       [1, 2]
//     ],
//     [
//       [1, 2],
//       [1, 2, 3]
//     ]
//   ),
//   false
// );
//
// assertEqual(
//   eqArrays(
//     [
//       { a: 10, b: 20 },
//       { a: 10, b: 20 }
//     ],
//     [
//       { a: 10, b: 20 },
//       { a: 10, b: 20 }
//     ]
//   ),
//   true
// );
// assertEqual(
//   eqArrays(
//     [
//       { a: 10, b: 20 },
//       { a: 10, b: 20 }
//     ],
//     [
//       { a: 10, b: 20 },
//       { a: 10, b: 30 }
//     ]
//   ),
//   false
// );
