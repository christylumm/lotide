//Reference assertEqual.js function
const assertEqual = require('./assertEqual');

//Head function should return just the element itself

const head = function(arr) {
  return arr.shift(1);
};

module.exports = head;

