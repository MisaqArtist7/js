// ==================== Rest Parameters & Spread Syntax ====================

// Rest parameters collect multiple arguments into an Array.

function sum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum(1, 2, 3, 4));
// 10


// Regular parameters can be used before the rest parameter.
// Rest parameter must always be the last parameter.

function showUser(name, age, ...skills) {
    console.log(name);
    console.log(age);
    console.log(skills);
}

showUser("Ali", 25, "JavaScript", "React", "CSS");
// Ali
// 25
// ["JavaScript", "React", "CSS"]


// ==================== Spread Syntax ====================

// Spread expands the elements of an iterable.

const numbers = [1, 2, 3];

console.log(...numbers);
// 1 2 3


// Spread can pass Array elements as separate arguments.

const values = [3, 7, 2];

console.log(Math.max(...values));
// 7


// Spread can create a shallow copy of an Array.

const original = [1, 2, 3];

const copy = [...original];


// Spread can combine Arrays.

const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];

console.log(combined);
// [1, 2, 3, 4]


// Spread can also be used with Objects.

const user = {
  name: "Ali",
  age: 25
};

const userCopy = {
  ...user
};


// Objects can be combined using Spread.

const details = {
  city: "Berlin",
  job: "Developer"
};

const fullUser = {
  ...user,
  ...details
};


// If properties have the same key,
// the later value overwrites the previous one.

const updatedUser = {
  ...user,
  age: 30
};


// Strings are iterable, so Spread can convert them into an Array.

const text = "Hello";

const chars = [...text];

console.log(chars);
// ["H", "e", "l", "l", "o"]


// Set is also iterable and can be converted into an Array.

const set = new Set([1, 2, 3]);

const array = [...set];


// Rest vs Spread:
//
// Rest   → collects values
// Spread → expands values
//
// Rest:
// function sum(...numbers) {}
//
// Spread:
// sum(...numbers)

