/**
 * ============================================================================
 * TYPE CONVERSION
 * ============================================================================
 *
 * Type conversion means changing a value from one data type to another.
 *
 * JavaScript can perform conversions in two ways:
 *
 * 1. Implicit conversion (automatic)
 *    JavaScript converts values automatically when needed.
 *
 *    "6" / "2"; // 3
 *
 * 2. Explicit conversion (manual)
 *    We explicitly convert a value using functions such as:
 *
 *    String(value);
 *    Number(value);
 *    Boolean(value);
 *
 * ============================================================================
 * STRING CONVERSION
 * ============================================================================
 *
 * Convert a value to a string:
 *
 *    String(value);
 *
 * Examples:
 *
 *    String(true);      // "true"
 *    String(false);     // "false"
 *    String(null);      // "null"
 *    String(undefined); // "undefined"
 *    String(123);       // "123"
 *
 * alert() automatically converts values to strings for display.
 *
 * ============================================================================
 * NUMBER CONVERSION
 * ============================================================================
 *
 * Convert a value to a number:
 *
 *    Number(value);
 *
 * Examples:
 *
 *    Number("123");     // 123
 *    Number("   123 "); // 123
 *    Number("");        // 0
 *    Number("   ");     // 0
 *    Number("123abc");  // NaN
 *
 *    Number(true);      // 1
 *    Number(false);     // 0
 *
 * IMPORTANT:
 *
 *    Number(null);      // 0
 *    Number(undefined); // NaN
 *
 * prompt() returns user input as a string.
 *
 * To convert prompt input to a number:
 *
 *    let age = Number(prompt("How old are you?"));
 *
 * ============================================================================
 * BOOLEAN CONVERSION
 * ============================================================================
 *
 * Convert a value to a boolean:
 *
 *    Boolean(value);
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
 * Examples:
 *
 *    Boolean(0);         // false
 *    Boolean("");        // false
 *    Boolean(null);      // false
 *    Boolean(undefined); // false
 *    Boolean(NaN);       // false
 *
 * All other values are generally TRUTHY.
 *
 * IMPORTANT:
 *
 *    Boolean("0"); // true
 *    Boolean(" "); // true
 *
 * Any non-empty string is true, even "0", "false", or spaces.
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * String(value)  -> Converts to String
 * Number(value)  -> Converts to Number
 * Boolean(value) -> Converts to Boolean
 *
 * IMPORTANT EXCEPTIONS TO REMEMBER:
 *
 * Number(undefined); // NaN
 * Number(null);      // 0
 *
 * Boolean("0");      // true
 * Boolean(" ");      // true
 *
 * 0  -> false
 * "0" -> true
 */