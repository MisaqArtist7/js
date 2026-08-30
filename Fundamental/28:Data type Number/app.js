/*
 * ============================================================================
 * 🚀 NUMBERS
 * ============================================================================
 *
 * JavaScript uses the `number` type for integers and floating-point numbers.
 *
 * Numbers are stored using the IEEE-754 double-precision format.
 *
 */


/* ============================================================================
 * 1. NUMBER SYNTAX
 * ============================================================================
 */

// Underscores improve readability.

let billion = 1_000_000_000;


// Exponential notation:

let billion2 = 1e9;   // 1 × 10⁹
let small = 1e-6;    // 0.000001


// Different number systems:

let hex = 0xff;       // 255
let binary = 0b1111;  // 15
let octal = 0o17;     // 15


/* ============================================================================
 * 2. TOSTRING(BASE)
 * ============================================================================
 */

// Convert a number to a string.
// `base` can be from 2 to 36.

let num = 255;

console.log(num.toString(10)); // "255"
console.log(num.toString(16)); // "ff"
console.log(num.toString(2));  // "11111111"


// Parentheses are useful when calling a method directly on a number:

console.log((123).toString(2));


// Another valid syntax:

console.log(123..toString(2));



/* ============================================================================
 * 3. ROUNDING NUMBERS
 * ============================================================================
 */

// Math.floor() → rounds DOWN

console.log(Math.floor(3.7)); // 3


// Math.ceil() → rounds UP

console.log(Math.ceil(3.2)); // 4


// Math.round() → rounds to the nearest integer

console.log(Math.round(3.6)); // 4


// Math.trunc() → removes the decimal part

console.log(Math.trunc(3.7)); // 3


// Quick memory:
//
//     floor → down
//     ceil  → up
//     round → nearest
//     trunc → remove decimal



/* ============================================================================
 * 4. TOFIXED()
 * ============================================================================
 */

// `toFixed()` controls the number of decimal places.
//
// IMPORTANT:
// It returns a STRING.

let price = 12.3456;

console.log(price.toFixed(2));
// "12.35"

console.log(typeof price.toFixed(2));
// "string"


// Convert it back to a number if needed:

let roundedPrice = Number(price.toFixed(2));

console.log(roundedPrice);
// 12.35



/* ============================================================================
 * 5. FLOATING-POINT PRECISION
 * ============================================================================
 */

// JavaScript cannot represent some decimal fractions
// exactly using binary floating-point.

console.log(0.1 + 0.2);
// 0.30000000000000004

console.log(0.1 + 0.2 === 0.3);
// false


// For display purposes:

console.log((0.1 + 0.2).toFixed(2));
// "0.30"



/* ============================================================================
 * 6. NAN AND INFINITY
 * ============================================================================
 */

// `Infinity` represents a value beyond the normal finite range.

console.log(1 / 0);
// Infinity


// `NaN` means "Not a Number".

console.log("hello" / 2);
// NaN


// NaN is special:

console.log(NaN === NaN);
// false


// Use Number.isNaN() to check for NaN:

console.log(Number.isNaN(NaN));
// true



/* ============================================================================
 * 7. NUMBER.ISFINITE()
 * ============================================================================
 */

// Check whether a value is a finite number.

console.log(Number.isFinite(100));
// true

console.log(Number.isFinite(Infinity));
// false

console.log(Number.isFinite("100"));
// false



/* ============================================================================
 * 8. PARSEINT() AND PARSEFLOAT()
 * ============================================================================
 */

// `parseInt()` extracts an integer from a string.

console.log(parseInt("100px"));
// 100

console.log(parseInt("12.5"));
// 12


// `parseFloat()` extracts a floating-point number.

console.log(parseFloat("12.5px"));
// 12.5


// Unlike them, Number() does not ignore extra characters:

console.log(Number("100px"));
// NaN



/* ============================================================================
 * 9. MATH
 * ============================================================================
 */

// The `Math` object provides useful mathematical functions.

console.log(Math.max(10, 20, 30));
// 30

console.log(Math.min(10, 20, 30));
// 10

console.log(Math.pow(2, 3));
// 8

console.log(Math.random());
// Random number between 0 and 1



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - JavaScript uses the `number` type for integers and decimals.
 *
 * - `_` can be used to improve number readability:
 *
 *     1_000_000
 *
 * - Exponential notation:
 *
 *     1e9
 *     1e-6
 *
 * - Number systems:
 *
 *     0x → hexadecimal
 *     0b → binary
 *     0o → octal
 *
 * - `toString(base)` converts a number to a string in another base.
 *
 * - Rounding methods:
 *
 *     Math.floor()
 *     Math.ceil()
 *     Math.round()
 *     Math.trunc()
 *
 * - `toFixed()` controls decimal places but returns a string.
 *
 * - Floating-point calculations can have precision issues.
 *
 * - `NaN` represents an invalid numeric result.
 *
 * - `Infinity` represents an infinite numeric value.
 *
 * - Use:
 *
 *     Number.isNaN()
 *     Number.isFinite()
 *
 *   for reliable checks.
 *
 * - `parseInt()` extracts integers.
 *
 * - `parseFloat()` extracts floating-point numbers.
 *
 * - `Math` provides common mathematical utilities.
 *
 * ============================================================================
 */

