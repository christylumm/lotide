const assertEqual = function(actual, expected) {
  
  //Previous exercise to compare if actual = expected

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual !== expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.assert(false, actual === expected);
  }
};

//Head function should return just the element itself

const head = function(arr) {
  return arr.shift();
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Labs", "Lighthouse", "Labs"]), "Hello");