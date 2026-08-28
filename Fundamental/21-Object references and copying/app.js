/**
 * ============================================================================
 * 🚀 OBJECT REFERENCES AND COPYING
 * ============================================================================
 * One of the most fundamental differences between objects and primitives 
 * is that objects are stored and copied "by reference", whereas primitive 
 * values (strings, numbers, booleans, etc.) are always copied "by value".
 */

/* ============================================================================
 * 1. VARIABLES STORE REFERENCES, NOT THE OBJECT ITSELF
 * ============================================================================ */

// A variable assigned to an object stores not the object itself, 
// but its "address in memory" (in other words, a reference to it).

let user = { name: "John" };
let admin = user; // Copies the reference, not the object itself!

// Now we have two variables referencing exactly the same object.
admin.name = "Pete"; // Changed via the 'admin' reference
console.log(user.name); // "Pete" (Changes are visible from 'user' reference)


/* ============================================================================
 * 2. COMPARISON BY REFERENCE
 * ============================================================================ */

// Two objects are equal only if they are the exact same object in memory.

let a = {};
let b = {}; // Two independent objects

console.log( a == b );  // false
console.log( a === b ); // false

let c = a; // 'c' references the same object as 'a'
console.log( a == c );  // true
console.log( a === c ); // true


/* ============================================================================
 * 3. CLONING AND MERGING (SHALLOW COPY)
 * ============================================================================ */

// To create a "real copy" (a clone) of an object, we can iterate over its 
// properties or use built-in methods like Object.assign or spread syntax.

let originalUser = { name: "Ali", age: 30 };

// Method 1: Using Object.assign
// Syntax: Object.assign(dest, [src1, src2...])
let clone1 = Object.assign({}, originalUser);

// Object.assign is also used to merge multiple objects:
let permissions = { canEdit: true };
Object.assign(clone1, permissions); // clone1 now has 'canEdit'

// Method 2: Using Spread Syntax (Modern approach)
let clone2 = { ...originalUser };

// Note: Both methods above create a "Shallow Copy". 
// If the object has nested objects, those nested objects are still copied by reference!


/* ============================================================================
 * 4. DEEP CLONING (DEEP COPY)
 * ============================================================================ */

// To fix the shallow copy issue with nested objects, we must use deep cloning.
// The modern standard way in JavaScript is `structuredClone`.

let complexUser = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

// Creating a Deep Clone:
let deepClone = structuredClone(complexUser);

// Now, nested objects are completely independent!
deepClone.sizes.width = 60;
console.log(complexUser.sizes.width); // 50 (Original object remains unchanged)


/**
 * ============================================================================
 * SUMMARY
 * ============================================================================
 * - Primitives are copied by value.
 * - Objects are copied by reference (memory address).
 * - Objects are only equal (== / ===) if they are the exact same object.
 * - Object.assign and {...obj} create shallow copies.
 * - structuredClone creates deep copies.
 * ============================================================================
 */