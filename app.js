/// =================== The JavaScript language ================== ///

/// ------------------- JavaScript Fundamentals ------------------- ///
// --- An Introduction to JavaScript ---
// --- Manuals and specifications ---
// --- Code editors ---
// --- Developer console ---
// --- Hello, world! ---
// --- Code structure ---
// --- The modern mode => "use strict" ---
// --- Variables ---
// --- Data types ---
// --- Interaction: alert, prompt, confirm ---
// --- Type Conversions --- 
// --- Basic operators, maths ---
// --- Comparisons ---
// --- Conditional branching: if, '?'
// --- Logical operators ---
// --- Nullish coalescing operator '??' ---
// --- Loops: while and for ---
// --- The "switch" statement ---
// --- Functions ---
// --- Function expressions ---
// --- Arrow functions, the basics ---
// --- JavaScript specials ---

/// ------------------- Code quality ------------------- ///

/// ------------------- Objects: the basics ------------------- ///

/// ------------------- Data types ------------------- ///

/// ------------------- Advanced working with functions ------------------- ///

/// ------------------- Object properties configuration ------------------- ///

/// ------------------- Prototypes, inheritance ------------------- ///

/// ------------------- Classes ------------------- ///

/// ------------------- Error handling, "try..catch" ------------------- ///    

/// ------------------- Promises, async/await ------------------- ///

/// ------------------- Generators, advanced iteration ------------------- ///

/// ------------------- Modules, introduction ------------------- ///

/// ------------------- Miscellaneous ------------------- ///

/// =================== Browser: Document, Events, Interfaces ================== ///


/// =================== Additional articles ================= ///

// const age = prompt("What is your age?");
// Number(age) // Implict and Explicit type conversion
// if(age == 21) {
//     alert("Happy 21st Birthday!");
// } else {
//     alert("You are not 21 yet.");
// }

// console.log('7' + '7') // Concatenation
// console.log('7' - '7') // Subtraction
// console.log('7' / '7') // Division
// console.log('7' * '7') // Multiplication
// console.log('7' ** '7') // Exponentiation

// console.log(Number('')) // NaN
// console.log(Number('text')) // NaN
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(true)) // 1
// console.log(Number(false)) // 0
// console.log(Number('123')) // 123 Number

// let age = +'7'; //unary operator/plus
// console.log(typeof age) // number

// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean(""));  // false (چون کاملا خالی است)
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean(0)) // false

// console.log(0 + 1 + '7') // 17
// console.log(0 + 1 - '7') // -6  
// console.log(true + false) // 1
// console.log('2' / 6) // 0.3333333333333333
// console.log(null + 1) // 1
// console.log(undefined + 1) // NaN
// console.log(3 + 4 / '2') // 5


// console.log(2 + 2 + "1"); // 41
// console.log("2" + 2 + "1" + 2 + 2); // 22122

// let a, b, c;
// a = b = c = 2 + 2; // تمام متغیرها مقدار 4 می‌گیرند

// let x = 3 - (a = 2); // a برابر 2 می‌شود، و x می‌شود: 3 - 2 = 1

// let n = 2;
// n += 5; // دقیقا معادل n = n + 5 (می‌شود 7)
// n *= 2; // دقیقا معادل n = n * 2 (می‌شود 14)

// console.log(++5) // Error: Invalid left-hand side expression in prefix operation
// let num = 5;
// console.log(++num) // 6
// console.log(num) // 6

// let counter1 = 1;
// let a = ++counter1; // Prefix
// console.log(a) // 2
// console.log(counter1) // 2

// let counter2 = 1;
// let b = counter2++;  // Postfix
// console.log(b) // 1
// console.log(counter2) // 2

// let a = (1 + 2, 3 + 4); 
// alert(a); // 7

// let x = (a = 1 + 2, b = 3 + 4, a + b);
// alert(x); // 10

// تمام عملگرهای مقایسه‌ای (>, <, >=, <=, ==, !=, ===, !==) فقط یک خروجی دارند: true یا false.
// alert(2 > 1);  // true
// alert(2 == 1); // false
// alert(2 != 1); // true
// جاوااسکریپت برای مقایسه دو متن، از ترتیب الفبایی / یونیکد (Lexicographical order) استفاده می‌کند؛ یعنی کاراکتر به کاراکتر از چپ به راست آن‌ها را با هم مقایسه می‌کند:
// alert('Z' > 'A');     // true
// alert('Glow' > 'Glee'); // true (Gl یکسان است، اما o از e بزرگتر است)