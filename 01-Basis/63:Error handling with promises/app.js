// ==================== Promise Error Handling ====================

// Errors in Promise handlers are automatically
// converted into rejected Promises.

// → throw error
// → Promise becomes rejected
// → next .catch() handles the error


// ==================== throw in then ====================

Promise.resolve("OK")
  .then(() => {

    throw new Error("Something went wrong");

  })
  .catch(error => {

    console.log(error.message);

  });


// ==================== catch ====================

// .catch() handles rejected Promises
// and errors thrown inside previous handlers.

Promise.resolve(10)
  .then(result => {

    return result * 2;

  })
  .then(() => {

    throw new Error("Oops");

  })
  .catch(error => {

    console.log(error);

  });


// ==================== catch Can Recover ====================

// If catch handles the error without throwing,
// the next .then() can continue normally.

Promise.reject(new Error("Oops"))
  .catch(error => {

    console.log("Error handled");

  })
  .then(() => {

    console.log("Continue");

  });


// ==================== Rethrowing ====================

// An error can be rethrown from catch
// to be handled by another catch.

Promise.reject(new Error("Oops"))
  .catch(error => {

    console.log("Handle or inspect error");

    throw error;

  })
  .catch(error => {

    console.log("Handle again");

  });


// ==================== Error Propagation ====================

// A single catch can handle errors from
// multiple previous Promise handlers.

promise
  .then(step1)
  .then(step2)
  .then(step3)
  .catch(error => {

    console.log(error);

  });


// ==================== Important: setTimeout ====================

// Errors thrown later inside setTimeout
// are NOT automatically caught by the Promise.

new Promise((resolve, reject) => {

  setTimeout(() => {

    throw new Error("Oops");

  }, 1000);

}).catch(error => {

  // This catch does NOT receive the error.

});


// ==================== Summary ====================

// throw inside Promise handler
// → Converts the Promise into rejected state.

// catch()
// → Handles rejected Promises and thrown errors.

// catch without throw
// → Error is considered handled.

// throw inside catch
// → Rethrows the error to the next handler.

// Error propagation
// → Errors move through the chain
//   until a handler catches them.

// Important
// → Async errors inside separate callbacks
//   are not automatically caught by Promise.catch().

