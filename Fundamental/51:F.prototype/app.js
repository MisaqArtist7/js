// ==================== Function Prototype ====================

// Every regular function has a "prototype" property.
//
// "prototype" is an object that is used when
// creating objects with "new".

function User(name) {

  this.name = name;

}


// ==================== Prototype Methods ====================

// Methods can be added to the function's prototype.
//
// This allows all created objects to share the same method.

User.prototype.sayHi = function () {

  console.log(`Hi, ${this.name}`);

};


const user1 = new User("Misaq");
const user2 = new User("Ali");

user1.sayHi(); // Hi, Misaq
user2.sayHi(); // Hi, Ali


// ==================== Prototype Chain ====================

// Objects created with "new" get the function's prototype
// as their [[Prototype]].
//
// user1
//   ↓
// User.prototype
//   ↓
// Object.prototype
//   ↓
// null


// ==================== Shared Methods ====================

// "sayHi" exists only once in User.prototype.
//
// user1 and user2 both use the same method.

console.log(user1.sayHi === user2.sayHi);
// true


// ==================== Own vs Prototype ====================

// "name" is an own property of each object.

console.log(user1.hasOwnProperty("name"));
// true

// "sayHi" is inherited from the prototype.

console.log(user1.hasOwnProperty("sayHi"));
// false


// ==================== prototype vs [[Prototype]] ====================

// User.prototype
// → A property of the User function.
//
// user1.[[Prototype]]
// → The internal prototype of user1.
//
// After using "new":
//
// user1.[[Prototype]] === User.prototype

console.log(
  Object.getPrototypeOf(user1) === User.prototype
);

// true


// ==================== Constructor ====================

// Every normal function has a "prototype" object
// with a "constructor" property pointing back
// to the function itself.

console.log(User.prototype.constructor === User);
// true


// ==================== Arrow Functions ====================

// Arrow functions do not have a "prototype" property.

const arrow = () => {};

console.log(arrow.prototype);
// undefined


// ==================== Summary ====================

// function.prototype
// → Object used as the prototype for objects
//   created with "new".
//
// [[Prototype]]
// → Internal link from an object to its prototype.
//
// new User()
// → Creates an object whose [[Prototype]]
//   points to User.prototype.
//
// Prototype methods
// → Shared by all objects created from the constructor.
//
// Own property
// → Belongs directly to the created object.

