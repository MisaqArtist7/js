// ==================== eval ====================

// eval(code) → executes a string as JavaScript code

let result = eval("2 + 3");

console.log(result); // 5


// ==================== Return Value ====================

// eval() returns the result of the last expression

eval("let x = 10; x * 2"); // 20


// ==================== Current Scope ====================

// eval() can access variables from the current scope

let x = 10;

eval("console.log(x)"); // 10


// ==================== Modify Variables ====================

// eval() can read and modify existing variables

let value = 5;

eval("value = 20");

console.log(value); // 20


// ==================== Strict Mode ====================

// In strict mode, eval has its own lexical environment
// Variables created inside eval don't leak outside

"use strict";

eval(`
  let x = 10;
  var y = 20;
`);

console.log(typeof x); // "undefined"
console.log(typeof y); // "undefined"


// ==================== Security ====================

// Never execute untrusted user input with eval()

eval(userInput); // Dangerous

// eval can execute arbitrary JavaScript code
// → Can cause serious security problems


// ==================== Global eval ====================

// window.eval() → executes code in the global scope

window.eval("console.log('Hello')");


// ==================== new Function ====================

// new Function() → creates a function from strings

const fn = new Function("a", "return a * 2");

fn(5); // 10

// new Function() runs in global scope
// → Cannot access local variables
// → Pass values through function arguments


// ==================== eval vs new Function ====================

// eval("code")
// → Executes code immediately
// → Can access current scope
// → Usually avoid it

// new Function("args", "code")
// → Creates a function
// → Runs in global scope
// → Values should be passed as arguments


// ==================== Main Idea ====================

// eval → String → Executable JavaScript

// eval() is rarely needed in modern JavaScript
// Prefer normal JavaScript features whenever possible


// ==================== Summary ====================

// eval(code) → execute JavaScript from a string
// Returns → result of the last expression
// Can access → current scope
// Can modify → existing variables
// Strict mode → creates its own lexical environment
// Global eval → runs in global scope
// new Function() → creates a function from a string
// Security → never use eval() with untrusted input