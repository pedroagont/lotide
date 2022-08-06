// REQUIREMENTS
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (object1, object2) => {
  eqObjects(object1, object2)
    ? console.log(
        `✅✅✅ Assertion Passed: ${JSON.stringify(
          object1
        )} === ${JSON.stringify(object2)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${JSON.stringify(
          object1
        )} !== ${JSON.stringify(object2)}`
      );
};

// EXPORT FUNCTION
module.exports = assertObjectsEqual;

// TEST CODE
// assertObjectsEqual({ a: 10, b: 20 }, { b: 20, a: 10 });
// assertObjectsEqual({ a: 10, b: 20 }, { b: 20, a: 30 });
