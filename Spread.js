//Used to expand elements of an array or object.

// Ex : 1
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums); // [1, 2, 3, 4, 5]

// Ex : 2
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, city: "Delhi" };
console.log(updatedPerson);
// { name: "John", age: 30, city: "Delhi" }

// Ex : 3
const fruits = ["apple", "banana"];
const newFruits = [...fruits];
newFruits.push("mango");
console.log(fruits);     // ["apple", "banana"]
console.log(newFruits);  // ["apple", "banana", "mango"]

// Ex : 4
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

// Ex : 5
function multiply(a, b, c) {
  return a * b * c;
}
const nums1 = [2, 3, 4];
console.log(multiply(...nums1)); // 24

// Ex : 6
const emp = { name: "Nara", role: "Developer" };
const address = { city: "Bangalore", country: "India" };
const empDetails = { ...emp, ...address };
console.log(empDetails);