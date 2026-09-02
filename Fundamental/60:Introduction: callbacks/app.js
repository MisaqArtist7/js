// ==================== Callbacks ====================

// A callback is a function passed to another function
// to be executed later.

function greet(name, callback) {

  const message = `Hello ${name}`;

  callback(message);

}

greet("Misaq", (message) => {

  console.log(message);

});


// ==================== Asynchronous Callback ====================

// Callbacks are commonly used with asynchronous actions.
//
// The callback runs when the action is completed.

setTimeout(() => {

  console.log("Hello");

}, 1000);


// ==================== Callback in Callback ====================

// An asynchronous action can start another action
// inside its callback.

loadScript("1.js", function () {

  loadScript("2.js", function () {

    console.log("Both scripts loaded");

  });

});


// ==================== Error-First Callback ====================

// A common callback pattern:
//
// → First argument → error
// → Second argument → successful result

function loadScript(src, callback) {

  // ...

  callback(null, "script");

  // If an error occurs:
  // callback(error);

}

loadScript("script.js", function (error, script) {

  if (error) {

    console.log(error);

  } else {

    console.log(script);

  }

});


// ==================== Callback Hell ====================

// Too many nested callbacks make code difficult to read
// and maintain.
//
// loadScript("1.js", function () {
//
//   loadScript("2.js", function () {
//
//     loadScript("3.js", function () {
//
//       // more code...
//
//     });
//
//   });
//
// });


// ==================== Important ====================

// A callback is NOT necessarily asynchronous.
//
// It can also be called synchronously.

function process(callback) {

  console.log("Before");

  callback();

  console.log("After");

}

process(() => {

  console.log("Callback");

});

// Before
// Callback
// After


// ==================== Summary ====================

// Callback
// → A function passed to another function
//   to be executed later.

// Asynchronous callback
// → Runs after an asynchronous operation completes.

// Error-first callback
// → callback(error, result)

// Callback Hell
// → Too many nested callbacks.

// Important
// → Callback does not automatically mean asynchronous.