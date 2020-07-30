const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, str) {
  for (const key in obj) {
    //console.log(key);
    if (obj[key] === str) {
      return key;
    } 
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

/*
---------------------------------------------------------

PROGRAM:
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.


EXPECTED OUTPUT:
Callback needs to scan the object's key value pairs to find a specific key value pair noted in the callback. The findKeyByValue function will return the first key that satisfies the callback. 

If no key is found, return undefined.


LOGIC: 
1. scan through object: for (c-style), for in, for of, forEach
2. 
3. 
4. 
5. 

Use for...of with everything except objects, because of an object will start with o


*/