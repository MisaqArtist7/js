/*
 * ============================================================================
 * 🚀 METHODS OF PRIMITIVES
 * ============================================================================
 *
 * Primitives are not objects, but JavaScript allows us to use
 * methods on most primitive values.
 *
 * The main primitive types are:
 *
 *     string
 *     number
 *     bigint
 *     boolean
 *     symbol
 *     null
 *     undefined
 *
 */


/* ============================================================================
 * 1. PRIMITIVES CAN USE METHODS
 * ============================================================================
 */

// Even though `str` is a primitive,
// we can call methods on it.

let str = "Hello";

console.log(str.toUpperCase());
// HELLO


// JavaScript temporarily creates a wrapper object
// around the primitive to provide the method.
//
// Roughly:
//
//     "Hello"
//        ↓
//     String wrapper
//        ↓
//     toUpperCase()
//        ↓
//     "HELLO"
//        ↓
//     wrapper disappears



/* ============================================================================
 * 2. NUMBER METHODS
 * ============================================================================
 */

// Numbers can also use methods.

let num = 1.23456;

console.log(num.toFixed(2));
// 1.23


// The number itself is still a primitive.
// JavaScript only provides temporary object-like behavior
// when we access its methods.



/* ============================================================================
 * 3. PRIMITIVE VS OBJECT
 * ============================================================================
 */

// A primitive stores a single value.

let name = "Ali";


// An object can store properties and methods.

let user = {
    name: "Ali",

    sayHi() {
        console.log("Hi!");
    }
};

console.log(typeof name); // "string"
console.log(typeof user); // "object"



/* ============================================================================
 * 4. WRAPPER OBJECTS
 * ============================================================================
 */

// JavaScript has wrapper objects such as:
//
//     String
//     Number
//     Boolean
//     Symbol
//     BigInt
//
// They provide methods for the corresponding primitives.
//
// But normally we DON'T create wrapper objects manually.



/* ============================================================================
 * 5. DON'T USE "NEW STRING", "NEW NUMBER", ETC.
 * ============================================================================
 */

// Using `new` creates an actual object instead of a primitive.

let primitiveNumber = 0;
let objectNumber = new Number(0);

console.log(typeof primitiveNumber);
// "number"

console.log(typeof objectNumber);
// "object"


// Objects are truthy, even when they contain 0 or false.

if (objectNumber) {
    console.log("This runs!");
}


// Therefore:
//
//     new Number(0)
//
// should generally be avoided.
//
// Use primitive values instead:
//
//     let number = 0;



/* ============================================================================
 * 6. STRING(), NUMBER(), BOOLEAN() WITHOUT "NEW"
 * ============================================================================
 */

// Without `new`, these functions are useful for conversion.

let number = Number("123");

console.log(number);
// 123

console.log(typeof number);
// "number"


let text = String(123);

console.log(text);
// "123"

console.log(typeof text);
// "string"


let value = Boolean(1);

console.log(value);
// true



/* ============================================================================
 * 7. NULL AND UNDEFINED
 * ============================================================================
 */

// `null` and `undefined` are different.
//
// They don't have wrapper objects or methods.

let empty = null;

// empty.test;
// Error


let missing;

console.log(missing);
// undefined


// Trying to access a property or method on null/undefined
// causes an error.



/* ============================================================================
 * 8. PRIMITIVES CANNOT STORE PROPERTIES
 * ============================================================================
 */

// Primitives cannot permanently store custom properties.

let message = "Hello";

message.test = 5;

console.log(message.test);
// undefined


// Why?
//
// JavaScript temporarily creates a wrapper object:
//
//     message
//        ↓
//     temporary String object
//        ↓
//     test = 5
//        ↓
//     wrapper disappears
//
// The original primitive remains unchanged.



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - Primitives are NOT objects.
 *
 * - Most primitives can still use methods.
 *
 * - JavaScript temporarily creates a wrapper object when needed.
 *
 * - The wrapper is then discarded.
 *
 * - This allows primitives to stay lightweight.
 *
 * - `String()`, `Number()` and `Boolean()` can be used for conversion.
 *
 * - Avoid:
 *
 *     new String()
 *     new Number()
 *     new Boolean()
 *
 * - `null` and `undefined` have no methods.
 *
 * - Primitives cannot permanently store custom properties.
 *
 * ============================================================================
 */
