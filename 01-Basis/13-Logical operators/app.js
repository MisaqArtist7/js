/**
 * ============================================================================
 * LOGICAL OPERATORS
 * ============================================================================
 *
 * JavaScript provides three main logical operators:
 *
 *    ||  (OR)
 *    &&  (AND)
 *    !   (NOT)
 *
 * Logical operators can be used with values of any type,
 * not only boolean values.
 *
 * Their result can also be any type of value.
 *
 * ============================================================================
 * TRUTHY AND FALSY VALUES
 * ============================================================================
 *
 * Logical operators internally convert values to Boolean
 * when checking conditions.
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
 * Everything else is generally TRUTHY.
 *
 * Examples:
 *
 *    Boolean(0);        // false
 *    Boolean("hello");  // true
 *
 * ============================================================================
 * OR OPERATOR ||
 * ============================================================================
 *
 * The OR operator returns true if at least one condition is true.
 *
 * Example:
 *
 *    true || false; // true
 *
 *
 * In JavaScript, || does more than boolean comparison.
 *
 * It returns the first TRUTHY value.
 *
 *
 * Algorithm:
 *
 *    1. Evaluate values from left to right.
 *    2. Convert each value to Boolean.
 *    3. Stop when a truthy value is found.
 *    4. Return the original value.
 *
 *
 * Examples:
 *
 *    console.log(1 || 0);
 *    // 1
 *
 *    console.log(null || "User");
 *    // "User"
 *
 *    console.log(null || 0 || false);
 *    // false (last value because all are falsy)
 *
 * ============================================================================
 * OR SHORT-CIRCUIT EVALUATION
 * ============================================================================
 *
 * OR stops evaluating once it finds a truthy value.
 *
 * Example:
 *
 *    true || alert("Hello");
 *
 * The alert will NOT run because the first value is already true.
 *
 *
 * Common usage:
 *
 *    let username = input || "Guest";
 *
 * If input is empty or falsy,
 * "Guest" will be used as the default value.
 *
 * ============================================================================
 * AND OPERATOR &&
 * ============================================================================
 *
 * The AND operator returns true only if all conditions are true.
 *
 * Example:
 *
 *    true && true;  // true
 *    true && false; // false
 *
 *
 * In JavaScript, && returns the first FALSY value.
 *
 *
 * Algorithm:
 *
 *    1. Evaluate values from left to right.
 *    2. Convert each value to Boolean.
 *    3. Stop when a falsy value is found.
 *    4. Return the original value.
 *
 *
 * Examples:
 *
 *    console.log(1 && 5);
 *    // 5
 *
 *    console.log("Hello" && 0 && "World");
 *    // 0
 *
 *    console.log(1 && 2 && null && 3);
 *    // null
 *
 * ============================================================================
 * AND SHORT-CIRCUIT EVALUATION
 * ============================================================================
 *
 * AND stops evaluating when it finds a falsy value.
 *
 * Example:
 *
 *    false && alert("Hello");
 *
 * The alert will NOT run.
 *
 *
 * Common usage:
 *
 *    isLoggedIn && showProfile();
 *
 * The function runs only if isLoggedIn is truthy.
 *
 * ============================================================================
 * DIFFERENCE BETWEEN || AND &&
 * ============================================================================
 *
 * || finds:
 *
 *    The first truthy value.
 *
 * Example:
 *
 *    0 || "" || "JavaScript";
 *
 *    // "JavaScript"
 *
 *
 * && finds:
 *
 *    The first falsy value.
 *
 * Example:
 *
 *    "User" && true && null;
 *
 *    // null
 *
 * ============================================================================
 * OPERATOR PRECEDENCE
 * ============================================================================
 *
 * AND (&&) has higher priority than OR (||).
 *
 * Example:
 *
 *    a || b && c
 *
 * Means:
 *
 *    a || (b && c)
 *
 * ============================================================================
 * NOT OPERATOR !
 * ============================================================================
 *
 * The NOT operator reverses a Boolean value.
 *
 * Example:
 *
 *    !true;  // false
 *    !false; // true
 *
 *
 * Steps:
 *
 *    1. Convert value to Boolean.
 *    2. Return the opposite value.
 *
 *
 * Examples:
 *
 *    !"hello";
 *    // false
 *
 *    !0;
 *    // true
 *
 * ============================================================================
 * DOUBLE NOT !!
 * ============================================================================
 *
 * Double NOT is used to convert a value into Boolean.
 *
 * Example:
 *
 *    !!"Hello";
 *    // true
 *
 *    !!0;
 *    // false
 *
 *
 * It is the shorter version of:
 *
 *    Boolean(value);
 *
 * ============================================================================
 * COMMON RULES TO REMEMBER
 * ============================================================================
 *
 *    ||  -> first truthy value
 *
 *    &&  -> first falsy value
 *
 *    !   -> reverse boolean value
 *
 *
 * Use:
 *
 *    if
 *    when you want to execute different code blocks.
 *
 *    ||
 *    when you want fallback values.
 *
 *    &&
 *    when an action depends on a condition.
 *
 * ============================================================================
 */