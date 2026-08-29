/*
 * ============================================================================
 * 🚀 STRINGS
 * ============================================================================
 *
 * Strings are used to store text in JavaScript.
 *
 * Strings can be written using:
 *
 *     'single quotes'
 *     "double quotes"
 *     `backticks`
 *
 */


/* ============================================================================
 * 1. TEMPLATE LITERALS
 * ============================================================================
 */

// Backticks allow us to embed expressions using ${...}.

let name = "Ali";
let age = 25;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
// My name is Ali and I am 25 years old.


// Backticks also support multiline strings.

let text = `Hello
World`;



/* ============================================================================
 * 2. STRING LENGTH
 * ============================================================================
 */

// `length` is a property, not a method.

let str = "Hello";

console.log(str.length);
// 5

// Use:
//     str.length
//
// NOT:
//     str.length()



/* ============================================================================
 * 3. ACCESSING CHARACTERS
 * ============================================================================
 */

// Index starts from 0.

console.log(str[0]); // H
console.log(str[1]); // e


// `at()` also supports negative indexes.

console.log(str.at(0));  // H
console.log(str.at(-1)); // o
console.log(str.at(-2)); // l



/* ============================================================================
 * 4. STRINGS ARE IMMUTABLE
 * ============================================================================
 */

// You cannot directly change a character in a string.

let word = "Hello";

word[0] = "h";

console.log(word);
// Hello


// Instead, create a new string.

word = "hello";



/* ============================================================================
 * 5. CHANGING CASE
 * ============================================================================
 */

let title = "JavaScript";

console.log(title.toUpperCase());
// JAVASCRIPT

console.log(title.toLowerCase());
// javascript



/* ============================================================================
 * 6. SEARCHING IN A STRING
 * ============================================================================
 */

// `includes()` returns true/false.

let sentence = "Hello JavaScript";

console.log(sentence.includes("JavaScript"));
// true


// `startsWith()` checks the beginning.

console.log(sentence.startsWith("Hello"));
// true


// `endsWith()` checks the end.

console.log(sentence.endsWith("Script"));
// true


// `indexOf()` returns the position of the match.
// Returns -1 if nothing is found.

console.log(sentence.indexOf("JavaScript"));
// 6

console.log(sentence.indexOf("React"));
// -1



/* ============================================================================
 * 7. SLICE()
 * ============================================================================
 */

// `slice(start, end)` returns part of a string.
// `end` is NOT included.

let text2 = "JavaScript";

console.log(text2.slice(0, 4));
// Java


// Without `end`, it goes to the end.

console.log(text2.slice(4));
// Script


// Negative indexes count from the end.

console.log(text2.slice(-6));
// Script


// For practical use, remember `slice()`.
// `substring()` exists, but `substr()` is deprecated.



/* ============================================================================
 * 8. REPLACE()
 * ============================================================================
 */

// `replace()` replaces the first matching occurrence.

let greeting = "Hello World";

console.log(greeting.replace("World", "Ali"));
// Hello Ali


// `replaceAll()` replaces all occurrences.

let fruits = "apple apple apple";

console.log(fruits.replaceAll("apple", "orange"));
// orange orange orange



/* ============================================================================
 * 9. TRIM()
 * ============================================================================
 */

// `trim()` removes whitespace from both ends.

let username = "   Ali   ";

console.log(username.trim());
// "Ali"


// Also available:
//
//     trimStart()
//     trimEnd()



/* ============================================================================
 * 10. STRING COMPARISON
 * ============================================================================
 */

// Strings are compared character by character.

console.log("apple" < "banana");
// true


// For language-aware comparisons, use `localeCompare()`.

console.log("a".localeCompare("b"));
// negative number



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - Strings can use single quotes, double quotes, or backticks.
 *
 * - Backticks allow:
 *
 *     ${expression}
 *     multiline strings
 *
 * - `length` returns the number of characters.
 *
 * - Access characters with:
 *
 *     str[index]
 *     str.at(index)
 *
 * - Strings are immutable.
 *
 * - Change case with:
 *
 *     toUpperCase()
 *     toLowerCase()
 *
 * - Search with:
 *
 *     includes()
 *     startsWith()
 *     endsWith()
 *     indexOf()
 *
 * - Extract part of a string with:
 *
 *     slice()
 *
 * - Replace text with:
 *
 *     replace()
 *     replaceAll()
 *
 * - Remove surrounding whitespace with:
 *
 *     trim()
 *
 * - Use `localeCompare()` for language-aware string comparison.
 *
 * ============================================================================
 */

