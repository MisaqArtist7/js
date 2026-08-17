/**
 * ============================================================================
 * COMPARISONS
 * ============================================================================
 *
 * Comparison operators compare two values and always return a Boolean:
 *
 *    true
 *    false
 *
 * Comparison operators:
 *
 *    >   Greater than
 *    <   Less than
 *    >=  Greater than or equal
 *    <=  Less than or equal
 *    ==  Equality
 *    !=  Not equal
 *    === Strict equality
 *    !== Strict not equal
 *
 * IMPORTANT:
 *
 *    =  means assignment
 *    == means equality comparison
 *
 * Example:
 *
 *    let x = 5;  // assignment
 *    x == 5;     // comparison
 *
 * ============================================================================
 * BOOLEAN RESULT
 * ============================================================================
 *
 * All comparison operators return true or false.
 *
 * Examples:
 *
 *    2 > 1;  // true
 *    2 == 1; // false
 *    2 != 1; // true
 *
 * A comparison result can also be stored in a variable:
 *
 *    let result = 5 > 4;
 *
 *    // result = true
 *
 * ============================================================================
 * STRING COMPARISON
 * ============================================================================
 *
 * Strings are compared character-by-character in lexicographical order.
 *
 * Examples:
 *
 *    "Z" > "A";        // true
 *    "Glow" > "Glee";  // true
 *    "Bee" > "Be";     // true
 *
 * The comparison starts from the first character.
 *
 * If the characters are equal, JavaScript moves to the next character.
 *
 * Example:
 *
 *    "Glow" > "Glee";
 *
 *    G == G
 *    l == l
 *    o > e
 *
 *    // true
 *
 * If one string ends before the other and all previous characters
 * were equal, the longer string is greater.
 *
 * IMPORTANT:
 *
 * String comparison is case-sensitive.
 *
 *    "a" > "A"; // true
 *
 * ============================================================================
 * COMPARISON OF DIFFERENT TYPES
 * ============================================================================
 *
 * When values of different types are compared, JavaScript may convert
 * them to numbers.
 *
 * Examples:
 *
 *    "2" > 1;    // true
 *    "01" == 1;  // true
 *
 *    // "2" becomes 2
 *    // "01" becomes 1
 *
 * Boolean values are converted to numbers:
 *
 *    true  -> 1
 *    false -> 0
 *
 * Examples:
 *
 *    true == 1;   // true
 *    false == 0;  // true
 *
 * ============================================================================
 * IMPORTANT STRING EXCEPTION
 * ============================================================================
 *
 * When both values are strings, they are compared as strings.
 *
 * Example:
 *
 *    "2" > "12"; // true
 *
 * The first characters are compared:
 *
 *    "2" > "1"
 *
 * Therefore, the result is true.
 *
 * But:
 *
 *    "2" > 12; // false
 *
 * Here the values have different types, so numeric conversion happens:
 *
 *    2 > 12; // false
 *
 * ============================================================================
 * LOOSE EQUALITY ==
 * ============================================================================
 *
 * The == operator checks equality after possible type conversion.
 *
 * Examples:
 *
 *    0 == false; // true
 *    "" == false; // true
 *    "5" == 5;   // true
 *
 * Type conversion can sometimes produce unexpected results.
 *
 * Example:
 *
 *    let a = 0;
 *    let b = "0";
 *
 *    Boolean(a); // false
 *    Boolean(b); // true
 *
 *    a == b; // true
 *
 * The equality check and Boolean conversion follow different rules.
 *
 * ============================================================================
 * STRICT EQUALITY ===
 * ============================================================================
 *
 * The === operator checks equality without type conversion.
 *
 * The values must have the same type and the same value.
 *
 * Examples:
 *
 *    5 === 5;     // true
 *    "5" === 5;   // false
 *    0 === false; // false
 *
 * In the last example:
 *
 *    0     -> Number
 *    false -> Boolean
 *
 * Different types mean the result is false.
 *
 * Strict inequality uses !==:
 *
 *    5 !== 4;     // true
 *    5 !== 5;     // false
 *    "5" !== 5;   // true
 *
 * IMPORTANT:
 *
 *    ==  -> equality with possible type conversion
 *    === -> strict equality without type conversion
 *
 * ============================================================================
 * NULL AND UNDEFINED
 * ============================================================================
 *
 * null and undefined have different types.
 *
 * Therefore:
 *
 *    null === undefined; // false
 *
 * However, == has a special rule:
 *
 *    null == undefined; // true
 *
 * They are equal to each other with ==,
 * but they are not equal to other values.
 *
 * Examples:
 *
 *    null == undefined; // true
 *    null == 0;         // false
 *    null == false;     // false
 *    null == "";        // false
 *
 * ============================================================================
 * NULL WITH MATHEMATICAL COMPARISONS
 * ============================================================================
 *
 * With >, <, >= and <=, null is converted to the number 0.
 *
 * Examples:
 *
 *    null > 0;  // false
 *    null >= 0; // true
 *
 * However, == follows its special null/undefined rule:
 *
 *    null == 0; // false
 *
 * Therefore, these results are possible:
 *
 *    null > 0;  // false
 *    null == 0; // false
 *    null >= 0; // true
 *
 * IMPORTANT:
 *
 * Equality == and mathematical comparisons do not follow the same rules.
 *
 * ============================================================================
 * UNDEFINED AND COMPARISONS
 * ============================================================================
 *
 * undefined should be compared with special care.
 *
 * With mathematical comparisons, undefined becomes NaN.
 *
 *    undefined > 0; // false
 *    undefined < 0; // false
 *
 * NaN returns false for mathematical comparisons.
 *
 * Equality behaves differently:
 *
 *    undefined == 0;      // false
 *    undefined == null;   // true
 *
 * ============================================================================
 * UNARY PLUS WITH COMPARISONS
 * ============================================================================
 *
 * Unary + converts a value to a number before the comparison.
 *
 * Example:
 *
 *    +"\n0\n"; // 0
 *
 * Therefore:
 *
 *    null === +"\n0\n";
 *
 * Becomes:
 *
 *    null === 0;
 *
 * The result is:
 *
 *    false
 *
 * Because null and 0 have different types.
 *
 * ============================================================================
 * IMPORTANT NULL / UNDEFINED RULES
 * ============================================================================
 *
 * Remember these special cases:
 *
 *    null == undefined;  // true
 *
 *    null == 0;          // false
 *    null === 0;         // false
 *
 *    null >= 0;          // true
 *    null > 0;           // false
 *
 *    undefined == null;  // true
 *    undefined == 0;     // false
 *
 * ============================================================================
 * AVOID COMPARISON PROBLEMS
 * ============================================================================
 *
 * Treat comparisons involving null or undefined with special care.
 *
 * Avoid using:
 *
 *    >  <  >=  <=
 *
 * with variables that may contain null or undefined,
 * unless you are sure about the expected behavior.
 *
 * If a variable can contain null or undefined,
 * check for those values separately when necessary.
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * Comparison operators:
 *
 *    >   <   >=   <=
 *    ==  !=
 *    === !==
 *
 * All comparison operators return:
 *
 *    true
 *    false
 *
 * String comparison:
 *
 *    "a" < "b"; // true
 *
 * Strings are compared character-by-character.
 *
 * Different types:
 *
 *    "2" > 1; // true
 *
 * ==:
 *
 *    May perform type conversion.
 *
 * ===:
 *
 *    Does not perform type conversion.
 *
 * null and undefined:
 *
 *    null == undefined;  // true
 *    null === undefined; // false
 *
 * IMPORTANT EXCEPTIONS TO REMEMBER:
 *
 *    "2" > "12";  // true
 *    "2" > 12;    // false
 *
 *    null == 0;   // false
 *    null >= 0;   // true
 *
 *    undefined == null;  // true
 *    undefined == 0;     // false
 *
 * ============================================================================
 */