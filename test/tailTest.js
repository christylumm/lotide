const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

/* describe("#tail", () => {
  it ("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 2);
  });
});
 */
describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = tail(['Yo Yo', 'Lighthouse', 'Labs']);
    tail(words);
    assert.strictEqual(words.length, 2);
  });

  it("returns 0 for []", () => {
    const emptyArr = tail([]);
    tail(emptyArr);
    assert.strictEqual(emptyArr.length, 0);
  });
});

module.exports = tail;


/* //Test Case 1: Check the return array elements

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case 3 : Yield empty array if there are either one or no elements in array
const emptyArr = tail([]);
tail(emptyArr);
assertEqual(emptyArr.length, 0);
 */