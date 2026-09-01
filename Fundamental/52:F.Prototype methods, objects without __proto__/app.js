// ==================== Prototype Methods ====================

// Modern methods for working with prototypes:
//
// → Object.getPrototypeOf()
// → Object.setPrototypeOf()
// → Object.create()


// ==================== Object.create() ====================

// Creates a new object with the given prototype.

const animal = {

  eats: true

};

const rabbit = Object.create(animal);

console.log(rabbit.eats); // true


// ==================== getPrototypeOf() ====================

// Gets the [[Prototype]] of an object.

console.log(
  Object.getPrototypeOf(rabbit) === animal
);

// true


// ==================== setPrototypeOf() ====================

// Changes the [[Prototype]] of an existing object.

const dog = {

  barks: true

};

Object.setPrototypeOf(dog, animal);

console.log(dog.eats); // true


// ==================== Object.create() + Descriptors ====================

// Object.create() can also define properties
// using property descriptors.

const cat = Object.create(animal, {

  jumps: {

    value: true

  }

});

console.log(cat.eats);  // true
console.log(cat.jumps); // true


// ==================== Object.create(null) ====================

// Creates an object with no prototype.
//
// Object → null

const dictionary = Object.create(null);

dictionary.name = "Misaq";

console.log(dictionary.name); // Misaq


// No Object.prototype methods are inherited.

console.log(dictionary.toString);
// undefined


// ==================== __proto__ ====================

// __proto__ is an older way to access/set
// an object's [[Prototype]].
//
// Prefer modern methods:
//
// Object.getPrototypeOf()
// Object.setPrototypeOf()
//
// However, this syntax is valid when creating
// an object:
//
// { __proto__: animal }


// ==================== Prototype Chain ====================

// Example:
//
// rabbit
//   ↓
// animal
//   ↓
// Object.prototype
//   ↓
// null


// ==================== Important Performance Note ====================

// Avoid changing the prototype of an existing object
// frequently with Object.setPrototypeOf().
//
// It can hurt JavaScript engine optimizations.
//
// Prefer setting the prototype when creating the object.


// ==================== Summary ====================

// Object.create(proto)
// → Creates an object with a specific prototype.

// Object.getPrototypeOf(obj)
// → Gets the [[Prototype]].

// Object.setPrototypeOf(obj, proto)
// → Changes the [[Prototype]].

// Object.create(null)
// → Creates an object without a prototype.

// __proto__
// → Older way to access/set [[Prototype]].

// Modern approach
// → Prefer getPrototypeOf / setPrototypeOf / create.

