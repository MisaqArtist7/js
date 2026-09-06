// ==================== Import & Export ====================

// export makes values available to other Modules.
// import brings values from another Module.


// ==================== Named Export ====================

// A Module can have multiple named exports.

export const name = "Misaq";

export function sayHi() {
  console.log("Hello");
}


// ==================== Named Import ====================

// Named exports are imported with { }.

// import { name, sayHi } from "./user.js";


// ==================== Rename with "as" ====================

// "as" allows us to rename an imported value.

// import { sayHi as hello } from "./user.js";

// hello();


// ==================== Import * as ====================

// Imports all named exports as a namespace object.

// import * as math from "./math.js";

// math.sum();
// math.multiply();


// ==================== Default Export ====================

// A Module can have only ONE default export.

export default class User {}


// ==================== Default Import ====================

// Default exports are imported WITHOUT { }.

// import User from "./user.js";

// The local name can be different:
//
// import MyUser from "./user.js";


// ==================== Named vs Default ====================

// Named:
// export function sayHi() {}
// import { sayHi } from "./say.js";

// Default:
// export default function sayHi() {}
// import sayHi from "./say.js";


// ==================== Default + Named ====================

// A Module can have one default export
// and multiple named exports.

// export default class User {}
// export function login() {}
// export function logout() {}

// import User, { login, logout } from "./user.js";


// ==================== Re-export ====================

// Re-export values from another Module.

// export { sayHi } from "./say.js";

// Rename while re-exporting:
//
// export { sayHi as hello } from "./say.js";


// ==================== export * ====================

// Re-exports all named exports.
//
// Important:
// export * does NOT re-export the default export.

// export * from "./say.js";


// ==================== Side Effect Import ====================

// Runs a Module without importing its exports.

// import "./analytics.js";


// ==================== Static Import ====================

// Regular import must be at the top level.
//
// Conditional imports are not allowed:
//
// if (condition) {
//   import { x } from "./module.js"; // ❌
// }

// Dynamic import() is used for this case.


// ==================== Summary ====================

// Named Export
// → Multiple allowed
// → Imported with { }

// Default Export
// → Only one allowed
// → Imported without { }

// as
// → Renames an import/export

// * as
// → Imports all named exports as an object

// Re-export
// → Exports something from another Module

// export *
// → Re-exports named exports, NOT default