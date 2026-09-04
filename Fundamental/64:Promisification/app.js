// ==================== Promisify ====================

// Promisification converts a callback-based function
// into a function that returns a Promise.
//
// Callback API:
// → callback(error, result)
//
// Promise API:
// → resolve(result)
// → reject(error)


// ==================== Basic Promisify ====================

function loadScriptPromise(src) {

  return new Promise((resolve, reject) => {

    loadScript(src, (error, script) => {

      if (error) {
        reject(error);
      } else {
        resolve(script);
      }

    });

  });

}


// ==================== Using the Promisified Function ====================

loadScriptPromise("script.js")
  .then(script => {
    console.log(script);
  })
  .catch(error => {
    console.log(error);
  });


// ==================== Generic promisify() ====================

// A generic helper can convert
// callback-based functions into Promise-based functions.

function promisify(f) {

  return function (...args) {

    return new Promise((resolve, reject) => {

      function callback(error, result) {

        if (error) {
          reject(error);
        } else {
          resolve(result);
        }

      }

      args.push(callback);

      f.call(this, ...args);

    });

  };

}


// ==================== Creating a Promisified Function ====================

const loadScriptPromise = promisify(loadScript);

loadScriptPromise("script.js")
  .then(script => {
    console.log(script);
  });


// ==================== Multiple Arguments ====================

// ...args collects all arguments passed to the wrapper.

loadScriptPromise("script.js");

// args:
// → ["script.js"]

// After adding callback:
// → ["script.js", callback]


// ==================== Preserving this ====================

// f.call(this, ...args) preserves
// the original function's this context.


// ==================== Important ====================

// Promisify is designed for functions
// that use the error-first callback pattern:
//
// callback(error, result)

// The callback should normally be called only once.
//
// A Promise can settle only once,
// so multiple callback calls are not suitable.


// ==================== Summary ====================

// Promisification
// → Converts callback-based APIs into Promise-based APIs.

// error
// → reject(error)

// result
// → resolve(result)

// ...args
// → Collects function arguments.

// f.call(this, ...args)
// → Preserves the original this context.

// Important
// → Promisify is mainly useful for
//   single-result, error-first callbacks.

