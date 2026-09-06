// ==================== Modules ====================

// A Module is a JavaScript file that can contain
// its own variables, functions, classes, and logic.
//
// → export makes something available to other modules
// → import brings something from another module


// ==================== Creating a Module ====================

// Any JavaScript file can be used as a Module
// when it is loaded with type="module".
//
// Example:
//
// <script type="module" src="main.js"></script>


// ==================== export ====================

// export makes variables, functions, classes,
// or other values available outside the current module.

export function sum(a, b) {
  return a + b;
}

export const name = "Misaq";


// ==================== import ====================

// import allows us to use exported values
// from another module.

// Example:
//
// import { sum, name } from "./math.js";
//
// console.log(sum(2, 3));
// console.log(name);


// ==================== Module Scope ====================

// Every Module has its own scope.
//
// Variables declared inside a Module
// are not automatically available
// in other Modules.
//
// Example:
//
// // user.js
// const user = "Misaq";
//
// // main.js
// console.log(user); // Error
//
// To use it in another Module,
// we need to export and import it.


// ==================== export + import ====================

// // user.js
//
// export const user = "Misaq";

// // main.js
//
// import { user } from "./user.js";
//
// console.log(user);


// ==================== Named Export ====================

// We can export multiple values from a Module.
//
// Example:
//
// export const name = "John";
// export const age = 25;
//
// export function sayHello() {
//   console.log("Hello");
// }
//
// They can be imported using:
//
// import { name, age, sayHello } from "./user.js";


// ==================== Module Execution ====================

// A Module is evaluated only once.
//
// If multiple Modules import the same Module,
// that Module is executed only once.
//
// The same exported values are then shared
// between the importing Modules.


// ==================== Shared Objects ====================

// Exported objects can be shared between Modules.
//
// // user.js
//
// export const user = {
//   name: "John"
// };
//
// // app.js
//
// import { user } from "./user.js";
//
// user.name = "Pete";
//
// // profile.js
//
// import { user } from "./user.js";
//
// console.log(user.name);
// "Pete"


// ==================== Strict Mode ====================

// Modules are automatically in strict mode.
//
// We do NOT need to write:
//
// "use strict";
//
// Example:
//
// x = 10; // Error
//
// because x was not declared.


// ==================== type="module" ====================

// In the Browser, we use type="module"
// to tell the Browser that the script is a Module.
//
// Example:
//
// <script type="module" src="main.js"></script>


// ==================== Module Path ====================

// In native Browser Modules,
// import paths should normally specify
// the file path.
//
// Example:
//
// import { sum } from "./math.js";
//
// "./math.js" → relative path
// "/js/math.js" → absolute path
//
// A bare module specifier like:
//
// import React from "react";
//
// is not resolved by the Browser natively.
// Build tools such as Vite handle this
// through module resolution.


// ==================== import.meta ====================

// import.meta contains information
// about the current Module.
//
// In the Browser:
//
// console.log(import.meta.url);
//
// → Returns the URL of the current Module.


// ==================== Modules are Deferred ====================

// Module scripts are automatically deferred.
//
// This means the Browser can continue parsing HTML
// while the Module is being downloaded.
//
// The Module is executed after the HTML
// has been parsed.


// ==================== Modules and Build Tools ====================

// Large applications usually contain
// many interconnected Modules.
//
// Build tools can analyze these dependencies
// and prepare the code for production.
//
// They can perform tasks such as:
//
// → Bundling
// → Tree shaking
// → Minification
// → Transpilation
// → Dependency resolution


// ==================== Important ====================

// A Module does NOT automatically share
// its variables with other Modules.
//
// Example:
//
// // module1.js
//
// const message = "Hello";
//
// // module2.js
//
// console.log(message); // Error
//
// We need:
//
// export → to make it available
// import → to use it somewhere else


// ==================== Summary ====================

// Module
// → An independent JavaScript file.

// export
// → Makes values available outside the Module.

// import
// → Brings values from another Module.

// Module Scope
// → Each Module has its own scope.

// type="module"
// → Tells the Browser to treat the script as a Module.

// Strict Mode
// → Modules are automatically in strict mode.

// Execute Once
// → A Module is evaluated only once.

// import.meta
// → Provides information about the current Module.

// Deferred
// → Module scripts are automatically deferred.

// Build Tools
// → Manage, bundle, optimize, and transform Modules.