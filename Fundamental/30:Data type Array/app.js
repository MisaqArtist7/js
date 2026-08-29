/*
 * ============================================================================
 * 🚀 ARRAYS
 * ============================================================================
 *
 * Arrays store ordered collections of values.
 *
 * Array indexes start from 0.
 *
 */


/* ============================================================================
 * 1. CREATING AND ACCESSING ARRAYS
 * ============================================================================
 */

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange

// Change an element:

fruits[0] = "Banana";


// `length` returns the number of elements.

console.log(fruits.length);
// 3


// `at()` can use negative indexes.

console.log(fruits.at(-1));
// Plum

console.log(fruits.at(-2));
// Orange



/* ============================================================================
 * 2. ADDING AND REMOVING ELEMENTS
 * ============================================================================
 */

// End of the array:

fruits.push("Lemon"); // Add
fruits.pop();         // Remove


// Beginning of the array:

fruits.unshift("Apple"); // Add
fruits.shift();          // Remove


// `pop()` and `shift()` return the removed element.

let last = fruits.pop();
let first = fruits.shift();



/* ============================================================================
 * 3. SPLICE()
 * ============================================================================
 */

// `splice()` can add, remove or replace elements.
//
//     splice(start, deleteCount, ...items)

let colors = ["Red", "Green", "Blue"];


// Remove:

colors.splice(1, 1);

console.log(colors);
// ["Red", "Blue"]


// Add:

colors.splice(1, 0, "Yellow");

console.log(colors);
// ["Red", "Yellow", "Blue"]


// Replace:

colors.splice(1, 1, "Green");

console.log(colors);
// ["Red", "Green", "Blue"]



/* ============================================================================
 * 4. SLICE()
 * ============================================================================
 */

// `slice()` returns a copy of part of an array.
//
// IMPORTANT:
// It does NOT modify the original array.

let numbers = [1, 2, 3, 4, 5];

let part = numbers.slice(1, 4);

console.log(part);
// [2, 3, 4]

console.log(numbers);
// [1, 2, 3, 4, 5]


// Copy the entire array:

let copy = numbers.slice();



/* ============================================================================
 * 5. CONCAT()
 * ============================================================================
 */

// `concat()` combines arrays and returns a new array.

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);

console.log(result);
// [1, 2, 3, 4]



/* ============================================================================
 * 6. ARRAYS ARE OBJECTS
 * ============================================================================
 */

// Arrays are special objects.

console.log(typeof []);
// "object"


// Use `Array.isArray()` to check if a value is an array.

console.log(Array.isArray([]));
// true

console.log(Array.isArray({}));
// false



/* ============================================================================
 * 7. ARRAYS USE REFERENCES
 * ============================================================================
 */

// Assigning an array copies the reference,
// not the array itself.

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
// [1, 2, 3, 4]

console.log(arr1 === arr2);
// true


// Two separate arrays are NOT equal,
// even if they contain the same values.

// console.log([1, 2] === [1, 2]);
// false



/* ============================================================================
 * 8. LOOPING THROUGH ARRAYS
 * ============================================================================
 */

// Classic `for` loop:

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// `for...of` is useful when we only need the values:

for (let number of numbers) {
    console.log(number);
}


// `for...in` is generally NOT recommended for arrays.
// It is designed for object properties.



/* ============================================================================
 * 9. MULTIDIMENSIONAL ARRAYS
 * ============================================================================
 */

// Arrays can contain other arrays.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]);
// 2



/* ============================================================================
 * 10. JOIN()
 * ============================================================================
 */

// `join()` converts array elements into a string.

let names = ["Ali", "Sara", "Reza"];

console.log(names.join(", "));
// "Ali, Sara, Reza"



/* ============================================================================
 * 11. CLEARING AN ARRAY
 * ============================================================================
 */

// Setting length to 0 removes all elements.

let values = [1, 2, 3];

values.length = 0;

console.log(values);
// []



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - Arrays store ordered collections.
 *
 * - Indexes start from 0.
 *
 * - `length` → number of elements.
 *
 * - `at(-1)` → last element.
 *
 * - `push()` / `pop()` → work with the end.
 *
 * - `unshift()` / `shift()` → work with the beginning.
 *
 * - `splice()` → add, remove or replace elements.
 *
 * - `slice()` → copy part of an array without modifying the original.
 *
 * - `concat()` → combine arrays.
 *
 * - `Array.isArray()` → check if a value is an array.
 *
 * - Arrays are objects and are assigned by reference.
 *
 * - `for...of` → loop through array values.
 *
 * - `join()` → convert array elements into a string.
 *
 * - Arrays can contain other arrays.
 *
 * ============================================================================
 */

