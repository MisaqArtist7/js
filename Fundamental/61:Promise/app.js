// ==================== Promise ====================

// A Promise represents the eventual result of an operation.
//
// → pending   → operation is still running
// → fulfilled → operation completed successfully
// → rejected  → operation failed
//
// A Promise can settle only once.


// ==================== Creating a Promise ====================

const promise = new Promise((resolve, reject) => {

  // Do something

  resolve("Success");

  // Or:
  // reject(new Error("Something went wrong"));

});


// ==================== then ====================

// .then() handles a fulfilled Promise.
//
// → First argument → success
// → Second argument → error

promise.then(
  result => console.log(result),
  error => console.log(error)
);


// ==================== catch ====================

// .catch() handles a rejected Promise.

promise.catch(error => {
  console.log(error);
});


// ==================== finally ====================

// .finally() runs whether the Promise
// is fulfilled or rejected.
//
// → Usually used for cleanup.

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished");
  });


// ==================== Promise with Async Operation ====================

// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve("Done!");
//   }, 1000);

// });

// promise.then(result => {
//   console.log(result);
// });


// ==================== Multiple Handlers ====================

// Multiple .then() handlers can consume
// the same Promise result.

promise.then(result => {
  console.log("First:", result);
});

promise.then(result => {
  console.log("Second:", result);
});


// ==================== Important ====================

// Promise itself is not necessarily asynchronous.
//
// The operation inside the Promise
// can be synchronous or asynchronous.


// ==================== Summary ====================

// Promise
// → Represents the eventual result of an operation.

// resolve(value)
// → Fulfilled the Promise.

// reject(error)
// → Rejects the Promise.

// then()
// → Handles the result.

// catch()
// → Handles errors.

// finally()
// → Runs after the Promise is settled.

// settled
// → Promise is fulfilled or rejected.
