// ==================== Native Prototypes ====================

// JavaScript built-in objects also use prototypes.
//
// Examples:
// → Object.prototype
// → Array.prototype
// → String.prototype
// → Function.prototype


// ==================== Object.prototype ====================

const user = {};

console.log(user.toString());

// "toString" is not inside user.
// It is inherited from Object.prototype.

console.log(
  Object.getPrototypeOf(user) === Object.prototype
);

// true


// ==================== Array.prototype ====================

const numbers = [1, 2, 3];

console.log(numbers.push);

// "push" comes from Array.prototype.

console.log(
  Object.getPrototypeOf(numbers) === Array.prototype
);

// true


// ==================== Prototype Chain ====================

// Built-in objects also have a prototype chain.
//
// numbers
//   ↓
// Array.prototype
//   ↓
// Object.prototype
//   ↓
// null


// ==================== Method Lookup ====================

// If a method exists in a closer prototype,
// JavaScript uses that version first.

const numbers2 = [1, 2, 3];

console.log(numbers2.toString());

// Array.prototype.toString()
// is used before Object.prototype.toString.


// ==================== Primitive Prototypes ====================

// Primitives can also use prototype methods.
//
// String → String.prototype
// Number → Number.prototype
// Boolean → Boolean.prototype

const text = "hello";

console.log(text.toUpperCase());

// toUpperCase comes from String.prototype.


// ==================== null & undefined ====================

// null and undefined have no wrapper objects
// and no prototypes.


// ==================== Modifying Native Prototypes ====================

// Native prototypes can be modified,
// but this is generally NOT recommended.

String.prototype.sayHi = function () {

  console.log(`Hi ${this}`);

};

"Hello".sayHi();


// ==================== Method Borrowing ====================

// A method from one prototype can sometimes
// be borrowed and used by another object.

const obj = {

  0: "Hello",

  1: "World",

  length: 2

};

obj.join = Array.prototype.join;

console.log(obj.join(" "));

// "Hello World"


// ==================== Summary ====================

// Built-in prototypes
// → Store shared methods.

// Array.prototype
// → Methods for arrays.

// String.prototype
// → Methods for strings.

// Object.prototype
// → Common methods for objects.

// Primitive values
// → Can access methods through wrapper prototypes.

// Native prototypes
// → Can be modified, but usually should not be.

// Method borrowing
// → Using a method from another prototype/object.

