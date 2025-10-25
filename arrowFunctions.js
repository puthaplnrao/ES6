// Arrow Functions in JavaScript

// Arrow functions are a shorter and cleaner way to write functions.
// Introduced in ES6 to improve function syntax.

//  Basic Syntax
// Normal Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add1 = (a, b) => {
  return a + b;
};

// Shorter Syntax (Implicit return)

// If the function has only one return statement:

const add2 = (a, b) => a + b;
console.log(add2(4, 5)); // 9

// If only one parameter → parentheses optional
const greet = name => console.log(`Hello ${name}`);
greet("Nara");

// No parameters → still need ()
const sayHi = () => console.log("Hi!");
sayHi();

// Arrow functions & this keyword

// Arrow functions don’t have their own this
// They use this from their parent scope (lexical this)

// Example
function Person() {
  this.name = "Rao";

  setTimeout(() => {
    console.log(this.name); // "Rao"
  }, 1000);
}


// If we used a normal function inside setTimeout:

function Person1() {
  this.name = "Rao";

  setTimeout(function() {
    console.log(this.name); //  undefined
  }, 1000);
}



// Example (Object method issue)
const user = {
  name: "Sarah",
  showName: () => {
    console.log(this.name); // undefined
  }
};
user.showName();

// Real Usage Examples
// Used in array methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// Cleaner Promise syntax
// fetchData().then(res => console.log(res)).catch(err => console.log(err));

