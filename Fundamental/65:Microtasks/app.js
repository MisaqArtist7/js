// ==================== Microtask Queue ====================

// Promise handlers are executed asynchronously
// through the Microtask Queue.
//
// → .then()
// → .catch()
// → .finally()


// ==================== Execution Order ====================

Promise.resolve().then(() => {
  console.log("A");
});

console.log("B");

// B
// A


// ==================== Why? ====================

// Promise handlers are added to the Microtask Queue.
// The current synchronous code finishes first,
// then microtasks are executed.


// ==================== Promise Chaining ====================

Promise.resolve()
  .then(() => {
    console.log("A");
  })
  .then(() => {
    console.log("B");
  });

console.log("C");

// C
// A
// B


// ==================== Microtask Queue ====================

// Microtasks are processed in FIFO order.
//
// → First added → First executed

Promise.resolve().then(() => {
  console.log("First");
});

Promise.resolve().then(() => {
  console.log("Second");
});

// First
// Second


// ==================== Already Settled Promise ====================

// Even if a Promise is already resolved,
// its handlers still run asynchronously.

const promise = Promise.resolve("Done");

promise.then(result => {
  console.log(result);
});

console.log("End");

// End
// Done


// ==================== unhandledrejection ====================

// If a rejected Promise has no handler,
// the browser can trigger "unhandledrejection".

Promise.reject(new Error("Oops"));


// ==================== Handling the Error ====================

Promise.reject(new Error("Oops"))
  .catch(error => {
    console.log(error);
  });


// ==================== Important ====================

// Promise handlers always run asynchronously.
//
// Microtasks are processed after the current
// synchronous code finishes.


// ==================== Summary ====================

// Microtask Queue
// → Queue used for Promise handlers.

// .then() / .catch() / .finally()
// → Scheduled as microtasks.

// Execution order
// → Synchronous code first
// → Microtasks after

// FIFO
// → Microtasks execute in insertion order.

// Important
// → Promise handlers never run immediately,
//   even when the Promise is already settled.

