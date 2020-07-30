const assertArraysEqual = require('../assertArraysEqual');


module.exports = assertArraysEqual;

//TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);