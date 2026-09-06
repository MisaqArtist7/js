// ==================== Function Objects ====================

// In JavaScript, functions are objects.

// A function can be:
// → Called as a function
// → Passed around as a value
// → Given custom properties


function sayHi() {
  console.log("Hi");
}

sayHi();


// ==================== name Property ====================

// Every function has a built-in "name" property.

function greet() {
  console.log("Hello");
}

console.log(greet.name); // greet


// JavaScript can often infer the name
// of an unnamed function from its context.

const sayHello = function () {
  console.log("Hello");
};

console.log(sayHello.name); // sayHello


// Object methods also have names.

const user = {
  sayHi() {
    console.log("Hi");
  }
};

console.log(user.sayHi.name); // sayHi


// ==================== length Property ====================

// The "length" property returns the number
// of parameters defined by the function.

function sum(a, b) {}

console.log(sum.length); // 2


// Rest parameters are not counted.

function many(a, b, ...rest) {}

console.log(many.length); // 2


// ==================== Custom Properties ====================

// Functions can have custom properties.

// A function property is different from a local variable.

function counter() {
  counter.count++;
}

counter.count = 0;

counter();
counter();
counter();

console.log(counter.count); // 3


// counter.count is a property of the function.
// It is not the same as a variable named "count".


// ==================== Function Properties vs Closures ====================

// A function property can be used to store state.

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

const counterObject = makeCounter();

console.log(counterObject()); // 0
console.log(counterObject()); // 1
console.log(counterObject()); // 2


// Unlike a closure, the state is accessible from outside.

counterObject.count = 10;

console.log(counterObject()); // 10


// With a closure, the state can remain private.

function makePrivateCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const privateCounter = makePrivateCounter();

console.log(privateCounter()); // 0
console.log(privateCounter()); // 1

// count cannot be accessed directly from outside.


// ==================== Named Function Expression ====================

// A Function Expression can have its own name.

const sayHiAgain = function func(who) {
  console.log(`Hello, ${who}`);
};

sayHiAgain("John");


// "func" is the internal name of the function.
// It is available only inside the function.


// console.log(func); // ReferenceError


// ==================== Self-Reference ====================

// A Named Function Expression can use its internal name
// to reliably call itself.

const welcome = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};

welcome(); // Hello, Guest


// ==================== Why Use NFE? ====================

// Using the outer variable to call the function itself
// can cause problems if that variable changes.

let sayHiUser = function () {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    sayHiUser("Guest");
  }
};


// If the outer variable changes,
// the function may no longer be able to call itself.

// let another = sayHiUser;
// sayHiUser = null;

// another(); // Error


// A Named Function Expression avoids this problem.

let sayHiPerson = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};

let anotherFunction = sayHiPerson;

sayHiPerson = null;

anotherFunction(); // Hello, Guest


// The internal name "func" still refers
// to the current function.


// ==================== Summary ====================

// Functions are objects.

// name
// → The name of the function.

// length
// → The number of parameters defined by the function.
// → Rest parameters are not counted.

// Custom properties
// → Functions can have their own properties.

// Function properties
// → Can be used to store state.
// → The state is accessible from outside.

// Closures
// → Can store private state in an outer variable.

// Named Function Expression (NFE)
// → A Function Expression with an internal name.

// NFE internal name
// → Can be used to reference the function itself.
// → Is available only inside the function.
// → Is useful for reliable self-reference.