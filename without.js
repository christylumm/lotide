const eqArrays = function(arr1, arr2) {
  //stop the loop if something is wrong

  //Use the index to loop through
  for (let index = 0; index < arr1.length; index++){
    //this is the warning flag
    if (arr1[index] !== arr2[index]){
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let index = 0; index < source.length; index++) {
    //Is it in the array? yes or no? --> I don't want it in array, negate that statement
    if (!itemsToRemove.includes(source[index])) {
      newArr.push(source[index]);
    } 
  }
  return newArr;
};

//TEST 1 - ensure removal of items that are the same
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

//TEST 2 - ensure that moving an array into an array 
console.log(assertArraysEqual(without([1, 2, 6, 8, 9], [1, 2, 6, 3, 1]), ["3, 8, 9"])); 
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["3"]));

//TEST 3 - ensure original array is not affected
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/*
PSEUDO CODE

//Revisit this later to see if this still makes sense



*/

