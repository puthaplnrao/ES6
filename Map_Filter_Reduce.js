// Sure! Let’s clearly explain map, filter, reduce, and a few other commonly used array methods in JavaScript (ES6) with examples ✅

// 1️⃣ map()
// Purpose: Transform each element in an array and return a new array of the same length.
// Does not mutate the original array.
// Example
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] → original unchanged


// 2️⃣ filter()
// Purpose: Filter elements based on a condition and return a new array.
// Does not mutate the original array.
// Example
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


// 3️⃣ reduce()
// Purpose: Reduce an array to a single value.
// Takes a callback with (accumulator, currentValue).
// Example
const numbers2 = [1,2,3,4];
const sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// 4️⃣ forEach()
// Purpose: Iterate over each element.
// Does not return anything.
// Example
const fruits1 = ["apple", "banana", "mango"];
fruits1.forEach(fruit => console.log(fruit));


// Output:
// apple
// banana
// mango

// 5️⃣ find()
// Purpose: Find first element matching a condition.
// Returns the element (not an array).
// Example
const numbers3 = [5, 12, 8, 130, 44];
const found = numbers3.find(num => num > 10);
console.log(found); // 12

// 6️⃣ findIndex()
// Returns index of first element matching condition.

const numbers4 = [5, 12, 8, 130, 44];
const index = numbers4.findIndex(num => num > 10);
console.log(index); // 1

// 7️⃣ some() & every()
// some() → Returns true if any element satisfies condition.
// every() → Returns true if all elements satisfy condition.

const numbers5 = [1, 2, 3, 4];

console.log(numbers5.some(num => num > 3));  // true
console.log(numbers5.every(num => num > 0)); // true

// 8️⃣ includes()
// Checks if array contains a value → returns true/false.

const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

// 9️⃣ sort()
// Sorts array in place.
// Default is lexicographic → numbers need compare function.

const numbers6 = [4, 2, 5, 1];
numbers6.sort(); 
numbers6.sort((a, b) => a - b); // ascending
console.log(numbers6); // [1, 2, 4, 5]