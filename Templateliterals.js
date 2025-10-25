// Template Literals

// Template Literals allow you to:

// ✔ Write strings in a cleaner way
// ✔ Use variables inside strings
// ✔ Create multi-line strings easily
// ✔ Use expressions directly inside strings

// They are written using backticks → ` ` (not quotes " " or ' ')

//  1️⃣ String with variables — Interpolation
const name = "Nara";
const age = 25;
console.log(`My name is ${name} and I'm ${age} years old.`);
//  Output:
// My name is Nara and I'm 25 years old.


//  2️⃣ Multi-line Strings (No \n needed)
const message = `
Hello,
This is a multi-line
string!
`;

console.log(message);


//  3️⃣ Expressions inside Template Literals
const a = 10;
const b = 20;
console.log(`Sum is: ${a + b}`); // Sum is: 30

//  4️⃣ Function call inside Template Literals
function greet() {
  return "Good Evening";
}

console.log(`Message: ${greet()}`);

//  5️⃣ Template Literals with Objects
const user = { name: "Rao", city: "Bangalore" };
console.log(`Name: ${user.name}, City: ${user.city}`);

//  6️⃣ Tagged Template Literals (Advanced Example)

// Tagged templates allow you to process string values before output.

function format(strings, name, age) {
  return `${name.toUpperCase()} is ${age} years old.`;
}

const result = format`User ${"nara"} age ${25}`;
console.log(result);


//  Output:
// NARA is 25 years old.