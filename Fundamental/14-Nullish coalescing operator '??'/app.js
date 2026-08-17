/**
 * ============================================================================
 * NULLISH COALESCING OPERATOR ??
 * ============================================================================
 *
 * The nullish coalescing operator is written as:
 *
 *    ??
 *
 * It is used to provide default values when a value is missing.
 *
 * The operator considers only two values as missing:
 *
 *    null
 *    undefined
 *
 * These values are called "nullish values".
 *
 * ============================================================================
 * HOW ?? WORKS
 * ============================================================================
 *
 * The result of:
 *
 *    a ?? b
 *
 * is:
 *
 *    If a is defined:
 *        return a
 *
 *    If a is null or undefined:
 *        return b
 *
 *
 * In other words:
 *
 *    ?? returns the first defined value.
 *
 *
 * Example:
 *
 *    let user;
 *
 *    console.log(user ?? "Anonymous");
 *
 *    // "Anonymous"
 *
 * Because user is undefined.
 *
 *
 * Example:
 *
 *    let user = "John";
 *
 *    console.log(user ?? "Anonymous");
 *
 *    // "John"
 *
 * Because user already has a value.
 *
 * ============================================================================
 * ?? VS || 
 * ============================================================================
 *
 * The difference between ?? and || is very important.
 *
 *
 * OR operator:
 *
 *    || returns the first TRUTHY value.
 *
 *
 * Nullish coalescing:
 *
 *    ?? returns the first DEFINED value.
 *
 *
 * || considers these values as missing:
 *
 *    false
 *    0
 *    ""
 *    null
 *    undefined
 *
 *
 * ?? considers only:
 *
 *    null
 *    undefined
 *
 * ============================================================================
 * EXAMPLE OF DIFFERENCE
 * ============================================================================
 *
 * Example:
 *
 *    let height = 0;
 *
 *
 * Using OR:
 *
 *    console.log(height || 100);
 *
 *    // 100
 *
 * Because 0 is a falsy value.
 *
 *
 * Using ??:
 *
 *    console.log(height ?? 100);
 *
 *    // 0
 *
 * Because 0 is a valid defined value.
 *
 * ============================================================================
 * USING ?? WITH MULTIPLE VALUES
 * ============================================================================
 *
 * We can chain multiple ?? operators
 * to find the first defined value.
 *
 *
 * Example:
 *
 *    let firstName = null;
 *    let lastName = null;
 *    let nickName = "Supercoder";
 *
 *
 *    console.log(
 *      firstName ?? lastName ?? nickName ?? "Anonymous"
 *    );
 *
 *    // "Supercoder"
 *
 *
 * JavaScript checks values from left to right
 * and returns the first one that is not null/undefined.
 *
 * ============================================================================
 * REWRITING ?? WITH TERNARY
 * ============================================================================
 *
 * The expression:
 *
 *    result = a ?? b;
 *
 * can be written as:
 *
 *    result = (a !== null && a !== undefined)
 *             ? a
 *             : b;
 *
 *
 * This shows that ?? only checks for null and undefined.
 *
 * ============================================================================
 * PRECEDENCE
 * ============================================================================
 *
 * The precedence of ?? is similar to ||.
 *
 * It has lower priority than most operations:
 *
 *    +
 *    *
 *
 * Example:
 *
 *    let area = (height ?? 100) * (width ?? 50);
 *
 *
 * Parentheses are important because
 * mathematical operations run before ??.
 *
 *
 * Without parentheses:
 *
 *    let area = height ?? 100 * width ?? 50;
 *
 * JavaScript reads it incorrectly because
 * multiplication has higher precedence.
 *
 * ============================================================================
 * USING ?? WITH && OR ||
 * ============================================================================
 *
 * JavaScript does not allow mixing:
 *
 *    ??
 *    &&
 *    ||
 *
 * without parentheses.
 *
 *
 * This causes an error:
 *
 *    let x = 1 && 2 ?? 3;
 *
 *    // Syntax Error
 *
 *
 * Correct:
 *
 *    let x = (1 && 2) ?? 3;
 *
 *    // 2
 *
 * ============================================================================
 * COMMON USE CASES
 * ============================================================================
 *
 * Use ?? when you want a default value,
 * but you want to keep valid values like:
 *
 *    0
 *    false
 *    ""
 *
 *
 * Example:
 *
 *    let count = 0;
 *
 *    console.log(count ?? 10);
 *
 *    // 0
 *
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 *    ||  -> first truthy value
 *
 *    ??  -> first defined value
 *
 *
 * || treats:
 *
 *    0
 *    false
 *    ""
 *
 * as missing.
 *
 *
 * ?? keeps them and only replaces:
 *
 *    null
 *    undefined
 *
 *
 * Use:
 *
 *    || 
 *    when you want a fallback for any falsy value.
 *
 *    ??
 *    when you only want a fallback for missing values.
 *
 * ============================================================================
 */