// ==================== var ====================

// var is the older way of declaring variables in JavaScript.
// In modern JavaScript, let and const are usually preferred.


// ==================== Function Scope ====================

// var is function-scoped, not block-scoped.

// A variable declared with var inside a block
// is accessible outside that block.

if (true) {
  var name = "Misaq";
}

console.log(name); // Misaq


// let and const are block-scoped.

if (true) {
  let age = 25;
}

// console.log(age); // ReferenceError


// ==================== Redeclaration ====================

// var allows redeclaring a variable in the same scope.

var x = 10;
var x = 20;

console.log(x); // 20


// let and const do not allow redeclaration
// in the same scope.

// let y = 10;
// let y = 20; // SyntaxError


// ==================== Hoisting ====================

// var declarations are hoisted to the top of their scope.

// The declaration is hoisted,
// but the assignment stays where it was written.

console.log(a); // undefined

var a = 10;


// The code above behaves conceptually like this:

var b;

console.log(b); // undefined

b = 10;


// ==================== var in Loops ====================

// var does not create a new block scope for each loop iteration.

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // 3


// let creates a block-scoped variable.

for (let j = 0; j < 3; j++) {
  console.log(j);
}

// console.log(j); // ReferenceError


// ==================== var in Functions ====================

// var is scoped to the function where it is declared.

function test() {
  var value = 10;

  console.log(value); // 10
}

test();

// console.log(value); // ReferenceError


// A var declared inside a block
// still belongs to the surrounding function scope.

function example() {
  if (true) {
    var message = "Hello";
  }

  console.log(message); // Hello
}

example();


// ==================== Global var ====================

// A var declared in the global scope
// can become a property of the global object
// in classic browser scripts.

var globalName = "Misaq";

console.log(globalName);


// ==================== Closures with var ====================

// var can cause unexpected results in loops
// because there is only one shared variable.

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// Output:
// 3
// 3
// 3


// let creates a new binding for each iteration,
// so each callback remembers its own value.

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// Output:
// 0
// 1
// 2


// ==================== var vs let vs const ====================

// var
// → Function-scoped
// → Can be redeclared
// → Can be reassigned
// → Hoisted and initialized with undefined

// let
// → Block-scoped
// → Cannot be redeclared in the same scope
// → Can be reassigned
// → Hoisted but remains in the Temporal Dead Zone

// const
// → Block-scoped
// → Cannot be redeclared in the same scope
// → Cannot be reassigned
// → Hoisted but remains in the Temporal Dead Zone


// ==================== Summary ====================

// var
// → Older variable declaration
// → Function scope instead of block scope
// → Allows redeclaration
// → Hoisted with an initial value of undefined
// → Can lead to unexpected behavior in loops

// Modern JavaScript usually prefers:
// → const when reassignment is not needed
// → let when reassignment is needed

