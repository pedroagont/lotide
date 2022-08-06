// REQUIREMENTS
const eqArrays = require('./eqArrays');
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const sameLength = keys1.length === keys2.length;
  if (!sameLength) return false;

  for (const key in object1) {
    const isArray = Array.isArray(object1[key]);
    const isObject =
      typeof object1[key] === 'object' && !Array.isArray(object1[key]);

    if (isArray) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (isObject) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// EXPORT FUNCTION
module.exports = eqObjects;

// TEST CASES
// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// assertEqual(eqObjects(ab, ba), true);
//
// const abc = { a: '1', b: '2', c: '3' };
// assertEqual(eqObjects(ab, abc), false);
//
// const cdArr = { c: '1', d: ['2', 3] };
// const dcArr = { d: ['2', 3], c: '1' };
// assertEqual(eqObjects(cdArr, dcArr), true);
//
// const cd2Arr = { c: '1', d: ['2', 3, 4] };
// assertEqual(eqObjects(cdArr, cd2Arr), false);
//
// const abObj = { a: { x: '1' }, b: '2' };
// const baObj = { b: '2', a: { x: '1' } };
// assertEqual(eqObjects(abObj, baObj), true);
//
// const abcObj = { a: { y: '1' }, b: '2', c: '3' };
// assertEqual(eqObjects(abObj, abcObj), false);
