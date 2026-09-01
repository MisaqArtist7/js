// ==================== Prototype Inheritance ====================

// Every object can have a prototype.
// If a property is not found in the object,
// JavaScript searches for it in its prototype.

const animal = {

  eats: true

};

const rabbit = {

  jumps: true,

  __proto__: animal

};

console.log(rabbit.eats);  // true
console.log(rabbit.jumps); // true


// ==================== Prototype Chain ====================

// JavaScript searches through the prototype chain
// until it finds the property or reaches null.
//
// rabbit
//   ↓
// animal
//   ↓
// Object.prototype
//   ↓
// null


// ==================== Own Property ====================

// If the property exists directly on the object,
// JavaScript does not search the prototype.

const animal2 = {

  eats: true

};

const rabbit2 = {

  eats: false,

  __proto__: animal2

};

console.log(rabbit2.eats); // false


// ==================== Inherited Methods ====================

// Methods can also be inherited from a prototype.

const animal3 = {

  walk() {

    console.log("Animal walks");

  }

};

const rabbit3 = {

  __proto__: animal3

};

rabbit3.walk(); // Animal walks


// ==================== "this" with Prototypes ====================

// A method can be found in the prototype,
// but "this" refers to the object that called the method.

const animal4 = {

  walk() {

    console.log(this.name);

  }

};

const rabbit4 = {

  name: "Rabbit",

  __proto__: animal4

};

rabbit4.walk(); // Rabbit


// ==================== Reading vs Writing ====================

// Reading searches the prototype chain.

console.log(rabbit.eats);


// Writing normally creates or changes
// a property directly on the object.

rabbit.eats = false;

console.log(rabbit.eats);  // false
console.log(animal.eats);  // true


// ==================== __proto__ ====================

// __proto__ accesses or sets the object's prototype.
//
// Modern methods:
// → Object.getPrototypeOf()
// → Object.setPrototypeOf()


// ==================== Summary ====================

// Prototype
// → Another object used as a fallback for property lookup.

// Prototype Chain
// → The chain of objects searched for a property.

// Inheritance
// → An object can access properties and methods
//   from its prototype.

// Own Property
// → A property that belongs directly to the object.

// Reading
// → Searches the object, then its prototype chain.

// Writing
// → Normally affects the object itself.

// "this"
// → Refers to the object that called the method.

