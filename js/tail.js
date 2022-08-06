// REQUIREMENTS
// const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const tail = array => array.slice(1);

// EXPORT FUNCTION
module.exports = tail;

// TEST CASES
// assertEqual(tail(['hello', true, 'friends', 123]).length, 3);
// assertEqual(tail(['hello', true, 'friends', 123])[0], true);
// assertEqual(tail(['hello', true, 'friends', 123])[1], 'friends');
