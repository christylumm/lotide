
const eqArrays = function(arr1, arr2) {
  //stop the loop if something is wrong
  console.log('array 1', arr1);
  console.log('array 2', arr2);
  //Use the index to loop through
  for (let index = 0; index < arr1.length; index++){
    //this is the warning flag
    if (arr1.length !== arr2.length){
      return false;
    } else if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}
/* 
const assertArraysEqual = function(actual, expected) {
  let arr1 = [];
  let arr2 = [];
  actual = eqArrays(arr1, arr2);
  
  if (actual === eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 

  if (actual === eqArrays(arr1, arr2)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
}
*/

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }
}

/*   //TEST 1: debug friendly statements
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  } */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } 
  return results;
}

const map2 = function(array, callback) {
  let results2 = [];
  for (let item of array) {
    results2.push(callback(array));
  }

  return results2;
}

const getLength = function(item) {
  return item.length;
}

const firstLetter = function(item) {
  item = [];
  for (let letter of item) {
    return letter[0];
  }
}

const firstNum = function(numArr) {
  return numArr[0];
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1447, 12357, 7532, 6899, 3457924];

//console.log(assertArraysEqual(map(words, getLength)), [6, 7, 2, 5, 3]);
//console.log(assertArraysEqual(map(nums, firstNum)), [1, 1, 7, 6, 3]);
//console.log(assertArraysEqual(map(words, firstLetter)),['g','c','t','m','t']);

//DEBUGGING: assign a variable then console log that variable. Then pass that variable into the function
/* let t = map(words, getLength);
console.log("test ",t);
assertArraysEqual(t, [6, 7, 2, 5, 3]) */


// //console.log(map(words, firstLetter));
// console.log(map(words, getLength));
// console.log(map2(nums, firstNum));
//console.log(map(dogThoughts, addDoggo));
//console.log(nums[0]);


/*
//PERSONAL STRETCH PROJECT: 

Implement a callback function using map that adds a 🐶 emoji at the end of each thought inside an array of dogThoughts.

LEARNED: 
For each callback function, are you passing the appropriate parameter into it? For example, for a function to return an array, are you actually returning an array? Or if you need a specific value from an array, what do you need to pass in to access that value (the index)?

TO DO: 
Alter the map function to return an array, rather than a boolean (true/false).

const addDoggo = function(string) {
  return `${string} - 🐶`;
}

const dogThoughts = [
  "the human has made quite a sandwich for lunch",
  "my human cannot stand being away from me",
  "no matter what, i probably want a hug",
  "my presence is a gift",
  "some cuddles. would go a long way right now"
];

*/