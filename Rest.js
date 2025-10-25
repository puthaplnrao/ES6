//Used to collect remaining arguments into an array.

// Ex : 1
function sum(...values) {
  return values.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10

// Ex : 2
const numbers = [10, 20, 30, 40];
const [first, second, ...restValues] = numbers;
console.log(first); // 10
console.log(second); // 20
console.log(restValues); // [30, 40]

// Ex : 3
function showDetails(name, ...skills) {
  console.log("Name:", name);
  console.log("Skills:", skills);
}
showDetails("Nara", "JavaScript", "React", "Node");
// Name: Nara
// Skills: ["JavaScript", "React", "Node"]

// Ex : 4
const user = { id: 101, name: "Rao", age: 25, city: "Hyderabad" };
const { id, ...remainingDetails } = user;
console.log(id); // 101
console.log(remainingDetails); 
// { name: "Rao", age: 25, city: "Hyderabad" }

// Ex : 5
function maxValue(...numbers) {
  return Math.max(...numbers);
}
console.log(maxValue(5, 10, 2, 20, 8)); // 20