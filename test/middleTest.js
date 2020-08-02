const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


//TEST: does middle function work?
console.log(`Even numbered array: ${middle([1, 2, 3, 4, 5, 6])}`); // => 3, 4
console.log(`Odd numbered array: ${middle([1, 2, 3, 4, 5])}`); // => 3
console.log(`Random order array: ${middle([1, 2, 7, 2, 9, 1])}`); // => 7, 2

//TEST: does middle work with assertArraysEqual
//even numbered array
console.log(assertArraysEqual(middle([1, 2, 3, 4, 8, 9]), [3, 4])); // => assertion passed

//odd numbered array
console.log(assertArraysEqual(middle([1, 2, 3, 4, 8]), ["3, 4"])); // => assertion failed

//strings array
console.log(assertArraysEqual(middle(["chocolate", "flour", "sprinkles", "sugar", "butter"]), ["sprinkles"])); // => assertion passed