// ==================== new Function ====================

// JavaScript provides another way to create functions
// using the Function constructor.

// It is rarely used in normal application code.
// It is mainly useful when the function code
// needs to be created dynamically at runtime.


// ==================== Basic Syntax ====================

// The basic syntax is:
//
// new Function([arg1, arg2, ...argN], functionBody);


// The arguments and function body are provided as strings.

const sum = new Function(
  "a",
  "b",
  "return a + b"
);

console.log(sum(1, 2)); // 3


// A function can also be created without parameters.

const sayHi = new Function(
  'console.log("Hello")'
);

sayHi(); // Hello


// ==================== Dynamic Function Creation ====================

// The main difference is that the function body
// can be created from a string at runtime.

const code = "return a + b";

const dynamicSum = new Function(
  "a",
  "b",
  code
);

console.log(dynamicSum(10, 20)); // 30


// This can be useful when the function code
// is not known when the main script is written.


// ==================== Closure ====================

// Regular functions remember the lexical environment
// where they were created.

function getFunc() {
  let value = "test";

  return function () {
    console.log(value);
  };
}

const regularFunc = getFunc();

regularFunc(); // test


// The returned function can access "value"
// because it forms a closure with getFunc().


// ==================== new Function and Closure ====================

// A function created with new Function()
// does not have access to the outer lexical environment.

function getDynamicFunc() {
  let value = "test";

  return new Function(
    "console.log(value)"
  );
}

const dynamicFunc = getDynamicFunc();

// dynamicFunc(); // ReferenceError


// new Function() uses the global lexical environment
// instead of the environment where it was created.


// ==================== Passing Data with Parameters ====================

// If a dynamic function needs external data,
// pass that data through parameters.

const printName = new Function(
  "name",
  "console.log(name)"
);

printName("Ali"); // Ali


// Passing values explicitly is better than
// trying to access outer variables.


// ==================== Why No Outer Variables? ====================

// JavaScript code is often processed by minifiers
// before being sent to production.

// Local variable names can be changed by a minifier.
//
// userName → a
//
// If new Function() could access outer variables,
// dynamically created code could break after minification.

// Passing values through parameters avoids this problem.


// ==================== Different Syntaxes ====================

// These forms are equivalent:

const func1 = new Function(
  "a",
  "b",
  "return a + b"
);

const func2 = new Function(
  "a,b",
  "return a + b"
);

const func3 = new Function(
  "a , b",
  "return a + b"
);

console.log(func1(1, 2)); // 3
console.log(func2(1, 2)); // 3
console.log(func3(1, 2)); // 3


// ==================== Summary ====================

// new Function
// → Creates a function from strings.
// → The function is created at runtime.
// → Rarely used in normal application code.

// Syntax
// → new Function(arg1, arg2, ..., functionBody)

// Closure
// → Regular functions can access their outer lexical environment.

// new Function
// → Does not access the outer lexical environment.
// → Its [[Environment]] references the global environment.

// Passing data
// → Use function parameters instead of outer variables.

// Main use cases
// → Dynamic code generation
// → Dynamic template compilation
// → Specific runtime code-generation scenarios

