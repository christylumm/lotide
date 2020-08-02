const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;