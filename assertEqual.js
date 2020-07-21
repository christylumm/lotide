// FUNCTION IMPLEMENTATION: Make the function compare the two values it takes in and print out a message telling us if they match or not

/*
PLANNING:

Check if actual = expected
Can check using console.assert, not if statmements

- If true, run "Assertion Passed: "
- If false, run "Assertion Failed: "

Assertion Failed: log --> actual + " !== " + "expected"
Assertion Passed: log --> actual + " === " + "expected"

Check if string = string
Check if number = number

LAST STEP:
- Currently prints both assert statements, regardless of whether the statement is true or false
- Should function:
    - if statement is false, print "Assertion Failed" console.log
    - if statmement is true, print "Assertion Passed" console.log

*/

const assertEqual = function(actual, expected) {

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  console.assert(true, actual !== expected);
  
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  console.assert(true, actual === expected);

  
};

//TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);

