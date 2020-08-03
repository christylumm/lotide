const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  //Pre-condition: is it the same size
  const obj1Keys = Object.keys(object1);
  console.log(obj1Keys.length);

  const obj2Keys = Object.keys(object2);
  console.log(obj2Keys.length);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  //do they keys have the same values
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

//Modify to make use of assertEqual
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;


/*

---------------------------------------------------------

PROGRAM:

Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

EXPECTED OUTPUT:


LOGIC: 
1. 
2. 
3. 
4. 
5. 



PSEUDO
function eqObjects (obj1, obj2)

  //Compare obj1 to obj2 
  //Compare key value pairs

  if entire obj1 === obj2 {
    returns true
  } else {
    return false
  }
}



*/