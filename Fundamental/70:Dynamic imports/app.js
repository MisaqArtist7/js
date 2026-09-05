// // ==================== Dynamic Imports ====================

// // Regular import is static.
// //
// // import { sayHi } from "./say.js";
// //
// // Static imports must be at the top level
// // and cannot be used conditionally or dynamically.


// // ==================== import() ====================

// // import() allows us to load a Module dynamically.
// //
// // It can be used anywhere in the code
// // and returns a Promise.

// // Example:

// const module = await import("./say.js");


// // ==================== Dynamic Path ====================

// // Unlike static import,
// // the Module path can be determined dynamically.

// // Example:

// const moduleName = "./say.js";

// const module = await import(moduleName);


// // ==================== Promise ====================

// // import() returns a Promise.
// //
// // We can use .then() and .catch():

// import("./say.js")
//   .then(module => {
//     module.hi();
//   })
//   .catch(error => {
//     console.log(error);
//   });


// // ==================== async / await ====================

// // Dynamic import works nicely with async/await.

// async function loadModule() {
//   const module = await import("./say.js");

//   module.hi();
//   module.bye();
// }


// // ==================== Named Exports ====================

// // All named exports are available
// // as properties of the returned Module object.
// //
// // // say.js
// //
// // export function hi() {}
// // export function bye() {
// //
// // const module = await import("./say.js");
// //
// // module.hi();
// // module.bye();


// // ==================== Destructuring ====================

// // We can destructure the imported Module object.

// // const { hi, bye } = await import("./say.js");
// //
// // hi();
// // bye();


// // ==================== Default Export ====================

// // A default export is available
// // through the "default" property.

// // // say.js
// //
// // export default function sayHi() {}

// const module = await import("./say.js");

// module.default();


// // ==================== Dynamic Import in Regular Scripts ====================

// // Dynamic import() does NOT require
// // <script type="module">.
// //
// // It can also be used inside
// // a regular script.


// // ==================== Why Dynamic Import? ====================

// // Dynamic imports are useful when
// // we don't need a Module immediately.
// //
// // Common use cases:
// //
// // → Load code only when needed
// // → Conditional loading
// // → Lazy loading
// // → Reduce initial loading
// // → Load features on demand


// // ==================== Important ====================

// // import()
// // → Returns a Promise.

// // import()
// // → Can be used dynamically.

// // import()
// // → Can be used inside functions and conditions.

// // import()
// // → Can use a dynamically generated path.

// // import()
// // → Is NOT actually a normal function,
// //   even though it looks like one.


// // ==================== Summary ====================

// // Static import
// // → Fixed and analyzed before execution.

// // Dynamic import()
// // → Loads a Module on demand.

// // await import("./module.js")
// // → Returns the Module object.

// // module.default
// // → Accesses the default export.

// // module.someFunction
// // → Accesses a named export.