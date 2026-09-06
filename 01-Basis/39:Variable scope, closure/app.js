// ==================== Closures ====================

// A closure is a function that remembers and can access
// variables from its outer lexical environment.

// Nested functions can access variables from outer functions.

function outer() {
  let name = "Ali";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();


// A closure is created when a function keeps access
// to its outer variables even after the outer function finishes.

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2


// Each call to makeCounter() creates a separate lexical environment.
// Therefore, each counter has its own independent state.

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1


// Closures can be used to create private state.

function createAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createAccount();

account.deposit(100);

console.log(account.getBalance()); // 100
console.log(account.balance);      // undefined


// Multiple functions can share the same outer variable.

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };
}

const counterObject = new Counter();

console.log(counterObject.up());   // 1
console.log(counterObject.up());   // 2
console.log(counterObject.down()); // 1


// Closure is based on where a function is created,
// not where it is called.

let name = "John";

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

const work = makeWorker();

work(); // Pete


// A closure remembers the variable, not an old copy of its value.

let message = "Hello";

function showMessage() {
  console.log(message);
}

message = "Hi";

showMessage(); // Hi


// Closure can also be used for function factories.

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));  // 3
console.log(sum(5)(-1)); // 4


// Summary:
//
// Closure
// → A function that remembers its outer variables.
//
// Lexical Scope
// → Variables are resolved based on where the function is created.
//
// Lexical Environment
// → The environment that stores variables and references outer scopes.
//
// Closure is commonly used for:
// → Private state
// → Function factories
// → Callbacks
// → Data encapsulation

