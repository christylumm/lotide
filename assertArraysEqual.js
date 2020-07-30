const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let arr1 = [];
  let arr2 = [];
  actual = eqArrays(arr1, arr2);
  
  if (actual === eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

//TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

/*
PROBLEMS:
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

DIFFERENT: 
- Instead of using ===, assertion will make use of eqArrays function for array comparison

STEPS:
1. run eqArrays to compare if the index in each array is the same. 
2. eqArrays: return true or false
3. take that true/false result, assign it to actual variable

*/