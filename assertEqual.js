// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// EXPORT FUNCTION
module.exports = assertEqual;

// TEST CODE
// assertEqual('identical', 'identical');
// assertEqual('different', 'things');
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual(1, '2');
// assertEqual(1, 'hello');
// assertEqual(null, undefined);
// assertEqual(true, false);
