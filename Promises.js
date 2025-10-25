// What is a Promise?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It helps avoid callback hell and makes async code cleaner.
// A Promise can be in three states:
// Pending – initial state, operation not completed yet
// Fulfilled – operation completed successfully
// Rejected – operation failed

const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
  // Operation successful!


// Promise.all (Multiple Promises)
// Wait for all promises to complete:
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
Promise.all([p1, p2, p3])
  .then((values) => console.log(values)) // [10, 20, 30]
  .catch((err) => console.log(err));


// Promise.race (First Promise to settle)
const p11 = new Promise((res) => setTimeout(() => res("A"), 1000));
const p22 = new Promise((res) => setTimeout(() => res("B"), 500));

Promise.race([p11, p22])
  .then((value) => console.log(value)); // B



// One Promise fails with Promise.all
const p122 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000); // resolves after 1s
});

const p222 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error in p2"), 1500); // rejects after 1.5s
});

const p322 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(30), 2000); // resolves after 2s
});

Promise.all([p122, p222, p322])
  .then((values) => console.log("All resolved values:", values))
  .catch((err) => console.log("Promise failed:", err));

Promise.allSettled([p122, p222, p322]).then((results) => console.log(results));
