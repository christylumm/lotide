const head = require('../head');

module.exports = head;

//TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Labs", "Lighthouse", "Labs"]), "Hello");
