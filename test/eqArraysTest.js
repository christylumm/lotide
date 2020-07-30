const eqArrays = require('../eqArrays');

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
