//Reference assertEqual.js function
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  //Notify if something is wrong

  //Use the index to loop through
  for (let index = 0; index < arr1.length; index++){
    //this is the warning flag
    if (arr1[index] !== arr2[index]){
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;

/* assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); */

/*
//PSEUDO / LOGIC

PROBLEM:
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

MY APPROACH:
Check if each index is the same for each array in eqArrays

FUNCTIONS: 
1) eqArrays takes in two arrays, checks if each index in arr1 matches each index in arr2. If one output is false, the entire thing returns false.

2) assertEqual checks if the output from eqArray is equal to the "expected" value (2nd parameter of assertEqual)

THINGS TO CONSIDER: 
- What happens if a number is equal to a string?

QUESTIONS:
- I think I need to make use of  array.length, so I can accommodate longer arrays if needed, but not sure how.

*/