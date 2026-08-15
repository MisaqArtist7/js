/**
 * ============================================================================
 * DATA TYPES
 * ============================================================================
 *
 * JavaScript is dynamically typed:
 * - Values have types.
 * - Variables are not bound to a single type.
 *
 *   let value = "hello";
 *   value = 123; // OK
 *
 * ----------------------------------------------------------------------------
 * 8 BASIC DATA TYPES
 * ----------------------------------------------------------------------------
 * Primitive types:
 * - number
 * - bigint
 * - string
 * - boolean
 * - null
 * - undefined
 * - symbol
 *
 * Non-primitive:
 * - object
 *
 * ----------------------------------------------------------------------------
 * NUMBER
 * ----------------------------------------------------------------------------
 * - Represents integers and floating-point numbers.
 * - Special numeric values:
 *   - Infinity
 *   - -Infinity
 *   - NaN
 *
 *   1 / 0            // Infinity
 *   "hello" / 2      // NaN
 *
 * - NaN propagates through mathematical operations.
 *
 * ----------------------------------------------------------------------------
 * BIGINT
 * ----------------------------------------------------------------------------
 * - Used for integers larger than the safe integer range of number.
 * - Created by adding n to an integer:
 *
 *   const big = 12345678901234567890n;
 *
 * - number's safe integer range is:
 *   -(2 ** 53 - 1) to (2 ** 53 - 1)
 *
 * ----------------------------------------------------------------------------
 * STRING
 * ----------------------------------------------------------------------------
 * - JavaScript has no separate character type.
 * - A string can contain zero, one, or many characters.
 *
 * - Three quote styles:
 *   "Hello"
 *   'Hello'
 *   `Hello`
 *
 * - Backticks support template literals:
 *
 *   const name = "John";
 *   `Hello, ${name}!`
 *
 * - Expressions inside ${...} are evaluated.
 *
 * ----------------------------------------------------------------------------
 * BOOLEAN
 * ----------------------------------------------------------------------------
 * - Has only two values:
 *   true
 *   false
 *
 * - Commonly used for conditions and comparison results.
 *
 * ----------------------------------------------------------------------------
 * NULL
 * ----------------------------------------------------------------------------
 * - Represents an intentionally empty, unknown, or absent value.
 *
 *   let age = null;
 *
 * ----------------------------------------------------------------------------
 * UNDEFINED
 * ----------------------------------------------------------------------------
 * - Means a value has not been assigned.
 *
 *   let age;
 *   // age === undefined
 *
 * - Prefer null for an intentionally empty/unknown value.
 * - undefined is normally the default value of unassigned variables/properties.
 *
 * ----------------------------------------------------------------------------
 * OBJECT
 * ----------------------------------------------------------------------------
 * - Used for collections of data and more complex entities.
 * - Objects are non-primitive values.
 *
 * ----------------------------------------------------------------------------
 * SYMBOL
 * ----------------------------------------------------------------------------
 * - Used to create unique identifiers.
 *
 * ----------------------------------------------------------------------------
 * TYPEOF
 * ----------------------------------------------------------------------------
 * - typeof is an operator used to check a value's type.
 *
 *   typeof 123        // "number"
 *   typeof "hello"    // "string"
 *   typeof true       // "boolean"
 *   typeof undefined  // "undefined"
 *   typeof 10n        // "bigint"
 *
 * - typeof null returns "object".
 *   This is a historical JavaScript bug kept for compatibility.
 *
 *   typeof null // "object"
 *
 * - typeof a function returns "function".
 *
 * - Both forms work:
 *
 *   typeof value
 *   typeof(value)
 *
 *   typeof is an operator, not a function.
 *
 * QUICK REVIEW:
 * - 8 basic types: 7 primitives + object.
 * - JavaScript is dynamically typed.
 * - null = intentionally empty/unknown.
 * - undefined = not assigned.
 * - string supports interpolation only with backticks.
 * - number has Infinity and NaN as special values.
 * - BigInt handles arbitrarily large integers.
 * - typeof checks the type of a value.
 * - typeof null === "object" is a historical language bug.
 */