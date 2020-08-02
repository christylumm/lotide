const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


module.exports = assertArraysEqual;

//TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);