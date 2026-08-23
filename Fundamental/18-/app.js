/**
 * ============================================================================
 * FUNCTION EXPRESSIONS
 * ============================================================================
 *
 * In JavaScript, a function is a special kind of value.
 *
 * This means that functions can be:
 *
 *    stored in variables
 *    copied to other variables
 *    passed as arguments
 *    returned from other functions
 *    called when needed
 *
 * There are two common ways to create functions:
 *
 *    Function Declaration
 *    Function Expression
 *
 * ============================================================================
 * FUNCTION DECLARATION
 * ============================================================================
 *
 * A Function Declaration is a function
 * declared as a separate statement.
 *
 *
 * Example:
 *
 *    function sayHi() {
 *       console.log("Hello");
 *    }
 *
 *
 * The function has a name:
 *
 *    sayHi
 *
 *
 * It can be called using:
 *
 *    sayHi();
 *
 * ============================================================================
 * FUNCTION EXPRESSION
 * ============================================================================
 *
 * A Function Expression creates a function
 * inside an expression.
 *
 *
 * Example:
 *
 *    let sayHi = function() {
 *       console.log("Hello");
 *    };
 *
 *
 * Here:
 *
 *    function() {
 *       console.log("Hello");
 *    }
 *
 *
 * creates a function,
 * and that function is assigned to the variable:
 *
 *    sayHi
 *
 *
 * Function Expressions usually have no function name.
 *
 *
 * Example:
 *
 *    let sayHi = function() {
 *       console.log("Hello");
 *    };
 *
 *
 * The function above is an anonymous function
 * because it has no name after the function keyword.
 *
 * ============================================================================
 * FUNCTION IS A VALUE
 * ============================================================================
 *
 * A function is a value in JavaScript.
 *
 * This means we can store a function in a variable
 * just like we store strings or numbers.
 *
 *
 * Example:
 *
 *    let number = 10;
 *
 *    let name = "John";
 *
 *    let sayHi = function() {
 *       console.log("Hello");
 *    };
 *
 *
 * Here:
 *
 *    10        -> value
 *    "John"    -> value
 *    function  -> value
 *
 *
 * A function is a special value
 * because it can also be called.
 *
 * ============================================================================
 * FUNCTION NAME VS FUNCTION CALL
 * ============================================================================
 *
 * These two are different:
 *
 *    sayHi
 *
 *    sayHi()
 *
 *
 * sayHi:
 *
 *    Refers to the function itself.
 *
 *
 * sayHi():
 *
 *    Calls / executes the function.
 *
 *
 * Example:
 *
 *    function sayHi() {
 *       return "Hello";
 *    }
 *
 *    let func = sayHi;
 *
 *
 * Here:
 *
 *    func
 *
 * contains the function itself.
 *
 *
 * We can call it:
 *
 *    func();
 *
 *
 * The same function can also be called with:
 *
 *    sayHi();
 *
 * ============================================================================
 * COPYING A FUNCTION
 * ============================================================================
 *
 * Because a function is a value,
 * we can copy it to another variable.
 *
 *
 * Example:
 *
 *    function sayHi() {
 *       console.log("Hello");
 *    }
 *
 *    let func = sayHi;
 *
 *
 * Now both variables refer to the same function.
 *
 *
 * We can call:
 *
 *    sayHi();
 *
 *    func();
 *
 *
 * Both calls execute the same function.
 *
 *
 * Important:
 *
 *    let func = sayHi;
 *
 * copies the function.
 *
 *
 * But:
 *
 *    let func = sayHi();
 *
 * calls the function
 * and stores its return value in func.
 *
 * ============================================================================
 * SEMICOLON WITH FUNCTION EXPRESSIONS
 * ============================================================================
 *
 * Function Expressions usually end with a semicolon.
 *
 *
 * Example:
 *
 *    let sayHi = function() {
 *       console.log("Hello");
 *    };
 *
 *
 * The semicolon is not part of the function syntax.
 *
 * It belongs to the assignment statement:
 *
 *    let sayHi = ...;
 *
 *
 * This is similar to:
 *
 *    let number = 10;
 *
 *
 * A Function Declaration does not need this semicolon:
 *
 *    function sayHi() {
 *       console.log("Hello");
 *    }
 *
 * ============================================================================
 * CALLBACK FUNCTIONS
 * ============================================================================
 *
 * Because functions are values,
 * we can pass them as arguments to other functions.
 *
 *
 * A function passed to another function
 * to be executed later is called a Callback Function.
 *
 *
 * Example:
 *
 *    function sayHello() {
 *       console.log("Hello");
 *    }
 *
 *    function execute(func) {
 *       func();
 *    }
 *
 *    execute(sayHello);
 *
 *
 * Here:
 *
 *    sayHello
 *
 * is passed to:
 *
 *    execute()
 *
 *
 * Then execute calls:
 *
 *    func();
 *
 *
 * Therefore, sayHello is a callback function.
 *
 * ============================================================================
 * CALLBACK EXAMPLE
 * ============================================================================
 *
 * Example:
 *
 *    function ask(question, yes, no) {
 *
 *       if (confirm(question)) {
 *          yes();
 *       } else {
 *          no();
 *       }
 *    }
 *
 *
 * The parameters are:
 *
 *    question -> question text
 *    yes      -> function for a "Yes" answer
 *    no       -> function for a "No" answer
 *
 *
 * Example callbacks:
 *
 *    function showOk() {
 *       alert("You agreed.");
 *    }
 *
 *    function showCancel() {
 *       alert("You canceled the execution.");
 *    }
 *
 *
 * Usage:
 *
 *    ask("Do you agree?", showOk, showCancel);
 *
 *
 * showOk and showCancel are callback functions.
 *
 * ============================================================================
 * ANONYMOUS CALLBACK FUNCTIONS
 * ============================================================================
 *
 * Callback functions can also be created
 * directly inside a function call.
 *
 *
 * Example:
 *
 *    ask(
 *       "Do you agree?",
 *
 *       function() {
 *          alert("You agreed.");
 *       },
 *
 *       function() {
 *          alert("You canceled the execution.");
 *       }
 *    );
 *
 *
 * These functions have no names,
 * so they are called anonymous functions.
 *
 *
 * They are created only for this particular use.
 *
 * ============================================================================
 * FUNCTION DECLARATION VS FUNCTION EXPRESSION
 * ============================================================================
 *
 * Function Declaration:
 *
 *    function sum(a, b) {
 *       return a + b;
 *    }
 *
 *
 * Function Expression:
 *
 *    let sum = function(a, b) {
 *       return a + b;
 *    };
 *
 *
 * The main difference is how and when
 * the function becomes available.
 *
 * ============================================================================
 * FUNCTION DECLARATION HOISTING
 * ============================================================================
 *
 * A Function Declaration can be called
 * before its definition in the code.
 *
 *
 * Example:
 *
 *    sayHi("John");
 *
 *    function sayHi(name) {
 *       console.log(`Hello, ${name}`);
 *    }
 *
 *
 * This works.
 *
 *
 * Function Declarations are initialized
 * before the code starts executing.
 *
 *
 * This behavior is commonly referred to as hoisting.
 *
 * ============================================================================
 * FUNCTION EXPRESSION AND EXECUTION ORDER
 * ============================================================================
 *
 * A Function Expression is created
 * when execution reaches the assignment.
 *
 *
 * Example:
 *
 *    sayHi("John");
 *
 *    let sayHi = function(name) {
 *       console.log(`Hello, ${name}`);
 *    };
 *
 *
 * This causes an error.
 *
 *
 * The function has not been assigned to sayHi
 * when the first line is executed.
 *
 *
 * Simple rule:
 *
 *    Function Declaration
 *       -> can be called before its definition
 *
 *
 *    Function Expression
 *       -> use it after the assignment is reached
 *
 * ============================================================================
 * FUNCTION DECLARATION INSIDE A BLOCK
 * ============================================================================
 *
 * In strict mode, a Function Declaration
 * inside a block has block scope.
 *
 *
 * Example:
 *
 *    if (age < 18) {
 *
 *       function welcome() {
 *          alert("Hello!");
 *       }
 *
 *       welcome(); // works inside the block
 *    }
 *
 *
 * The function is not available outside
 * the block where it was declared.
 *
 *
 *    welcome(); // Error
 *
 *
 * The block is defined by curly braces:
 *
 *    {
 *       ...
 *    }
 *
 * ============================================================================
 * FUNCTION EXPRESSION WITH BLOCK SCOPE
 * ============================================================================
 *
 * If we need the function outside the if statement,
 * we can declare the variable outside the block.
 *
 *
 * Example:
 *
 *    let age = 18;
 *
 *    let welcome;
 *
 *    if (age < 18) {
 *
 *       welcome = function() {
 *          alert("Hello!");
 *       };
 *
 *    } else {
 *
 *       welcome = function() {
 *          alert("Greetings!");
 *       };
 *
 *    }
 *
 *
 * Now welcome exists outside the if block.
 *
 *
 * We can call it:
 *
 *    welcome();
 *
 *
 * The function stored in welcome
 * depends on the value of age.
 *
 * ============================================================================
 * FUNCTION EXPRESSION WITH TERNARY OPERATOR
 * ============================================================================
 *
 * The previous example can be shortened
 * using the ternary operator.
 *
 *
 * Example:
 *
 *    let age = 18;
 *
 *    let welcome = (age < 18)
 *
 *       ? function() {
 *           alert("Hello!");
 *         }
 *
 *       : function() {
 *           alert("Greetings!");
 *         };
 *
 *
 * If age is less than 18:
 *
 *    welcome -> first function
 *
 *
 * Otherwise:
 *
 *    welcome -> second function
 *
 *
 * Then:
 *
 *    welcome();
 *
 *
 * calls the selected function.
 *
 * ============================================================================
 * FUNCTION AS AN ACTION
 * ============================================================================
 *
 * Regular values such as strings and numbers
 * usually represent data.
 *
 *
 * Example:
 *
 *    let name = "John";
 *
 *    let age = 20;
 *
 *
 * A function can be thought of as
 * a value representing an action.
 *
 *
 * Example:
 *
 *    let sayHi = function() {
 *       console.log("Hello");
 *    };
 *
 *
 * The function can be:
 *
 *    stored
 *    copied
 *    passed
 *    called
 *
 *
 * This is one of the most important ideas
 * behind functions in JavaScript.
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * Function Declaration:
 *
 *    function sayHi() {
 *       // ...
 *    }
 *
 *
 * Function Expression:
 *
 *    let sayHi = function() {
 *       // ...
 *    };
 *
 *
 * Function:
 *
 *    A special kind of value that can be called.
 *
 *
 * Anonymous Function:
 *
 *    A function without a name.
 *
 *
 * Callback:
 *
 *    A function passed to another function
 *    to be called later.
 *
 *
 * sayHi:
 *
 *    Refers to the function.
 *
 *
 * sayHi():
 *
 *    Calls the function.
 *
 *
 * Function Declaration:
 *
 *    Can be called before its definition.
 *
 *
 * Function Expression:
 *
 *    Should be used after the assignment
 *    has been executed.
 *
 *
 * Main idea:
 *
 *    In JavaScript, functions are values.
 *
 *    We can store them,
 *    copy them,
 *    pass them around,
 *    and execute them when needed.
 *
 * ============================================================================
 */