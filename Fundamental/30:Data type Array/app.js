/*
 * ============================================================================
 * 🚀 ARRAYS
 * ============================================================================
 *
 * Arrays are used to store ordered collections of values.
 *
 * Example:
 *
 *     let fruits = ["Apple", "Orange", "Plum"];
 *
 * Array indexes start from 0.
 *
 */


/* ============================================================================
 * 1. CREATING AN ARRAY
 * ============================================================================
 */

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum


// Arrays can contain different types of values.

let mixed = ["Ali", 25, true, { city: "Baku" }];



/* ============================================================================
 * 2. LENGTH
 * ============================================================================
 */

// `length` gives the size of the array.

console.log(fruits.length);
// 3



/* ============================================================================
 * 3. ACCESSING THE LAST ELEMENT
 * ============================================================================
 */

// Traditional way:

console.log(fruits[fruits.length - 1]);
// Plum


// Modern way:

console.log(fruits.at(-1));
// Plum


// `at()` supports negative indexes.

console.log(fruits.at(-2));
// Orange



/* ============================================================================
 * 4. PUSH / POP
 * ============================================================================
 */

// `push()` adds elements to the end.

fruits.push("Lemon");

console.log(fruits);
// ["Apple", "Orange", "Plum", "Lemon"]


// `pop()` removes and returns the last element.

let last = fruits.pop();

console.log(last);
// Lemon

console.log(fruits);
// ["Apple", "Orange", "Plum"]



/* ============================================================================
 * 5. SHIFT / UNSHIFT
 * ============================================================================
 */

// `shift()` removes and returns the first element.

let first = fruits.shift();

console.log(first);
// Apple


// `unshift()` adds elements to the beginning.

fruits.unshift("Banana");

console.log(fruits);
// ["Banana", "Orange", "Plum"]



/* ============================================================================
 * 6. ARRAYS ARE OBJECTS
 * ============================================================================
 */

// Arrays are special objects.
//
// Therefore, assigning an array to another variable
// copies the reference, not the array itself.

let arr1 = [1, 2, 3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
// [1, 2, 3, 4]

console.log(arr1 === arr2);
// true



/* ============================================================================
 * 7. LOOPING THROUGH ARRAYS
 * ============================================================================
 */

// Traditional `for` loop:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Modern `for...of` loop:

for (let fruit of fruits) {
    console.log(fruit);
}


// Avoid `for...in` for arrays.
// It is designed for objects and can iterate over other properties too.



/* ============================================================================
 * 8. MULTIDIMENSIONAL ARRAYS
 * ============================================================================
 */

// An array can contain other arrays.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]);
// 2



/* ============================================================================
 * 9. CLEARING AN ARRAY
 * ============================================================================
 */

// Setting length to 0 removes all elements.

let numbers = [1, 2, 3, 4, 5];

numbers.length = 0;

console.log(numbers);
// []



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - Arrays store ordered collections of values.
 *
 * - Indexes start from 0.
 *
 * - `length` gives the array length.
 *
 * - `at(-1)` gets the last element.
 *
 * - Add/remove from the end:
 *
 *     push()
 *     pop()
 *
 * - Add/remove from the beginning:
 *
 *     unshift()
 *     shift()
 *
 * - Arrays are objects and are copied by reference.
 *
 * - Use `for...of` to loop through array values.
 *
 * - Avoid `for...in` with arrays.
 *
 * - Arrays can contain other arrays.
 *
 * - `arr.length = 0` clears an array.
 *
 * ============================================================================
 */
