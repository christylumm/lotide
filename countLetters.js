const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentenceString) {
  //Start with empty object for results
  const results = {};

  //For each character of the sentence, if there is a character, it will add 1 to the counter
  for (let char of sentenceString) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

console.log(countLetters('hello')); 

/*
This function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

EXPECTED OUTPUT: 

{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

*/
