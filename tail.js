//Reference assertEqual.js function
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;

/* const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); */
