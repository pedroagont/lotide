// REQUIREMENTS
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const countOnly = (allItems, itemsToCount) => {
  const result = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      result[item] = (result[item] || 0) + 1;
    }
  }

  return result;
};

// EXPORT FUNCTION
module.exports = countOnly;

// TEST CASES
// const firstNames = [
//   'Karl',
//   'Salima',
//   'Agouhanna',
//   'Fang',
//   'Kavith',
//   'Jason',
//   'Salima',
//   'Fang',
//   'Joe'
// ];
//
// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false
// });
//
// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);
