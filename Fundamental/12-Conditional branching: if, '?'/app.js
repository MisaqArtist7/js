/**
 * ============================================================================
 * CONDITIONAL BRANCHING
 * ============================================================================
 *
 * Conditional branching allows us to execute different code depending
 * on whether a condition is true or false.
 *
 * JavaScript provides:
 *
 *    if
 *    else
 *    else if
 *    ? (conditional / ternary operator)
 *
 * ============================================================================
 * IF STATEMENT
 * ============================================================================
 *
 * The if statement evaluates a condition.
 *
 * If the condition is truthy, the code inside the block is executed.
 *
 * Syntax:
 *
 *    if (condition) {
 *      // code
 *    }
 *
 * Example:
 *
 *    let age = 20;
 *
 *    if (age >= 18) {
 *      alert("Adult");
 *    }
 *
 * It is recommended to use curly braces {} even when there is only
 * one statement inside the if block.
 *
 * ============================================================================
 * BOOLEAN CONVERSION
 * ============================================================================
 *
 * The condition inside if is converted to a Boolean.
 *
 * FALSY VALUES:
 *
 *    false
 *    0
 *    ""
 *    null
 *    undefined
 *    NaN
 *
 * All other values are generally TRUTHY.
 *
 * Examples:
 *
 *    if (0) {
 *      // does not execute
 *    }
 *
 *    if (1) {
 *      // executes
 *    }
 *
 * IMPORTANT:
 *
 * Any non-empty string is truthy.
 *
 *    if ("0") {
 *      alert("Hello");
 *    }
 *
 *    // "0" is a non-empty string
 *    // Boolean("0") -> true
 *
 * ============================================================================
 * ELSE
 * ============================================================================
 *
 * The else block executes when the if condition is falsy.
 *
 * Example:
 *
 *    let age = 20;
 *
 *    if (age >= 18) {
 *      alert("Adult");
 *    } else {
 *      alert("Not an adult");
 *    }
 *
 * Only one of the two blocks will be executed.
 *
 * ============================================================================
 * ELSE IF
 * ============================================================================
 *
 * Use else if when there are multiple conditions to check.
 *
 * Example:
 *
 *    let age = 20;
 *
 *    if (age < 18) {
 *      alert("Too young");
 *    } else if (age > 18) {
 *      alert("Adult");
 *    } else {
 *      alert("Exactly 18");
 *    }
 *
 * JavaScript checks the conditions from top to bottom.
 *
 * Once a condition is truthy, its block is executed
 * and the remaining conditions are skipped.
 *
 * The final else is optional.
 *
 * ============================================================================
 * CONDITIONAL OPERATOR ?
 * ============================================================================
 *
 * The conditional operator is also called:
 *
 *    Ternary operator
 *    Question mark operator
 *
 * It is used to return one value or another depending on a condition.
 *
 * Syntax:
 *
 *    let result = condition ? value1 : value2;
 *
 * If the condition is truthy:
 *
 *    value1 is returned.
 *
 * If the condition is falsy:
 *
 *    value2 is returned.
 *
 * Example:
 *
 *    let age = 20;
 *
 *    let message = age >= 18 ? "Adult" : "Minor";
 *
 *    // message = "Adult"
 *
 * ============================================================================
 * TERNARY OPERATOR
 * ============================================================================
 *
 * The ternary operator has three operands:
 *
 *    condition
 *    value1
 *    value2
 *
 * Example:
 *
 *    condition ? value1 : value2
 *
 * This is why it is called a "ternary" operator.
 *
 * ============================================================================
 * TERNARY AND BOOLEAN VALUES
 * ============================================================================
 *
 * Sometimes the ternary operator is unnecessary.
 *
 * Example:
 *
 *    let accessAllowed = age > 18 ? true : false;
 *
 * The comparison already returns true or false,
 * so we can simply write:
 *
 *    let accessAllowed = age > 18;
 *
 * IMPORTANT:
 *
 * Do not use the ternary operator when it adds no value.
 *
 * ============================================================================
 * MULTIPLE TERNARY OPERATORS
 * ============================================================================
 *
 * Multiple ? operators can be chained to check several conditions.
 *
 * Example:
 *
 *    let message =
 *      age < 3 ? "Hi, baby!" :
 *      age < 18 ? "Hello!" :
 *      age < 100 ? "Greetings!" :
 *      "What an unusual age!";
 *
 * JavaScript checks the conditions from top to bottom.
 *
 * The first truthy condition determines the returned value.
 *
 * The same logic can be written using if / else if / else:
 *
 *    if (age < 3) {
 *      message = "Hi, baby!";
 *    } else if (age < 18) {
 *      message = "Hello!";
 *    } else if (age < 100) {
 *      message = "Greetings!";
 *    } else {
 *      message = "What an unusual age!";
 *    }
 *
 * ============================================================================
 * IF VS TERNARY
 * ============================================================================
 *
 * Use if when you need to execute different blocks of code.
 *
 * Example:
 *
 *    if (age >= 18) {
 *      showDashboard();
 *    } else {
 *      showLogin();
 *    }
 *
 * Use ? when you need to choose between values.
 *
 * Example:
 *
 *    let status = age >= 18 ? "Adult" : "Minor";
 *
 * IMPORTANT:
 *
 * The ternary operator should not be used simply as a shorter
 * replacement for if when executing different actions.
 *
 * Prefer:
 *
 *    if (condition) {
 *      // action
 *    } else {
 *      // another action
 *    }
 *
 * Instead of:
 *
 *    condition ? action1() : action2();
 *
 * when the purpose is to execute different blocks of code.
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * if:
 *
 *    if (condition) {
 *      // executes when condition is truthy
 *    }
 *
 * else:
 *
 *    // executes when if condition is falsy
 *
 * else if:
 *
 *    // checks another condition
 *
 * Ternary:
 *
 *    condition ? value1 : value2
 *
 * Boolean conversion:
 *
 *    0         -> false
 *    ""        -> false
 *    null      -> false
 *    undefined -> false
 *    NaN       -> false
 *
 * Non-empty strings are truthy:
 *
 *    "0"       -> true
 *    "false"   -> true
 *    "hello"   -> true
 *
 * IMPORTANT:
 *
 *    if  -> use for executing different code branches
 *    ?   -> use for choosing between values
 *
 * ============================================================================
 */