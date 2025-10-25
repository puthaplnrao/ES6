// Default Parameters in JavaScript

// Default parameters allow you to assign a default value to a function parameter if no value is passed or if it is undefined.

//  Basic Example
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Nara"); // Hello, Nara!
greet();       // Hello, Guest!

//  Example with multiple default values
function add(a = 10, b = 20) {
  return a + b;
}

console.log(add());      // 30
console.log(add(5));     // 25
console.log(add(5, 5));  // 10

//  Default parameter using expression
function multiply(a = 2, b = a * 3) {
  return a * b;
}

console.log(multiply());   // 2 * 6 = 12
console.log(multiply(3));  // 3 * 9 = 27

//  Default with functions inside parameters
function welcome(name, callback = () => "User") {
  console.log(`Welcome, ${callback(name)}`);
}

welcome("Rao"); // Welcome, User

//  Default works only when value is missing or undefined
function test(x = 100) {
  console.log(x);
}

test(); // 100 
test(undefined); // 100 
test(null);      // null  (not default)


//  With Arrow Function Example
const say = (msg = "Hi") => console.log(msg);

say();       // Hi
say("Hello"); // Hello