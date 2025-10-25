// ES6 feature examples
// Save this file as index.js and run with Node (v6+ recommended) or in modern browsers.

// 1) let / const (block scoping)
const PI = 3.14159;
let count = 0;
{
    let count = 10; // block-scoped, doesn't shadow outer const
    console.log('inner count:', count);
}
console.log('outer count:', count);

// 2) Arrow functions
const add = (a, b) => a + b;
const square = x => x * x;
console.log('add(2,3)=', add(2, 3), 'square(4)=', square(4));

// 3) Default parameters, rest and spread
function greet(name = 'Guest', ...tags) {
    return `Hello, ${name}! Tags: ${tags.join(', ')}`;
}
console.log(greet()); // uses default
console.log(greet('Alice', 'admin', 'beta'));

const nums = [1, 2, 3];
const nums2 = [...nums, 4, 5]; // spread
console.log('nums2:', nums2);

// 4) Template literals
const user = { first: 'Jane', last: 'Doe' };
console.log(`User: ${user.first} ${user.last} (PI=${PI})`);

// 5) Destructuring (arrays and objects)
const [a, b, ...rest] = nums2;
console.log('a,b,rest=', a, b, rest);

const { first: fName, last: lName } = user;
console.log('fName,lName=', fName, lName);

// 6) Object property shorthand & method shorthand & computed property names
const key = 'dynamicKey';
const obj = {
    fName, // shorthand for fName: fName
    greet(msg) { // method shorthand
        return `${msg} from ${this.fName}`;
    },
    [key]: 42 // computed property name
};
console.log('obj:', obj, obj.greet('Hi'), obj.dynamicKey);

// 7) Object.assign and enhanced object operations
const defaults = { a: 1, b: 2 };
const options = { b: 3, c: 4 };
const merged = Object.assign({}, defaults, options);
console.log('merged:', merged);

// 8) Classes, inheritance, static methods, getters/setters
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound.`;
    }
    static info() {
        return 'Animals';
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() { // overrides
        return `${this.name} barks.`;
    }
    get details() {
        return `${this.name} is a ${this.breed}`;
    }
}
const dog = new Dog('Rex', 'Shepherd');
console.log(dog.speak(), dog.details, Dog.info());

// 9) Promises (ES6)
function wait(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}
wait(50, 'done').then(v => console.log('promise resolved:', v));

// 10) Generators & iterators
function* idGenerator() {
    let id = 1;
    while (id <= 3) {
        yield id++;
    }
}
for (const id of idGenerator()) {
    console.log('generated id:', id);
}

// 11) for...of and for...in difference
const arr = ['x', 'y'];
for (const v of arr) console.log('for..of value:', v);
for (const k in arr) console.log('for..in key:', k);

// 12) Map, Set, WeakMap, WeakSet
const map = new Map([['k1', 1], ['k2', 2]]);
map.set('k3', 3);
console.log('map has k2?', map.has('k2'), 'size:', map.size);
const set = new Set([1, 2, 2, 3]);
console.log('set:', [...set]);

// 13) Symbol
const sym = Symbol('id');
const o = { [sym]: 123, normal: 'x' };
console.log('symbol prop:', o[sym], 'normal:', o.normal);

// 14) Array.from, Array.of, find, includes, findIndex, entries/keys/values
console.log('Array.from("abc"):', Array.from('abc'));
console.log('Array.of(7):', Array.of(7));
console.log('includes 2?', nums2.includes(2));
console.log('find >2:', nums2.find(x => x > 2), 'findIndex >2:', nums2.findIndex(x => x > 2));

// 15) Number/Math improvements (examples)
console.log('Number.isNaN(NaN)?', Number.isNaN(NaN));
console.log('Math.trunc(3.9)=', Math.trunc(3.9));

// 16) Proxy and Reflect (basic example)
const target = { a: 1 };
const proxy = new Proxy(target, {
    get(obj, prop) {
        console.log('get trap:', prop);
        return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
        console.log('set trap:', prop, '=', value);
        return Reflect.set(obj, prop, value);
    }
});
proxy.a; // triggers get
proxy.b = 2; // triggers set
console.log('target after proxy:', target);

// 17) Iterables & custom iterator
const iterable = {
    *[Symbol.iterator]() {
        yield 'alpha';
        yield 'beta';
    }
};
for (const v of iterable) console.log('custom iterable:', v);

// 18) Unicode & binary/octal literals
console.log('Binary 0b101 =', 0b101, 'Octal 0o17 =', 0o17);
console.log('Unicode code point \\u{1F600} =>', '\u{1F600}');

// 19) Module examples (commented — illustrate syntax)
// export function exportedFn() { return 'exported'; }
// export default class DefaultClass {}

// import { exportedFn } from './module.js';
// import DefaultClass from './module.js';

// 20) Practical small example combining many features
const people = [
    { name: 'Ann', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Cara', age: 23 }
];

const namesUpper = people
    .map(({ name }) => name.toUpperCase()) // destruct + arrow + method
    .filter(n => n.startsWith('A')); // arrow

console.log('namesUpper starting with A:', namesUpper);

// End of ES6 examples.