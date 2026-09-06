// ==================== Global Object ====================

// The global object provides variables and functions
// that are available throughout the environment.

// In browsers, the global object is called window.
// In Node.js, it is called global.
// The standardized name is globalThis.


// ==================== globalThis ====================

// globalThis is the standard way to access
// the global object across different environments.

console.log(globalThis);


// In a browser:

console.log(window === globalThis); // true


// In Node.js:

// console.log(global === globalThis); // true


// ==================== Global Properties ====================

// Properties of the global object can usually
// be accessed directly without writing the object name.

console.log(Math);

console.log(globalThis.Math);


// These refer to the same global object property.

console.log(Math === globalThis.Math); // true


// ==================== Global var ====================

// In a browser, a global var declaration
// becomes a property of the global object.

var userName = "Misaq";

console.log(userName);           // Misaq
console.log(window.userName);    // Misaq
console.log(globalThis.userName); // Misaq


// ==================== Global let / const ====================

// Global let and const do NOT become
// properties of the global object.

let age = 25;
const country = "Azerbaijan";

console.log(age);              // 25
console.log(window.age);       // undefined
console.log(window.country);   // undefined


// ==================== Global Functions ====================

// Function declarations in the global scope
// also become properties of the global object
// in classic browser scripts.

function sayHello() {
  console.log("Hello");
}

sayHello();        // Hello
window.sayHello(); // Hello


// ==================== Avoid Global Variables ====================

// Global variables are generally discouraged.

// Too many global variables can:
// → Cause naming conflicts
// → Make code harder to understand
// → Make code harder to test
// → Make code more difficult to maintain


// Instead of relying on global variables,
// functions should usually receive their data as input.

function calculatePrice(price, tax) {
  return price + tax;
}

console.log(calculatePrice(100, 20)); // 120


// ==================== Explicit Global Properties ====================

// If a value is intentionally global,
// it can be added directly to the global object.

globalThis.currentUser = {
  name: "John"
};

console.log(currentUser.name);          // John
console.log(globalThis.currentUser.name); // John


// ==================== Polyfills ====================

// The global object can be used to check
// whether a feature is supported.

// For example, checking for Promise:

if (!globalThis.Promise) {
  console.log("Promise is not supported.");
}


// A polyfill can provide an implementation
// when a feature is not available.

// if (!globalThis.Promise) {
//   globalThis.Promise = ...;
// }


// ==================== window vs globalThis ====================

// window is browser-specific.

console.log(window);


// global is Node.js-specific.

// console.log(global);


// globalThis is environment-independent.

console.log(globalThis);


// ==================== Summary ====================

// Global Object
// → An object that contains values available globally.

// Browser
// → window

// Node.js
// → global

// Universal name
// → globalThis


// var
// → A global var becomes a property of the global object
//   in classic browser scripts.

// let / const
// → Global let and const do not become properties
//   of the global object.

// Global variables
// → Should be kept to a minimum.

// globalThis
// → The modern, standardized way to access
//   the global object across environments.