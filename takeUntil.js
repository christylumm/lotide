const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const resultsArr = [];

  for (let item of array) {
    //console.log('loop works');
    if (callback(item)) {
      //console.log(item);
      resultsArr.push(item);
    } else {
      return resultsArr;
    }
  }
  return resultsArr;
}

const callback = function(item) {
  if (item < 0 || item === ',') {
    return false;
  } else {
    return true;
  }
}

console.log(takeUntil(data1, callback));
console.log('---');
console.log(takeUntil(data2, callback))

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