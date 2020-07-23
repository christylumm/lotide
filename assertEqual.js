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

CONDITIONAL STATEMENT = DONE:
- Currently prints both assert statements, regardless of whether the statement is true or false
- Should function:
    - if statement is false, print "Assertion Failed" console.log
    - if statmement is true, print "Assertion Passed" console.log

REFACTOR:
Changed around "Assertion Passed" and "Assertion Failed" labels, but confused on why operators are working.

SOLVED: 
Must run true conditional first, before running default false statement

*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }  
};

//TEST CODE
assertEqual("Lighthouse Labs", 1);
assertEqual(1, 1);

