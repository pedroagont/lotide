# Lotide

A mini clone of the [Lodash](https://lodash.com) library for educational purposes.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns a the element at index 0 of the argument array.
- `tail(array)`: Returns a new array without the one at index 0 in the argument array.
- `middle(array)`: Returns a new array with the element or elements at the hallway index or indexes in an array of an odd or of an even number of elements, respectively.
- `without(source, itemsToRemove)`: Returns a new array from an argument array with elements removed per the other argument array provided.
- `eqArrays(array1, array2)`: Returns true for two identical arrays, false otherwise.
- `flatten(array)`: Returns a new array with elements of children arrays (one level deep) expanded into the outer array in addition to all other elements of non-objects in the outer array.
- `countOnly(allItems, itemsToCount)`: Returns an object with keys representing the elements needed to account for and values representing their number of occurrences in an array.
- `countLetters(string))`: Returns an object with keys representing the characters and values representing their number of occurrences in a string.
- `letterPositions(string)`: Returns an object with keys representing the characters and values, as arrays of numbers representing their indices in a string.
- `findKeyByValue(object, value)`: Returns key in an object, if the key contains the value specified in the corresponding argument, undefined otherwise.
- `eqObjects(object1, object2)`: Returns true for two identical objects, false otherwise.
- `isPalindrome(string)`: Returns true if a string contains the same characters from left to right and right to left, false otherwise.
