const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
