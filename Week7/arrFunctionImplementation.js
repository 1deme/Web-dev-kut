// ---------- DEMONSTRATION SETUP ----------
const arr = [1, 2, 3, 4, 5];

// ---------- BUILT-IN USAGE EXAMPLES ----------
console.log("some >", arr.some(x => x > 3));           // true
console.log("every >", arr.every(x => x > 0));         // true
console.log("indexOf >", arr.indexOf(3));              // 2
console.log("includes >", arr.includes(4));            // true
arr.forEach(x => console.log("forEach >", x));         // prints all
console.log("map >", arr.map(x => x * 2));             // [2,4,6,8,10]
console.log("filter >", arr.filter(x => x % 2 === 0)); // [2,4]
console.log("reduce >", arr.reduce((a, b) => a + b, 0)); // 15


// ===================================================================
// ---------------------- CUSTOM IMPLEMENTATIONS ----------------------
// ===================================================================

// some: returns true if callback returns true for any element
function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
}

// every: returns true if callback returns true for all elements
function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
}

// indexOf: returns index of first occurrence or -1
function myIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

// includes (same as contains): true if value found
function myIncludes(array, value) {
  return myIndexOf(array, value) !== -1;
}

// forEach: applies callback to each element
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// map: creates new array with callback results
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// filter: creates new array with elements that pass callback
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) result.push(array[i]);
  }
  return result;
}

// reduce: reduces array to single value
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let start = 0;
  if (accumulator === undefined) {
    accumulator = array[0];
    start = 1;
  }
  for (let i = start; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}


// ---------- USING CUSTOM IMPLEMENTATIONS ----------
console.log("mySome >", mySome(arr, x => x > 3));           // true
console.log("myEvery >", myEvery(arr, x => x > 0));         // true
console.log("myIndexOf >", myIndexOf(arr, 3));              // 2
console.log("myIncludes >", myIncludes(arr, 4));            // true
myForEach(arr, x => console.log("myForEach >", x));         // prints all
console.log("myMap >", myMap(arr, x => x * 2));             // [2,4,6,8,10]
console.log("myFilter >", myFilter(arr, x => x % 2 === 0)); // [2,4]
console.log("myReduce >", myReduce(arr, (a, b) => a + b, 0)); // 15
