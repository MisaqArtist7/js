/*
 * ============================================================================
 * JAVASCRIPT SPECIALS
 * ============================================================================
 *
 * This chapter is a brief review of the JavaScript features
 * we have learned so far.
 *
 * It focuses on important rules and subtle details
 * that are useful to remember.
 *
 *
 * ============================================================================
 * CODE STRUCTURE
 * ============================================================================
 *
 * JavaScript statements are usually separated by semicolons.
 *
 * Example:
 *
 *    alert("Hello");
 *    alert("World");
 *
 *
 * A line break can sometimes separate statements automatically.
 *
 * This behavior is called:
 *
 *    Automatic Semicolon Insertion (ASI)
 *
 *
 * Example:
 *
 *    alert("Hello")
 *    alert("World")
 *
 *
 * However, ASI does not always work as expected.
 *
 * For this reason, most coding style guides
 * recommend using semicolons explicitly.
 *
 *
 * Important:
 *
 * Semicolons are not required after code blocks
 * such as function declarations and loops.
 *
 * Example:
 *
 *    function test() {
 *       // no semicolon required
 *    }
 *
 *    for (;;) {
 *       // no semicolon required
 *    }
 *
 *
 * ============================================================================
 * STRICT MODE
 * ============================================================================
 *
 * Strict mode enables a more modern and safer
 * JavaScript behavior.
 *
 * It is enabled with:
 *
 *    "use strict";
 *
 *
 * The directive must be placed:
 *
 *    - at the beginning of a script
 *    - or at the beginning of a function body
 *
 *
 * Example:
 *
 *    "use strict";
 *
 *    let name = "John";
 *
 *
 * Some modern JavaScript features,
 * such as classes,
 * enable strict mode automatically.
 *
 *
 * ============================================================================
 * VARIABLES
 * ============================================================================
 *
 * Variables can be declared using:
 *
 *    let
 *    const
 *    var
 *
 *
 * `let`:
 *
 *    Used for variables whose value may change.
 *
 *
 * `const`:
 *
 *    Used for variables that should not be reassigned.
 *
 *
 * `var`:
 *
 *    The older way of declaring variables.
 *
 *
 * JavaScript variables are dynamically typed.
 *
 * This means a variable can store different types of values
 * during its lifetime.
 *
 * Example:
 *
 *    let value = 10;
 *
 *    value = "Hello";
 *
 *
 * ============================================================================
 * DATA TYPES
 * ============================================================================
 *
 * JavaScript has 8 data types:
 *
 *    1. number
 *    2. bigint
 *    3. string
 *    4. boolean
 *    5. null
 *    6. undefined
 *    7. object
 *    8. symbol
 *
 *
 * `number`:
 *
 *    Represents integers and floating-point numbers.
 *
 *
 * `bigint`:
 *
 *    Represents integers of arbitrary size.
 *
 *
 * `string`:
 *
 *    Represents text.
 *
 *
 * `boolean`:
 *
 *    Represents true or false.
 *
 *
 * `null`:
 *
 *    Represents an intentional absence of a value.
 *
 *
 * `undefined`:
 *
 *    Represents a value that has not been assigned.
 *
 *
 * `object`:
 *
 *    Used for complex data structures.
 *
 *
 * `symbol`:
 *
 *    Used for unique identifiers.
 *
 *
 * ============================================================================
 * TYPEOF OPERATOR
 * ============================================================================
 *
 * The `typeof` operator returns the type of a value.
 *
 * Example:
 *
 *    typeof 42;          // "number"
 *    typeof "Hello";     // "string"
 *    typeof true;        // "boolean"
 *
 *
 * There are two important special cases:
 *
 *    typeof null === "object"
 *
 * This is a historical language quirk.
 *
 *
 * And:
 *
 *    typeof function() {} === "function"
 *
 * Functions are treated specially by `typeof`.
 *
 *
 * ============================================================================
 * INTERACTION
 * ============================================================================
 *
 * In the browser, JavaScript provides basic
 * interaction functions.
 *
 *
 * `prompt()`:
 *
 *    Asks the user for input
 *    and returns the entered value as a string.
 *
 *    If the user presses Cancel,
 *    it returns `null`.
 *
 *
 * Example:
 *
 *    let userName = prompt("Your name?", "Alice");
 *
 *
 * `confirm()`:
 *
 *    Shows a confirmation dialog
 *    and returns `true` or `false`.
 *
 *
 * Example:
 *
 *    let isConfirmed = confirm("Are you sure?");
 *
 *
 * `alert()`:
 *
 *    Displays a message to the user.
 *
 *
 * Example:
 *
 *    alert("Hello");
 *
 *
 * ============================================================================
 * OPERATORS
 * ============================================================================
 *
 * JavaScript provides several groups of operators.
 *
 *
 * Arithmetic:
 *
 *    +   -   *   /   %   **
 *
 *
 * The `+` operator can also concatenate strings.
 *
 * Example:
 *
 *    "1" + 2; // "12"
 *
 *
 * If one operand is a string,
 * the other operand may be converted to a string.
 *
 *
 * ============================================================================
 * ASSIGNMENT OPERATORS
 * ============================================================================
 *
 * Basic assignment:
 *
 *    a = b;
 *
 *
 * Combined assignment:
 *
 *    a += 2;
 *    a -= 2;
 *    a *= 2;
 *    a /= 2;
 *
 *
 * These operators modify the existing value.
 *
 *
 * ============================================================================
 * CONDITIONAL OPERATOR
 * ============================================================================
 *
 * The conditional operator has three operands:
 *
 *    condition ? valueIfTrue : valueIfFalse
 *
 *
 * Example:
 *
 *    let age = 20;
 *
 *    let message = age >= 18
 *       ? "Adult"
 *       : "Minor";
 *
 *
 * If the condition is truthy,
 * the first value is returned.
 *
 * Otherwise, the second value is returned.
 *
 *
 * ============================================================================
 * LOGICAL OPERATORS
 * ============================================================================
 *
 * Logical AND:
 *
 *    &&
 *
 *
 * Logical OR:
 *
 *    ||
 *
 *
 * Logical NOT:
 *
 *    !
 *
 *
 * `&&` and `||` use short-circuit evaluation.
 *
 * They do not necessarily return `true` or `false`.
 * They return one of their operands.
 *
 *
 * Example:
 *
 *    let result = a || b;
 *
 *
 * `!` converts the value to boolean
 * and returns the opposite boolean value.
 *
 *
 * ============================================================================
 * NULLISH COALESCING OPERATOR
 * ============================================================================
 *
 * The nullish coalescing operator is:
 *
 *    ??
 *
 *
 * It returns the first value
 * unless that value is `null` or `undefined`.
 *
 *
 * Example:
 *
 *    let name = userName ?? "Guest";
 *
 *
 * If `userName` is:
 *
 *    "John" -> "John"
 *
 *
 * If `userName` is:
 *
 *    null -> "Guest"
 *
 *
 * If `userName` is:
 *
 *    undefined -> "Guest"
 *
 *
 * ============================================================================
 * COMPARISONS
 * ============================================================================
 *
 * Loose equality:
 *
 *    ==
 *
 *
 * Strict equality:
 *
 *    ===
 *
 *
 * `==` performs type conversion
 * when comparing different types.
 *
 *
 * Example:
 *
 *    0 == false; // true
 *
 *
 * `===` does not perform this type conversion.
 *
 *
 * Example:
 *
 *    0 === false; // false
 *
 *
 * In general, `===` is preferred
 * when strict equality is required.
 *
 *
 * ============================================================================
 * NULL AND UNDEFINED
 * ============================================================================
 *
 * `null` and `undefined` are special values.
 *
 *
 * With loose equality:
 *
 *    null == undefined; // true
 *
 *
 * But:
 *
 *    null === undefined; // false
 *
 *
 * They represent different concepts,
 * even though they are loosely equal.
 *
 *
 * ============================================================================
 * LOOPS
 * ============================================================================
 *
 * JavaScript provides three basic loop forms:
 *
 *
 * 1. while
 *
 *    while (condition) {
 *       // ...
 *    }
 *
 *
 * 2. do...while
 *
 *    do {
 *       // ...
 *    } while (condition);
 *
 *
 * 3. for
 *
 *    for (let i = 0; i < 10; i++) {
 *       // ...
 *    }
 *
 *
 * `break`:
 *
 *    Stops the entire loop.
 *
 *
 * `continue`:
 *
 *    Skips the current iteration
 *    and continues with the next one.
 *
 *
 * Labels can be used with `break` and `continue`
 * to control nested loops.
 *
 *
 * ============================================================================
 * SWITCH
 * ============================================================================
 *
 * The `switch` statement can replace
 * multiple `if` checks.
 *
 *
 * Example:
 *
 *    switch (value) {
 *
 *       case 1:
 *          console.log("One");
 *          break;
 *
 *       case 2:
 *          console.log("Two");
 *          break;
 *
 *       default:
 *          console.log("Other");
 *    }
 *
 *
 * `switch` uses strict equality (`===`)
 * when comparing the value with each case.
 *
 *
 * Important:
 *
 *    break
 *
 * prevents execution from continuing
 * into the next case.
 *
 *
 * ============================================================================
 * FUNCTIONS
 * ============================================================================
 *
 * We have learned three common ways
 * to create functions.
 *
 *
 * 1. Function Declaration
 *
 *    function sum(a, b) {
 *       let result = a + b;
 *
 *       return result;
 *    }
 *
 *
 * 2. Function Expression
 *
 *    let sum = function(a, b) {
 *       let result = a + b;
 *
 *       return result;
 *    };
 *
 *
 * 3. Arrow Function
 *
 *    let sum = (a, b) => a + b;
 *
 *
 * ============================================================================
 * FUNCTION LOCAL VARIABLES
 * ============================================================================
 *
 * Variables declared inside a function
 * are local to that function.
 *
 *
 * Example:
 *
 *    function test() {
 *
 *       let message = "Hello";
 *
 *       console.log(message);
 *    }
 *
 *
 * `message` is only accessible inside `test()`.
 *
 *
 * Function parameters are also local variables.
 *
 *
 * ============================================================================
 * DEFAULT PARAMETERS
 * ============================================================================
 *
 * Function parameters can have default values.
 *
 *
 * Example:
 *
 *    function sum(a = 1, b = 2) {
 *
 *       return a + b;
 *    }
 *
 *
 * If an argument is not provided,
 * the default value is used.
 *
 *
 * Example:
 *
 *    sum(); // 3
 *
 *
 * ============================================================================
 * FUNCTION RETURN VALUE
 * ============================================================================
 *
 * Every function returns a value.
 *
 *
 * If there is an explicit `return`,
 * that value is returned.
 *
 *
 * Example:
 *
 *    function sum(a, b) {
 *       return a + b;
 *    }
 *
 *
 * If there is no `return`,
 * the function returns:
 *
 *    undefined
 *
 *
 * Example:
 *
 *    function sayHi() {
 *       console.log("Hello");
 *    }
 *
 *
 *    let result = sayHi();
 *
 *    console.log(result);
 *
 * Output:
 *
 *    Hello
 *    undefined
 *
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * Code Structure:
 *
 *    Statements are usually separated by semicolons.
 *
 *
 * Strict Mode:
 *
 *    "use strict";
 *
 *
 * Variables:
 *
 *    let
 *    const
 *    var
 *
 *
 * Data Types:
 *
 *    number
 *    bigint
 *    string
 *    boolean
 *    null
 *    undefined
 *    object
 *    symbol
 *
 *
 * Operators:
 *
 *    Arithmetic
 *    Assignment
 *    Comparison
 *    Logical
 *    Conditional
 *    Nullish coalescing
 *
 *
 * Loops:
 *
 *    while
 *    do...while
 *    for
 *
 *
 * Control:
 *
 *    break
 *    continue
 *    switch
 *
 *
 * Functions:
 *
 *    Function Declaration
 *    Function Expression
 *    Arrow Function
 *
 *
 * Main idea:
 *
 *    JavaScript provides many small language features
 *    that work together to build programs.
 *
 *    Understanding these rules and subtle behaviors
 *    makes the rest of JavaScript much easier to learn.
 *
 *
 * ============================================================================
 */

