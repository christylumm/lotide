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

const middle = function(array) {
  //Empty middle array we'll push middle values to
  let midArr = [];

  //Calculates middle numbers, rounds to whole number
  let midNum = Math.floor(array.length/2);

  //Ensure midNum calculates correctly
  //console.log(midNum);
  
  for (let mid = 0; mid < (array.length - (array.length - 1)); mid++) {
    //Check if array length is even or odd. 
    //If even, print 2 values
    //If odd, print 1 value
    if (array.length % 2 === 0 && array.length % 2 !== undefined) {
      //Test 2: Check if works with even array
      midArr.push(array[midNum -1]);
      midArr.push(array[midNum])
    } else {
      midArr.push(array[midNum]);
    }
  }
  return midArr;
  
}

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