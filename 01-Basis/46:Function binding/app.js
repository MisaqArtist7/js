// ==================== Function Binding ====================

// bind() is used to fix the "this" value of a function.

// It returns a new function with a permanently bound "this".


// ==================== Losing this ====================

// When a method is called through an object,
// "this" refers to that object.

const user = {
  name: "Misaq",

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }
};

user.sayHi(); // Hello, Misaq


// When the method is passed separately,
// it can lose its original "this".

const fn = user.sayHi;

// fn();
// "this" is no longer user.


// ==================== bind ====================

// bind() creates a new function
// with a fixed "this" value.

function sayHi() {
  console.log(this.name);
}

const person = {
  name: "Ali"
};

const boundSayHi = sayHi.bind(person);

boundSayHi(); // Ali


// The original function is not executed immediately.

// bind()
// → Creates a new bound function.

// boundSayHi()
// → Executes the bound function.


// ==================== bind vs call ====================

// call() executes the function immediately.

sayHi.call(person); // Ali


// bind() creates a new function
// that can be executed later.

const bound = sayHi.bind(person);

bound(); // Ali


// call:
// → Execute now.

// bind:
// → Create a new function for later use.


// ==================== bind with Methods ====================

const user2 = {
  name: "John",

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }
};


// Bind the method to the object.

const sayHiUser = user2.sayHi.bind(user2);

sayHiUser(); // Hello, John


// The bound function can be passed anywhere.

setTimeout(sayHiUser, 1000);


// Even if the original variable changes,
// the bound function keeps the original object.


// ==================== bind and Arguments ====================

// bind() can also fix the first arguments
// of a function.

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(3)); // 6
console.log(double(4)); // 8
console.log(double(5)); // 10


// This is equivalent to:
//
// multiply(2, 3)
// multiply(2, 4)
// multiply(2, 5)


// ==================== Partial Application ====================

// Fixing some arguments of a function
// creates a partially applied function.

function tripleValue(value) {
  return multiply(3, value);
}


// The same idea can be created with bind.

const triple = multiply.bind(null, 3);

console.log(triple(4)); // 12
console.log(triple(5)); // 15


// Partial application is useful when
// the same argument is needed repeatedly.


// ==================== bind Syntax ====================

// Full syntax:
//
// func.bind(thisArg, arg1, arg2, ...);


// thisArg
// → The value that will become "this".

// arg1, arg2, ...
// → Optional arguments that are fixed in advance.


// ==================== Bound this Cannot Be Changed ====================

function showName() {
  console.log(this.name);
}

const user1 = {
  name: "John"
};

const user3 = {
  name: "Ann"
};

const boundUser = showName.bind(user1);

const anotherBound = boundUser.bind(user3);

anotherBound(); // John


// Once "this" is bound,
// another bind() cannot change it.


// ==================== bind Creates a New Function ====================

function hello() {
  console.log("Hello");
}

hello.test = 5;

const boundHello = hello.bind({});

console.log(boundHello.test); // undefined


// bind() returns a new function object.
// Custom properties of the original function
// are not automatically copied to the bound function.


// ==================== Wrapper vs bind ====================

// A wrapper can also preserve the context.

const account = {
  name: "Misaq",

  sayHi() {
    console.log(this.name);
  }
};

setTimeout(() => {
  account.sayHi();
}, 1000);


// But bind() fixes the object reference
// when the bound function is created.

const boundAccountSayHi = account.sayHi.bind(account);

setTimeout(boundAccountSayHi, 1000);


// ==================== bind vs apply ====================

// apply() executes the function immediately.

function sum(a, b) {
  return a + b;
}

console.log(
  sum.apply(null, [10, 20])
); // 30


// bind() creates a new function.

const addTen = sum.bind(null, 10);

console.log(addTen(20)); // 30


// apply:
// → Execute now.

// bind:
// → Create a new function.


// ==================== Partial Without Binding this ====================

// Native bind() always expects the first argument
// to be the "this" context.

// If we want to fix arguments
// without fixing "this",
// we can create our own partial function.

function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(
      this,
      ...argsBound,
      ...args
    );
  };
}


// Example:

const user4 = {
  name: "John",

  say(time, phrase) {
    console.log(
      `[${time}] ${this.name}: ${phrase}`
    );
  }
};

user4.sayNow = partial(
  user4.say,
  "10:00"
);

user4.sayNow("Hello");

// [10:00] John: Hello


// ==================== Summary ====================

// bind()
// → Creates a new bound function.

// this
// → Can be fixed with bind().

// Arguments
// → Can also be fixed with bind().

// call()
// → Sets "this" and executes immediately.

// apply()
// → Sets "this", passes arguments as an array,
//   and executes immediately.

// bind()
// → Sets "this" and returns a new function.

// Partial Application
// → Fixes some arguments of an existing function.

// Bound Function
// → Keeps its bound "this" value.
// → Cannot be re-bound to another "this".


// ==================== Important Pattern ====================

// When passing an object method as a callback:

const employee = {
  name: "Misaq",

  sayHi() {
    console.log(this.name);
  }
};

const boundEmployeeSayHi =
  employee.sayHi.bind(employee);

setTimeout(boundEmployeeSayHi, 1000);


// The bound function keeps:
// → this = employee
// → The original method
// → The correct context

