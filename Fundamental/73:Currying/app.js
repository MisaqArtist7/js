// ==================== Currying ====================

// Currying → transforms f(a, b, c) into f(a)(b)(c)

// Currying does NOT execute the function immediately
// → It transforms how the function can be called


// ==================== Basic Currying ====================

function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);

curriedSum(1)(2); // 3


// ==================== How It Works ====================

// curriedSum(1)
// → saves 1 in the lexical environment
// → returns another function

// curriedSum(1)(2)
// → receives 2
// → calls sum(1, 2)
// → returns 3


// ==================== Partial Application ====================

// Partial → function with some arguments already fixed

const logNow = log(new Date());

// date is now fixed
// → remaining arguments can be provided later

logNow("INFO", "message");


// ==================== Multiple Partials ====================

const debugNow = logNow("DEBUG");

// date + importance are now fixed

debugNow("message");


// ==================== Currying Benefits ====================

// → Create reusable specialized functions
// → Fix arguments step by step
// → Keep the original function reusable


// ==================== Advanced curry ====================

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}


// ==================== func.length ====================

// func.length → number of declared parameters

function sum(a, b, c) {
  return a + b + c;
}

sum.length; // 3


// ==================== Advanced Usage ====================

// const curriedSum = curry(sum);

curriedSum(1, 2, 3); // 6
curriedSum(1)(2, 3); // 6
curriedSum(1)(2)(3); // 6


// ==================== How Advanced curry Works ====================

// Enough arguments:
// args.length >= func.length
// → execute the original function

// Not enough arguments:
// → return another wrapper
// → save previous arguments
// → wait for more arguments


// ==================== args.concat ====================

// Previous arguments + new arguments

args.concat(args2);

// Example:
// [1].concat([2]) → [1, 2]
// [1, 2].concat([3]) → [1, 2, 3]


// ==================== Important Limitation ====================

// Currying needs a function with a fixed number of parameters

function example(...args) {
  // Cannot determine required argument count this way
}


// ==================== Currying vs Partial ====================

// Currying:
// f(a, b, c)
//     ↓
// f(a)(b)(c)

// Partial Application:
// f(a, b, c)
//     ↓
// Fix some arguments
//     ↓
// Create a new function


// ==================== Mental Model ====================

// Currying → change function calling style
// Partial → fix some arguments
// Closure → remembers previous arguments
// func.length → expected parameter count
// args.concat() → combine old + new arguments


// ==================== Summary ====================

// f(a, b, c) → f(a)(b)(c)
// Currying → transforms a function
// Partial → creates a specialized function
// Arguments can be provided step by step
// Advanced curry can support both normal and curried calls
// Currying works best with fixed-length functions