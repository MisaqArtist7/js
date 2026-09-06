// ==================== Promise Chaining ====================

// Each .then() returns a new Promise.
//
// The returned value becomes the result
// of the next Promise in the chain.

Promise.resolve(1)
  .then(result => {
    return result * 2;
  })
  .then(result => {
    return result * 2;
  })
  .then(result => {
    console.log(result); // 4
  });


// ==================== Returning a Value ====================

// A returned value is passed to the next .then().

Promise.resolve(1)
  .then(result => {
    return result + 1;
  })
  .then(result => {
    console.log(result); // 2
  });


// ==================== Returning a Promise ====================

// If a .then() returns a Promise,
// the next .then() waits for it to settle.

Promise.resolve(1)
  .then(result => {
    return new Promise(resolve => {

      setTimeout(() => {
        resolve(result * 2);
      }, 1000);

    });
  })
  .then(result => {
    console.log(result); // 2
  });


// ==================== Sequential Async Operations ====================

// Returning a Promise allows async operations
// to run one after another.

loadScript("one.js")
  .then(script => loadScript("two.js"))
  .then(script => loadScript("three.js"))
  .then(script => {
    console.log("All scripts loaded");
  });


// ==================== Chaining vs Multiple .then() ====================

// Chaining:
// Each .then() receives the result of the previous one.

promise
  .then(result => result * 2)
  .then(result => result * 2);


// Multiple handlers:
// Each .then() receives the result of the SAME Promise.
// They do not pass results to each other.

promise.then(result => {
  console.log(result);
});

promise.then(result => {
  console.log(result);
});


// ==================== Error Handling ====================

// .catch() catches errors from previous handlers.

promise
  .then(result => {
    throw new Error("Something went wrong");
  })
  .catch(error => {
    console.log(error);
  });


// ==================== then vs then + catch ====================

// These are NOT always equivalent.

// Errors inside f1 are caught here:
promise
  .then(f1)
  .catch(f2);


// But errors inside f1 are NOT caught by f2 here:
promise
  .then(f1, f2);


// ==================== Important ====================

// Always return a Promise from an async operation
// when you want to continue the chain.


// ==================== Summary ====================

// Promise Chaining
// → Connect multiple .then() calls.

// .then()
// → Always returns a new Promise.

// return value
// → Becomes the result of the next .then().

// return Promise
// → The next .then() waits until it settles.

// Multiple .then() on one Promise
// → Handlers run independently.

// .then().catch()
// → Can catch errors thrown inside .then().

