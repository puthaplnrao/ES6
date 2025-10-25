// Destructuring in JavaScript (ES6)
// Destructuring allows you to unpack values from arrays or extract properties from objects into separate variables — in a clean and readable way.


// Array Destructuring
// ✅ Basic Example
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// ✅ Skip Items
const colors = ["red", "green", "blue"];
const [first1, , third] = colors;
console.log(first1, third); // red blue


// ✅ Default Values
const values = [100];
const [x, y = 50] = values;
console.log(x, y); // 100 50


// ✅ Object Destructuring
// ✅ Basic Example
const person = {
  nam: "John",
  age: 25,
};
const { nam, age } = person;
console.log(nam, age); // John 25


// ✅ Rename While Destructuring
const user = {
  username: "narasimha",
  role: "Developer",
};
const { username: userName, role: userRole } = user;
console.log(userName, userRole);
// narasimha Developer


// ✅ With Default Values
const product = { title: "Laptop" };
const { title, price = 50000 } = product;
console.log(title, price); // Laptop 50000


// ✅ Destructure in Function Params
function display({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
const emp = { name: "Rao", age: 30 };
display(emp); // Rao is 30 years old


// ✅ Nested Destructuring
const data = {
  id: 1,
  info: {
    email: "test@example.com",
    city: "Hyderabad",
  },
};
const { info: { email, city } } = data;
console.log(email, city);
// test@example.com Hyderabad


// ✅ Destructuring + Rest Operator
const numbersArr = [1, 2, 3, 4];
const [first, ...rest] = numbersArr;
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
const student = { name: "Sam", grade: "A", age: 20 };
const { name, ...others } = student;
console.log(name);   // Sam
console.log(others); // { grade: 'A', age: 20 }