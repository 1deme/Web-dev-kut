const arr = [10, 20, 30];

// push - add to end
arr.push(40); 
console.log(arr); // [10, 20, 30, 40]

// pop - remove last
arr.pop(); 
console.log(arr); // [10, 20, 30]

// unshift - add to start
arr.unshift(5); 
console.log(arr); // [5, 10, 20, 30]

// shift - remove first
arr.shift(); 
console.log(arr); // [10, 20, 30]

// splice - remove and/or insert
arr.splice(1, 1, 25, 27); // remove 1 element at index 1, add 25 and 27
console.log(arr); // [10, 25, 27, 30]

// forEach - loop over each element
arr.forEach(x => console.log(x)); // prints 10, 25, 27, 30

// map - create a new array by transforming elements
const doubled = arr.map(x => x * 2);
console.log(doubled); // [20, 50, 54, 60]

// filter - create a new array with elements that pass the condition
const over20 = arr.filter(x => x > 20);
console.log(over20); // [25, 27, 30]

// reduce - combine all elements into one value
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // 92

// indexOf - find first index of value
console.log(arr.indexOf(25)); // 1

// lastIndexOf - find last index of value
arr.push(25);
console.log(arr.lastIndexOf(25)); // 4

// includes - check if value exists
console.log(arr.includes(30)); // true

// find - get first element that matches condition
const found = arr.find(x => x > 20);
console.log(found); // 25

// findIndex - get index of first element that matches condition
const foundIndex = arr.findIndex(x => x > 20);
console.log(foundIndex); // 1

// some - check if any element passes condition
console.log(arr.some(x => x > 50)); // false

// every - check if all elements pass condition
console.log(arr.every(x => x >= 10)); // true
