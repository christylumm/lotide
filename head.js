//Reference assertEqual.js function
const assertEqual = require('./assertEqual');

//Head function should return just the element itself

const head = function(arr) {
  return arr.shift(1);
};

module.exports = head;

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Labs", "Lighthouse", "Labs"]), "Hello");

