/*
 * ============================================================================
 * 🚀 SYMBOL TYPE
 * ============================================================================
 *
 * `Symbol` is a primitive data type used to create unique identifiers.
 *
 * Symbols are mainly useful when we need unique property keys
 * that won't accidentally conflict with other properties.
 *
 * Object property keys can be either:
 *
 *     - strings
 *     - symbols
 *
 */


/* ============================================================================
 * 1. CREATING SYMBOLS
 * ============================================================================
 */

// A Symbol is created by calling `Symbol()`.

let id = Symbol();


// We can also provide an optional description.
//
// The description is mainly useful for debugging.
// It does NOT affect the uniqueness of the Symbol.

let userId = Symbol("userId");

console.log(userId);
// Symbol(userId)


/* ============================================================================
 * 2. SYMBOLS ARE ALWAYS UNIQUE
 * ============================================================================
 */

// Every Symbol is a unique value.
//
// Even if two Symbols have exactly the same description,
// they are still different values.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false


// The description is only a label.
//
// It does NOT make two Symbols equal.


// Think of it like:
//
//     Symbol("id") → unique Symbol
//     Symbol("id") → another unique Symbol
//
// Same description ≠ same Symbol.



/* ============================================================================
 * 3. SYMBOL AS AN OBJECT PROPERTY KEY
 * ============================================================================
 */

// A Symbol can be used as a property key.

let user = {
    name: "Ali"
};

let idKey = Symbol("id");

user[idKey] = 123;

console.log(user[idKey]); // 123


// The Symbol itself is the key.
//
// It is NOT the same as the string "id".

console.log(user["id"]); // undefined



/* ============================================================================
 * 4. WHY USE SYMBOLS AS PROPERTY KEYS?
 * ============================================================================
 */

// Symbols are useful when different parts of an application
// might add properties to the same object.
//
// Using a normal string key can cause naming conflicts.

let userData = {
    name: "Ali"
};


// Another part of the application might also use "id":

userData.id = "Our ID";

userData.id = "Their ID";


// The second assignment overwrites the first one.
//
// This can create accidental conflicts.


// With Symbols, each part of the application can create
// its own unique key.

let ourId = Symbol("id");
let theirId = Symbol("id");

userData[ourId] = "Our ID";
userData[theirId] = "Their ID";

console.log(userData[ourId]);   // Our ID
console.log(userData[theirId]); // Their ID


// Even though both Symbols have the same description,
// they are different keys and cannot accidentally overwrite each other.



/* ============================================================================
 * 5. SYMBOLS IN OBJECT LITERALS
 * ============================================================================
 */

// When using a Symbol as a key inside an object literal,
// we need square brackets.
//
// This tells JavaScript to use the VALUE of the variable as the key.

let key = Symbol("id");

let person = {
    name: "Ali",

    [key]: 123
};

console.log(person[key]); // 123


// Without square brackets:
//
//     key: 123
//
// JavaScript would create a normal string property named "key".
//
// With:
//
//     [key]: 123
//
// JavaScript uses the Symbol stored inside `key` as the property key.



/* ============================================================================
 * 6. SYMBOL PROPERTIES ARE SKIPPED BY "FOR...IN"
 * ============================================================================
 */

// Symbol properties do not appear in normal `for...in` iteration.

let symbolKey = Symbol("id");

let employee = {
    name: "Ali",
    age: 30,

    [symbolKey]: 123
};

for (let key in employee) {
    console.log(key);
}

// name
// age
//
// The Symbol property is skipped.


// However, we can still access it directly:

console.log(employee[symbolKey]); // 123



/* ============================================================================
 * 7. OBJECT.KEYS() ALSO IGNORES SYMBOLS
 * ============================================================================
 */

// `Object.keys()` returns string keys,
// but it does not return Symbol keys.

console.log(Object.keys(employee));

// ["name", "age"]


// Symbol properties are intentionally skipped
// by these normal property-enumeration mechanisms.



/* ============================================================================
 * 8. SYMBOLS ARE NOT 100% HIDDEN
 * ============================================================================
 */

// Symbol properties are sometimes described as "hidden",
// but they are NOT truly private.
//
// We can retrieve Symbol keys using:
//
//     Object.getOwnPropertySymbols()

let productId = Symbol("productId");

let product = {
    name: "Laptop",

    [productId]: 101
};

console.log(
    Object.getOwnPropertySymbols(product)
);

// [Symbol(productId)]


// So Symbol properties are hidden from normal enumeration,
// but they can still be accessed intentionally.



/* ============================================================================
 * 9. OBJECT.ASSIGN() COPIES SYMBOL PROPERTIES
 * ============================================================================
 */

// `Object.assign()` copies both string properties
// and Symbol properties.

let id = Symbol("id");

let original = {
    name: "Ali",

    [id]: 123
};

let clone = Object.assign({}, original);

console.log(clone[id]); // 123


// This is intentional.
//
// When cloning or merging objects,
// Symbol properties should also be copied.



/* ============================================================================
 * 10. SYMBOLS DO NOT AUTO-CONVERT TO STRINGS
 * ============================================================================
 */

// Symbols are special because they don't automatically convert to strings.

let symbol = Symbol("id");

