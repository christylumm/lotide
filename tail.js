const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual !== expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.assert(false, actual === expected);
  }
  
};

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

/*
//Test Case 1: Check the return array elements

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
*/

/*
// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/

/*
//Test Case 3 : Yield empty array if there are either one or no elements in array
const emptyArr = tail([]);
tail(emptyArr);
assertEqual(emptyArr.length, 1);
*/
