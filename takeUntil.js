const takeUntil = function(array, callback) {
  // ...
}

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


/*

---------------------------------------------------------

PROGRAM:
takeUntil will keep collecting items from a provided array until the callback provided returns a truthy value: the item of the array.

*callback acts as stopping condition, to stop the slice. This callback will take in the index (item of the array)

Test with assertArraysEqual, and eqArrays

Consider: Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? If not how can we make it stop? 

^^instead of cycling through the length of the entire array, have the callback parameter inside the for loop?

LOGIC: 
1. 
2. 
3. 
4. 
5. 

EXPECTED OUTPUT:
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/