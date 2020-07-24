/*
PROGRAM:
letterPositions will return all the indices (zero-based POSITION) in the string where each character is found

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up

*/

const eqArrays = function(arr1, arr2) {
  //stop the loop if something is wrong

  //Use the index to loop through
  for (let index = 0; index < arr1.length; index++) {
    //this is the warning flag
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const positions = [];

  for (let pos = 0; pos < sentence.length; pos++) {
    
  }
  return results;
};

//Dot notation accesses the specific letter in the string, nested inside the Object
console.log(assertArraysEqual(letterPositions("hello").e, [1])); // => assertion failed

/*

LOGIC: 
1. loop through the sentence
2. get rid of spaces in sentence
3. split string into string of letters => string of letters
4. take string of letters, compar
5. push sentence[pos] to positions[]


- return positions array as key values


EXPECTED OUTPUT:

This function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be an array of the specific positions of occurrences for that character.

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

*/