// ==================== call, apply & Decorators ====================

// call() and apply() allow us to explicitly set
// the "this" value when calling a function.

// Decorators are functions that modify or extend
// the behavior of another function.


// ==================== this ====================

// The value of "this" depends on how a function is called.

const user = {
  name: "Misaq",

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }
};

user.sayHi(); // Hello, Misaq


// If the method is assigned to another variable,
// the call context is lost.

const fn = user.sayHi;

// fn();
// "this" is no longer the user object.


// ==================== call ====================

// call() allows us to explicitly set "this".

function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person = {
  name: "Ali"
};

sayHello.call(person); // Hello, Ali


// call() can also receive arguments.

function introduce(age, job) {
  console.log(this.name, age, job);
}

introduce.call(person, 25, "Developer");
// Ali 25 Developer


// Syntax:
//
// func.call(thisArg, arg1, arg2, ...);


// ==================== apply ====================

// apply() is similar to call().

// The main difference is how arguments are passed.

introduce.apply(person, [25, "Developer"]);
// Ali 25 Developer


// Syntax:
//
// func.apply(thisArg, [arg1, arg2, ...]);


// call:
// → Arguments are passed separately.

// apply:
// → Arguments are passed as an array.


// ==================== call vs apply ====================

function sum(a, b, c) {
  return a + b + c;
}

console.log(
  sum.call(null, 1, 2, 3)
); // 6

console.log(
  sum.apply(null, [1, 2, 3])
); // 6


// ==================== Math.max with apply ====================

const numbers = [3, 5, 1, 9, 2];

console.log(
  Math.max.apply(null, numbers)
); // 9


// apply() passes the array elements
// as individual arguments:
//
// Math.max.apply(null, [3, 5, 1, 9, 2])
//
// behaves like:
//
// Math.max(3, 5, 1, 9, 2)


// In modern JavaScript, spread syntax is usually simpler.

console.log(Math.max(...numbers)); // 9


// ==================== Decorators ====================

// A decorator is a function that takes another function
// and returns a new function with extended behavior.

// The original function does not need to be modified.

function slow(x) {
  return x * 2;
}


// ==================== Caching Decorator ====================

// The decorator stores previous results
// to avoid repeating the same calculation.

function cachingDecorator(func) {
  const cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = func(x);

    cache.set(x, result);

    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(2)); // 4
console.log(slow(2)); // 4
console.log(slow(3)); // 6


// The second call with the same argument
// can use the cached result.


// ==================== Decorators and Closures ====================

// Decorators commonly use closures.

// The returned function remembers:
// → func
// → cache

// These variables remain accessible
// because of the closure.


// ==================== The this Problem ====================

// A simple decorator can break "this".

const worker = {
  someMethod() {
    return this.name;
  },

  name: "Misaq"
};


function simpleDecorator(func) {
  return function (x) {
    return func(x);
  };
}


// If someMethod depends on "this",
// the simple decorator can lose the original context.


// ==================== Preserving this with call ====================

// call() allows the decorator
// to preserve the original "this".

function decorator(func) {
  return function (x) {
    return func.call(this, x);
  };
}


// When the decorated method is called:

// worker.someMethod()

// "this" inside the wrapper refers to worker.

// Then:
//
// func.call(this, x)
//
// calls the original function
// with the same "this".


// ==================== Preserving this and Arguments ====================

// If the original function accepts multiple arguments,
// use rest parameters and apply().

function wrapper(func) {
  return function (...args) {
    return func.apply(this, args);
  };
}


// This pattern preserves:
// → The original "this"
// → All original arguments


// ==================== Generic Decorator ====================

// A generic decorator can wrap almost any function.

function loggingDecorator(func) {
  return function (...args) {
    console.log("Calling function with:", args);

    const result = func.apply(this, args);

    console.log("Result:", result);

    return result;
  };
}


function multiply(a, b) {
  return a * b;
}

const loggedMultiply = loggingDecorator(multiply);

console.log(
  loggedMultiply(3, 4)
);
// Calling function with: [3, 4]
// Result: 12
// 12


// ==================== Important Pattern ====================

// This is one of the most useful patterns
// when creating function wrappers.

function decoratorExample(func) {
  return function (...args) {
    return func.apply(this, args);
  };
}


// ...args
// → Collects all arguments.

// this
// → Keeps the original calling context.

// apply()
// → Passes the arguments to the original function.


// ==================== Summary ====================

// call()
// → Calls a function immediately.
// → Explicitly sets "this".
// → Arguments are passed separately.

// apply()
// → Calls a function immediately.
// → Explicitly sets "this".
// → Arguments are passed as an array.

// Decorator
// → Takes a function.
// → Returns a new function.
// → Extends or modifies its behavior.

// Closure
// → Allows the decorator to remember
//   the original function and private state.

// Generic wrapper
// → function (...args) {
//     return func.apply(this, args);
//   }

// This pattern preserves:
// → this
// → arguments
// → original function behavior

