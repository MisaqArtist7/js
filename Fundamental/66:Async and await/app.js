// ==================== Async / Await ====================

// async/await is a cleaner syntax for working with Promises.
//
// → async function always returns a Promise.
// → await waits for a Promise to settle
//   and gives its result.


// ==================== async ====================

async function getNumber() {

  return 10;

}

// getNumber() returns:
// → Promise fulfilled with 10


// ==================== await ====================

// await can be used inside an async function.

async function test() {

  const result = await Promise.resolve(10);

  console.log(result); // 10

}


// ==================== await Does Not Block JavaScript ====================

// await pauses the current async function,
// not the entire JavaScript execution.

async function test() {

  console.log("A");

  const result = await new Promise(resolve => {

    setTimeout(() => {
      resolve(10);
    }, 1000);

  });

  console.log(result);

}

test();

console.log("B");

// A
// B
// 10


// ==================== Promise Chain vs async/await ====================

// Promise chain:

fetch(url)
  .then(response => response.json())
  .then(user => {
    console.log(user);
  });


// async/await:

async function getUser() {

  const response = await fetch(url);
  const user = await response.json();

  console.log(user);

}


// ==================== Error Handling ====================

// A rejected Promise with await
// throws an error that can be caught with try/catch.

async function getData() {

  try {

    const response = await fetch(url);

  } catch (error) {

    console.log(error);

  }

}


// ==================== Multiple await ====================

// Multiple await expressions can be handled
// by the same try/catch block.

async function getUser() {

  try {

    const response = await fetch(url);
    const user = await response.json();

    console.log(user);

  } catch (error) {

    console.log(error);

  }

}


// ==================== async Function Error ====================

// An uncaught error inside an async function
// makes the returned Promise rejected.

async function test() {

  throw new Error("Oops");

}

test().catch(error => {
  console.log(error);
});


// ==================== Promise.all ====================

// Use Promise.all when multiple independent
// async operations should run together.

const results = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
]);


// ==================== Sequential vs Parallel ====================

// Sequential:
//
// Each await waits before starting the next step.

const a = await fetch(url1);
const b = await fetch(url2);
const c = await fetch(url3);


// Parallel:
//
// Start all operations and wait for all results.

const resultss = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
]);


// ==================== Summary ====================

// async
// → Function always returns a Promise.

// await
// → Waits for a Promise and returns its result.

// rejected Promise + await
// → Throws an error.

// try/catch
// → Handles errors from await.

// Promise.all()
// → Waits for multiple Promises together.

// Important
// → async/await is syntax built on top of Promises.