// This causes an error:
//
// console.log("ID: " + symbol);
//
// TypeError:
// Cannot convert a Symbol value to a string


// If we explicitly want a string representation,
// we can use `.toString()`.

console.log(symbol.toString());

// "Symbol(id)"



/* ============================================================================
 * 11. SYMBOL.DESCRIPTION
 * ============================================================================
 */

// Every Symbol can have a `description`.
//
// It returns only the description that was provided
// when the Symbol was created.

let symbolId = Symbol("id");

console.log(symbolId.description);

// "id"


// Important:
//
// `.description` is NOT the Symbol itself.
//
// It is only its description.



/* ============================================================================
 * 12. GLOBAL SYMBOLS WITH SYMBOL.FOR()
 * ============================================================================
 */

// Normally:
//
// Symbol("id") !== Symbol("id")
//
// But sometimes different parts of an application
// need to access the SAME Symbol.
//
// JavaScript provides a global Symbol registry for this purpose.
//
// Use:
//
//     Symbol.for(key)

let globalId1 = Symbol.for("id");

let globalId2 = Symbol.for("id");

console.log(globalId1 === globalId2); // true


// `Symbol.for("id")`:
//
// 1. Checks the global Symbol registry.
// 2. If "id" already exists, returns the existing Symbol.
// 3. Otherwise, creates a new Symbol and stores it.
//
// Therefore, repeated calls with the same key
// return exactly the same Symbol.



/* ============================================================================
 * 13. SYMBOL() VS SYMBOL.FOR()
 * ============================================================================
 */

// Normal Symbol:
//
// Every call creates a new unique Symbol.

let local1 = Symbol("id");
let local2 = Symbol("id");

console.log(local1 === local2); // false


// Global Symbol:
//
// The same key returns the same Symbol.

let global1 = Symbol.for("id");
let global2 = Symbol.for("id");

console.log(global1 === global2); // true



/* ============================================================================
 * 14. SYMBOL.KEYFOR()
 * ============================================================================
 */

// `Symbol.keyFor()` does the opposite of `Symbol.for()`.
//
// `Symbol.for()`:
//
//     key → Symbol
//
// `Symbol.keyFor()`:
//
//     Symbol → key

let symbolName = Symbol.for("username");

console.log(
    Symbol.keyFor(symbolName)
);

// "username"


// It only works with GLOBAL Symbols.



/* ============================================================================
 * 15. SYMBOL.KEYFOR() WITH A LOCAL SYMBOL
 * ============================================================================
 */

// A normal Symbol is NOT stored in the global registry.

let localSymbol = Symbol("username");

console.log(
    Symbol.keyFor(localSymbol)
);

// undefined


// But every Symbol still has a description:

console.log(localSymbol.description);

// "username"



/* ============================================================================
 * 16. SYSTEM / WELL-KNOWN SYMBOLS
 * ============================================================================
 */

// JavaScript provides special built-in Symbols
// that can be used to customize built-in language behavior.
//
// Some important examples:
//
//     Symbol.iterator
//     Symbol.toPrimitive
//     Symbol.hasInstance
//     Symbol.isConcatSpreadable
//
// These are called "well-known Symbols".


// We will encounter them later when learning
// features such as iterables and object-to-primitive conversion.



/* ============================================================================
 * 17. SYMBOL.ITERATOR
 * ============================================================================
 */

// `Symbol.iterator` is one of the most important
// well-known Symbols.
//
// It is used by JavaScript to define how an object
// should be iterated over.
//
// It becomes especially important when learning:
//
//     for...of
//     iterables
//     iterators
//
// We will study this in more detail later.



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - `Symbol` is a primitive type used to create unique identifiers.
 *
 * - Symbols are created with:
 *
 *     Symbol()
 *
 * - A Symbol can optionally have a description:
 *
 *     Symbol("id")
 *
 * - Symbols are always unique.
 *
 *     Symbol("id") === Symbol("id") // false
 *
 * - Symbols can be used as object property keys:
 *
 *     obj[symbol]
 *
 * - When using a Symbol inside an object literal,
 *   use square brackets:
 *
 *     {
 *         [symbol]: value
 *     }
 *
 * - Symbol properties are skipped by:
 *
 *     for...in
 *     Object.keys()
 *
 * - Symbol properties are NOT truly private.
 *
 * - Symbol properties can be retrieved with:
 *
 *     Object.getOwnPropertySymbols(obj)
 *
 * - `Object.assign()` copies Symbol properties as well.
 *
 * - Symbols do not automatically convert to strings.
 *
 * - Use `.toString()` for an explicit string representation.
 *
 * - Use `.description` to get the Symbol description.
 *
 * - `Symbol.for(key)` creates or retrieves a GLOBAL Symbol.
 *
 * - Multiple calls to `Symbol.for()` with the same key
 *   return the same Symbol.
 *
 * - `Symbol.keyFor(symbol)` returns the key of a global Symbol.
 *
 * - `Symbol.keyFor()` returns `undefined` for local Symbols.
 *
 * - JavaScript also provides well-known Symbols such as:
 *
 *     Symbol.iterator
 *     Symbol.toPrimitive
 *     Symbol.hasInstance
 *
 * ============================================================================
 */

