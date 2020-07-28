/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}; */

const assertEqual = require('../assertEqual');

module.exports = assertEqual;

//TEST CODE
assertEqual("Lighthouse Labs", 1);
assertEqual(1, 1);