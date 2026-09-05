// // ==================== Proxy & Reflect ====================

// // Proxy → wraps an object/function and intercepts operations
// // Syntax → new Proxy(target, handler)

// // target → original object/function
// // handler → rules for intercepted operations
// // trap → a handler method that intercepts an operation


// // ==================== Basic Proxy ====================

// const proxy = new Proxy(target, handler);

// // Empty handler → all operations are forwarded to target
// // Proxy behaves like the original object by default


// // ==================== Common Traps ====================

// // get → intercept property reading
// // set → intercept property writing
// // has → intercept "in" operator
// // deleteProperty → intercept delete
// // apply → intercept function calls
// // construct → intercept "new"

// // Other traps:
// // getPrototypeOf, setPrototypeOf
// // isExtensible, preventExtensions
// // defineProperty, getOwnPropertyDescriptor
// // ownKeys


// // ==================== get Trap ====================

// // get(target, property, receiver)

// // → Runs when reading: obj.property
// // → Can provide default values for missing properties

// const proxy = new Proxy(obj, {
//   get(target, property) {
//     return property in target ? target[property] : 0;
//   }
// });


// // ==================== set Trap ====================

// // set(target, property, value, receiver)

// // → Runs when writing: obj.property = value
// // → Useful for validation

// const proxy = new Proxy(obj, {
//   set(target, property, value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Value must be a number");
//     }

//     target[property] = value;
//     return true;
//   }
// });

// // return true → assignment succeeded
// // return false → assignment failed (can cause TypeError in strict mode)


// // ==================== deleteProperty ====================

// // → Runs when: delete obj.property
// // → Can prevent deleting specific properties


// // ==================== ownKeys ====================

// // → Controls property enumeration
// // → Used by Object.keys(), for...in, etc.

// // Can hide properties from enumeration


// // ==================== has Trap ====================

// // → Runs with the "in" operator

// // "key" in object

// // Can define custom membership logic
// // Example → range object can support: 5 in range


// // ==================== Protecting Properties ====================

// // get → prevent reading
// // set → prevent changing
// // deleteProperty → prevent deleting
// // ownKeys → hide from enumeration

// // Modern alternative → private class fields: #property


// // ==================== Proxy for Functions ====================

// // Functions are objects → Proxy can wrap functions

// // apply(target, thisArg, args)

// // → Intercepts function calls
// // → Useful for decorators, logging, delay, validation, etc.


// // ==================== Reflect ====================

// // Reflect → built-in object for performing object operations

// // Reflect.get()
// // Reflect.set()
// // Reflect.deleteProperty()
// // Reflect.construct()
// // Reflect.has()
// // Reflect.ownKeys()
// // etc.

// // Reflect methods correspond closely to internal object operations


// // ==================== Reflect + Proxy ====================

// // Use Reflect inside traps to forward operations safely

// const proxy = new Proxy(target, {
//   get(target, property, receiver) {
//     console.log("Reading:", property);
//     return Reflect.get(target, property, receiver);
//   },

//   set(target, property, value, receiver) {
//     console.log("Writing:", property, value);
//     return Reflect.set(target, property, value, receiver);
//   }
// });


// // ==================== receiver ====================

// // receiver → the Proxy that triggered the operation

// // Important for getters/setters and inheritance
// // Reflect.get(target, property, receiver)
// // preserves correct "this" behavior


// // ==================== Mental Model ====================

// // Target  → original object/function
// // Proxy   → wrapper around target
// // Handler → rules
// // Trap    → intercepted operation
// // Reflect → standard way to forward operations


// // ==================== Summary ====================

// // Proxy → intercept object/function operations
// // get → read
// // set → write
// // has → "in"
// // deleteProperty → delete
// // ownKeys → enumerate
// // apply → call function
// // construct → new

// // Reflect → perform/forward object operations
// // Proxy + Reflect → intercept behavior while keeping normal behavior