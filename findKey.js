const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    //console.log(key);
    if (callback === true) {
      return obj[key];
    } 
  }
  return undefined;
}

const callback = function(objKey) {
  let cbResult;
  if (objKey) {
    cbResult = true;
  } else {
    cbResult = false
  }
  return cbResult;
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

/*

---------------------------------------------------------

PROBLEM:
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

TIP:

Feel free to take a look at our solution for findKeyByValue. Some of the core logic will be the same (such as the looping over object keys part).

LOGIC: 
1. Iterate :D
2. Access the value within object == obj[key]
3. Feed that into callback
4. Define variable, capture that returned value
5. Did the variable return truthy? Yes = yay, return the key! No? continue (just an if statement)
6. Return undefined at the end of all things

do this + that --> not one step! there's 2 steps.


*/