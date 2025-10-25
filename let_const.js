    // What is let?
    // Used to declare variables that can be updated later
    // Block scoped (works only inside { } it is declared in)
    // Cannot re-declare the same variable in the same scope

let age = 25;
age = 26; // ✅ allowed
console.log(age); // 26
// let age = 30; // Cannot re-declare same variable


    // What is const?
    // Used to declare constants
    // Block scoped like let
    // Must be initialized while declaring
    // Cannot be reassigned

const pi = 3.14;
console.log(pi);
//pi = 3.15; // Error: Assignment to constant variable

const person = { name: "John" };
person.name = "Mark"; // allowed
console.log(person.name); // Mark

const person1 = { name: "John" };
// person1 = {}; not allowed


// Block Scope Example
if (true) {
  let x = 10;
  const y = 20;
}

// console.log(x); //  Error: x is not defined
// console.log(y); //  Error: y is not defined

// Temporal Dead Zone (TDZ)
// console.log(a); //  ReferenceError
let a = 5;