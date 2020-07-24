const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {

}

/*

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