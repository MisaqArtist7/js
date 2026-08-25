/*
 * ============================================================================
 * ARROW FUNCTIONS
 * ============================================================================
 *
 * Arrow Functions provide a shorter syntax
 * for writing function expressions.
 *
 * They are especially useful for short functions
 * and callback functions.
 *
 *
 * ============================================================================
 * BASIC SYNTAX
 * ============================================================================
 *
 * A regular function expression:
 *
 *    let sum = function(a, b) {
 *       return a + b;
 *    };
 *
 *
 * The same function using an arrow function:
 *
 *    let sum = (a, b) => a + b;
 *
 *
 * The arrow function syntax is:
 *
 *    (parameters) => expression
 *
 *
 * ============================================================================
 * ARROW FUNCTION WITH MULTIPLE PARAMETERS
 * ============================================================================
 *
 * When a function has multiple parameters,
 * parentheses are required.
 *
 * Example:
 *
 *    let sum = (a, b) => a + b;
 *
 *
 * This means:
 *
 *    a and b -> parameters
 *    =>     -> arrow
 *    a + b  -> returned expression
 *
 *
 * Example:
 *
 *    console.log(sum(2, 3));
 *
 * Output:
 *
 *    5
 *
 *
 * ============================================================================
 * ARROW FUNCTION WITH ONE PARAMETER
 * ============================================================================
 *
 * When there is only one parameter,
 * parentheses can be omitted.
 *
 * Example:
 *
 *    let double = n => n * 2;
 *
 *
 * This is the same as:
 *
 *    let double = (n) => n * 2;
 *
 *
 * Both versions are valid.
 *
 *
 * ============================================================================
 * ARROW FUNCTION WITH NO PARAMETERS
 * ============================================================================
 *
 * When there are no parameters,
 * empty parentheses are required.
 *
 * Example:
 *
 *    let sayHi = () => "Hello";
 *
 *
 * The parentheses cannot be omitted.
 *
 *
 * ============================================================================
 * IMPLICIT RETURN
 * ============================================================================
 *
 * When an arrow function has a single expression
 * without curly braces,
 * the expression is returned automatically.
 *
 * Example:
 *
 *    let sum = (a, b) => a + b;
 *
 *
 * This is similar to:
 *
 *    let sum = function(a, b) {
 *       return a + b;
 *    };
 *
 *
 * The return keyword is not needed
 * when the function body is a single expression.
 *
 *
 * ============================================================================
 * ARROW FUNCTION WITH CURLY BRACES
 * ============================================================================
 *
 * If we use curly braces,
 * the function body becomes a block of statements.
 *
 * Example:
 *
 *    let sum = (a, b) => {
 *       return a + b;
 *    };
 *
 *
 * In this case, return must be written explicitly.
 *
 *
 * ============================================================================
 * IMPORTANT DIFFERENCE WITH {}
 * ============================================================================
 *
 * Without curly braces:
 *
 *    let sum = (a, b) => a + b;
 *
 * The result is returned automatically.
 *
 *
 * With curly braces:
 *
 *    let sum = (a, b) => {
 *       return a + b;
 *    };
 *
 * The return keyword is required.
 *
 *
 * ============================================================================
 * MULTIPLE STATEMENTS
 * ============================================================================
 *
 * Curly braces are useful when
 * the function needs multiple statements.
 *
 * Example:
 *
 *    let calculate = (a, b) => {
 *
 *       let result = a + b;
 *
 *       return result;
 *    };
 *
 *
 * Without curly braces,
 * only a single expression can be used
 * as the function body.
 *
 *
 * ============================================================================
 * ARROW FUNCTIONS AS CALLBACKS
 * ============================================================================
 *
 * Arrow functions are commonly used
 * as callback functions.
 *
 * Example:
 *
 *    setTimeout(() => {
 *       console.log("Hello");
 *    }, 1000);
 *
 *
 * The arrow function is passed to setTimeout()
 * and executed later.
 *
 *
 * ============================================================================
 * SHORT CALLBACK SYNTAX
 * ============================================================================
 *
 * Arrow functions make short callbacks
 * easier to read.
 *
 * Example:
 *
 *    let numbers = [1, 2, 3];
 *
 *    numbers.map(n => n * 2);
 *
 *
 * Here:
 *
 *    n => n * 2
 *
 * is an arrow function passed as a callback.
 *
 *
 * ============================================================================
 * COMPARISON
 * ============================================================================
 *
 * Regular Function Expression:
 *
 *    let sum = function(a, b) {
 *       return a + b;
 *    };
 *
 *
 * Arrow Function:
 *
 *    let sum = (a, b) => a + b;
 *
 *
 * The arrow function is shorter
 * and is commonly used for simple functions.
 *
 *
 * ============================================================================
 * ARROW FUNCTION FORMS
 * ============================================================================
 *
 * No parameters:
 *
 *    () => expression
 *
 *
 * One parameter:
 *
 *    n => expression
 *
 *
 * Multiple parameters:
 *
 *    (a, b) => expression
 *
 *
 * Multiple statements:
 *
 *    (a, b) => {
 *       // statements
 *       return expression;
 *    }
 *
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * Arrow Function:
 *
 *    A shorter syntax for writing functions.
 *
 *
 * Basic syntax:
 *
 *    (parameters) => expression
 *
 *
 * One parameter:
 *
 *    n => expression
 *
 *
 * No parameters:
 *
 *    () => expression
 *
 *
 * Multiple parameters:
 *
 *    (a, b) => expression
 *
 *
 * Implicit return:
 *
 *    (a, b) => a + b
 *
 *
 * Explicit return:
 *
 *    (a, b) => {
 *       return a + b;
 *    }
 *
 *
 * Main idea:
 *
 *    Arrow functions provide a concise way
 *    to write function expressions,
 *    especially for short functions and callbacks.
 *
 *
 * ============================================================================
 */

