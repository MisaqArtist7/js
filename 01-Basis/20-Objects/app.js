/*
 * ============================================================================
 * JAVASCRIPT OBJECTS
 * ============================================================================
 *
 * This section covers the basics of JavaScript objects,
 * properties, methods, and cloning.
 *
 * Objects are used to store keyed collections of various data
 * and more complex entities.
 *
 *
 * ============================================================================
 * CREATING OBJECTS
 * ============================================================================
 *
 * Objects are usually created using the object literal syntax:
 *
 *    let user = {};
 *
 *
 * You can immediately put properties into {...}
 * as "key: value" pairs.
 *
 * Example:
 *
 *    let user = {
 *       name: "John",
 *       age: 30
 *    };
 *
 *
 * ============================================================================
 * ACCESSING PROPERTIES
 * ============================================================================
 *
 * Property values are accessible using the dot notation.
 *
 * Example:
 *
 *    console.log(user.name); // "John"
 *
 *
 * You can add or delete properties at any time.
 *
 * Example:
 *
 *    user.isAdmin = true;
 *    delete user.age;
 *
 *
 * ============================================================================
 * SQUARE BRACKETS
 * ============================================================================
 *
 * For multiword properties, dot notation doesn't work.
 * Instead, use square brackets.
 *
 * Example:
 *
 *    let user = {};
 *    user["likes birds"] = true;
 *
 *
 * Square brackets also allow obtaining the property name
 * from a variable.
 *
 * Example:
 *
 *    let key = "name";
 *    console.log(user[key]); // "John"
 *
 *
 * ============================================================================
 * COMPUTED PROPERTIES
 * ============================================================================
 *
 * We can use square brackets in an object literal
 * to compute the property name dynamically.
 *
 * Example:
 *
 *    let fruit = "apple";
 *
 *    let bag = {
 *       [fruit]: 5 // becomes { apple: 5 }
 *    };
 *
 *
 * ============================================================================
 * PROPERTY VALUE SHORTHAND
 * ============================================================================
 *
 * If the property name and the variable name are the same,
 * you can use the shorthand syntax.
 *
 * Example:
 *
 *    let name = "John";
 *    let age = 30;
 *
 *    let user = {
 *       name, // same as name: name
 *       age   // same as age: age
 *    };
 *
 *
 * ============================================================================
 * PROPERTY EXISTENCE & "IN" OPERATOR
 * ============================================================================
 *
 * Accessing a non-existing property returns `undefined`
 * instead of throwing an error.
 *
 * To explicitly check if a property exists,
 * use the `in` operator.
 *
 * Example:
 *
 *    let user = { age: 30 };
 *
 *    console.log("age" in user);    // true
 *    console.log("name" in user);   // false
 *
 *
 * ============================================================================
 * THE "FOR...IN" LOOP
 * ============================================================================
 *
 * To iterate over all keys of an object,
 * use the `for..in` loop.
 *
 * Example:
 *
 *    let user = {
 *       name: "John",
 *       age: 30,
 *       isAdmin: true
 *    };
 *
 *    for (let key in user) {
 *       console.log(key);        // name, age, isAdmin
 *       console.log(user[key]);  // John, 30, true
 *    }
 *
 *
 *خواهش می‌کنم! برات تمام توضیحات رو به فارسی و با لحنی روان ترجمه کردم و دقیقاً توی همون قالب کامنت چندخطی (Block Comment) قرار دادم تا کدهات به هم نریزه. 

کافیه بلوک زیر رو کپی کنی و مستقیم توی فایل `.js` گیت‌هابت قرار بدی:

```javascript
/*
 * ============================================================================
 * ویژگی‌های خاص جاوا اسکریپت (JAVASCRIPT SPECIALS)
 * ============================================================================
 *
 * این بخش مرور کوتاهی است بر ویژگی‌های جاوا اسکریپت که تا اینجا یاد گرفتیم.
 *
 * تمرکز ما روی قوانین مهم و جزئیات ظریفی است که به خاطر 
 * سپردنشون برای کدنویسی خیلی به کار میاد.
 *
 *
 * ============================================================================
 * ساختار کد (CODE STRUCTURE)
 * ============================================================================
 *
 * دستورات جاوا اسکریپت معمولاً با نقطه ویرگول (;) از هم جدا می‌شن.
 *
 * مثال:
 *
 *    alert("Hello");
 *    alert("World");
 *
 *
 * گاهی اوقات رفتن به خط جدید (Line break) می‌تونه دستورات رو به صورت خودکار جدا کنه.
 *
 * به این رفتار می‌گن:
 *
 *    درج خودکار نقطه ویرگول یا Automatic Semicolon Insertion (ASI)
 *
 *
 * مثال:
 *
 *    alert("Hello")
 *    alert("World")
 *
 *
 * اما ASI همیشه اونطور که انتظار داریم کار نمی‌کنه.
 *
 * به همین دلیل، بیشتر استایل‌گایدهای برنامه‌نویسی توصیه می‌کنن 
 * که همیشه از نقطه ویرگول به صورت صریح استفاده کنید.
 *
 *
 * مهم:
 *
 * بعد از بلاک‌های کد مثل اعلان توابع (Functions) و حلقه‌ها (Loops)، 
 * نیازی به گذاشتن نقطه ویرگول نیست.
 *
 * مثال:
 *
 *    function test() {
 *       // نیازی به نقطه ویرگول نیست
 *    }
 *
 *    for (;;) {
 *       // نیازی به نقطه ویرگول نیست
 *    }
 *
 *
 * ============================================================================
 * حالت سخت‌گیرانه (STRICT MODE)
 * ============================================================================
 *
 * حالت Strict Mode رفتار مدرن‌تر و امن‌تری از جاوا اسکریپت رو فعال می‌کنه.
 *
 * برای فعال کردنش می‌نویسیم:
 *
 *    "use strict";
 *
 *
 * این دستور باید در این مکان‌ها قرار بگیره:
 *
 *    - در بالاترین خط یک اسکریپت
 *    - یا در بالاترین خط داخل بدنه یک تابع
 *
 *
 * مثال:
 *
 *    "use strict";
 *
 *    let name = "John";
 *
 *
 * بعضی از ویژگی‌های مدرن جاوا اسکریپت مثل کلاس‌ها (Classes)،
 * این حالت سخت‌گیرانه رو به صورت خودکار فعال می‌کنن.
 *
 *
 * ============================================================================
 * متغیرها (VARIABLES)
 * ============================================================================
 *
 * برای تعریف متغیرها می‌تونیم از کلمات زیر استفاده کنیم:
 *
 *    let
 *    const
 *    var
 *
 *
 * کلمه `let`:
 *
 *    برای متغیرهایی استفاده می‌شه که مقدارشون ممکنه در آینده تغییر کنه.
 *
 *
 * کلمه `const`:
 *
 *    برای متغیرهایی استفاده می‌شه که مقدارشون ثابته و نباید تغییر کنه.
 *
 *
 * کلمه `var`:
 *
 *    روش قدیمی برای تعریف متغیرهاست.
 *
 *
 * متغیرها در جاوا اسکریپت "نوع پویا" (Dynamically Typed) دارن.
 *
 * یعنی یک متغیر می‌تونه تو طول عمرش، انواع مختلفی از داده‌ها رو تو خودش ذخیره کنه.
 *
 * مثال:
 *
 *    let value = 10;
 *
 *    value = "Hello";
 *
 *
 * ============================================================================
 * انواع داده (DATA TYPES)
 * ============================================================================
 *
 * جاوا اسکریپت ۸ نوع داده داره:
 *
 *    1. number
 *    2. bigint
 *    3. string
 *    4. boolean
 *    5. null
 *    6. undefined
 *    7. object
 *    8. symbol
 *
 *
 * نوع `number`:
 *
 *    نماینده اعداد صحیح و اعشاری.
 *
 *
 * نوع `bigint`:
 *
 *    نماینده اعداد صحیح بسیار بزرگ (بدون محدودیت سایز).
 *
 *
 * نوع `string`:
 *
 *    نماینده متن و رشته‌ها.
 *
 *
 * نوع `boolean`:
 *
 *    نماینده مقادیر منطقی (true یا false).
 *
 *
 * نوع `null`:
 *
 *    نماینده عدم وجود عمدی یک مقدار (خالی بودن).
 *
 *
 * نوع `undefined`:
 *
 *    نماینده متغیری که تعریف شده اما هنوز مقداری بهش اختصاص داده نشده.
 *
 *
 * نوع `object`:
 *
 *    برای ساختارهای داده پیچیده استفاده می‌شه.
 *
 *
 * نوع `symbol`:
 *
 *    برای شناسه‌های یکتا و منحصر‌به‌فرد استفاده می‌شه.
 *
 *
 * ============================================================================
 * عملگر TYPEOF
 * ============================================================================
 *
 * عملگر `typeof` نوع یک مقدار رو برمی‌گردونه.
 *
 * مثال:
 *
 *    typeof 42;          // "number"
 *    typeof "Hello";     // "string"
 *    typeof true;        // "boolean"
 *
 *
 * دو استثنای مهم در اینجا وجود داره:
 *
 *    typeof null === "object"
 *
 * این در واقع یک باگ تاریخی تو زبان جاوا اسکریپته که به همون شکل مونده.
 *
 *
 * و دومی:
 *
 *    typeof function() {} === "function"
 *
 * توابع توسط `typeof` به صورت ویژه و با نام function شناخته می‌شن.
 *
 *
 * ============================================================================
 * تعامل با کاربر (INTERACTION)
 * ============================================================================
 *
 * در محیط مرورگر، جاوا اسکریپت توابع پایه‌ای برای تعامل با کاربر داره.
 *
 *
 * تابع `prompt()`:
 *
 *    از کاربر یک ورودی می‌خواد و مقدار وارد شده رو به صورت string برمی‌گردونه.
 *
 *    اگر کاربر دکمه Cancel رو بزنه، 
 *    مقدار `null` برمی‌گرده.
 *
 *
 * مثال:
 *
 *    let userName = prompt("Your name?", "Alice");
 *
 *
 * تابع `confirm()`:
 *
 *    یک دیالوگ تایید نشون می‌ده و مقدار `true` (تایید) یا `false` (رد) برمی‌گردونه.
 *
 *
 * مثال:
 *
 *    let isConfirmed = confirm("Are you sure?");
 *
 *
 * تابع `alert()`:
 *
 *    یک پیام رو به صورت پاپ‌آپ به کاربر نشون می‌ده.
 *
 *
 * مثال:
 *
 *    alert("Hello");
 *
 *
 * ============================================================================
 * عملگرها (OPERATORS)
 * ============================================================================
 *
 * جاوا اسکریپت گروه‌های مختلفی از عملگرها رو ارائه می‌ده.
 *
 *
 * عملگرهای ریاضی:
 *
 *    +   -   *   /   %   **
 *
 *
 * عملگر `+` می‌تونه برای چسباندن (Concatenate) رشته‌ها هم استفاده بشه.
 *
 * مثال:
 *
 *    "1" + 2; // "12"
 *
 *
 * اگر یکی از عملوندها رشته باشه، 
 * عملوند دیگه هم تبدیل به رشته می‌شه.
 *
 *
 * ============================================================================
 * عملگرهای انتساب (ASSIGNMENT OPERATORS)
 * ============================================================================
 *
 * انتساب ساده:
 *
 *    a = b;
 *
 *
 * انتساب ترکیبی:
 *
 *    a += 2;
 *    a -= 2;
 *    a *= 2;
 *    a /= 2;
 *
 *
 * این عملگرها مقدار فعلی متغیر رو تغییر می‌دن.
 *
 *
 * ============================================================================
 * عملگر شرطی (CONDITIONAL OPERATOR)
 * ============================================================================
 *
 * عملگر شرطی سه‌گانه (Ternary) سه بخش داره:
 *
 *    condition ? valueIfTrue : valueIfFalse
 *
 *
 * مثال:
 *
 *    let age = 20;
 *
 *    let message = age >= 18
 *       ? "Adult"
 *       : "Minor";
 *
 *
 * اگر شرط درست (truthy) باشه، 
 * مقدار اول برمی‌گرده.
 *
 * در غیر این صورت، مقدار دوم برمی‌گرده.
 *
 *
 * ============================================================================
 * عملگرهای منطقی (LOGICAL OPERATORS)
 * ============================================================================
 *
 * AND منطقی:
 *
 *    &&
 *
 *
 * OR منطقی:
 *
 *    ||
 *
 *
 * NOT منطقی:
 *
 *    !
 *
 *
 * عملگرهای `&&` و `||` از روش ارزیابی مدارکوتاه (Short-circuit) استفاده می‌کنن.
 *
 * این عملگرها لزوماً `true` یا `false` برنمی‌گردونن، 
 * بلکه یکی از مقادیر اصلی خودشون رو برمی‌گردونن.
 *
 *
 * مثال:
 *
 *    let result = a || b;
 *
 *
 * عملگر `!` مقدار رو به boolean تبدیل می‌کنه 
 * و سپس متضاد اون مقدار رو برمی‌گردونه.
 *
 *
 * ============================================================================
 * عملگر NULLISH COALESCING
 * ============================================================================
 *
 * این عملگر به شکل زیر نوشته می‌شه:
 *
 *    ??
 *
 *
 * اولین مقداری که `null` یا `undefined` **نباشه** رو برمی‌گردونه.
 *
 *
 * مثال:
 *
 *    let name = userName ?? "Guest";
 *
 *
 * اگر `userName` برابر باشه با:
 *
 *    "John" -> خروجی: "John"
 *
 *
 * اگر `userName` برابر باشه با:
 *
 *    null -> خروجی: "Guest"
 *
 *
 * اگر `userName` برابر باشه با:
 *
 *    undefined -> خروجی: "Guest"
 *
 *
 * ============================================================================
 * مقایسه‌ها (COMPARISONS)
 * ============================================================================
 *
 * برابری ساده (Loose equality):
 *
 *    ==
 *
 *
 * برابری سخت‌گیرانه (Strict equality):
 *
 *    ===
 *
 *
 * عملگر `==` وقتی که نوع داده‌ها متفاوت باشه،
 * سعی می‌کنه نوع اون‌ها رو تبدیل کنه (Type Conversion).
 *
 *
 * مثال:
 *
 *    0 == false; // true
 *
 *
 * اما عملگر `===` هیچ تبدیل نوعی انجام نمی‌ده.
 *
 *
 * مثال:
 *
 *    0 === false; // false
 *
 *
 * به طور کلی پیشنهاد می‌شه همیشه از `===` استفاده کنید
 * تا مقایسه‌ها دقیق و بدون خطای تبدیل نوع باشن.
 *
 *
 * ============================================================================
 * NULL و UNDEFINED
 * ============================================================================
 *
 * مقادیر `null` و `undefined` مقادیر خاصی هستن.
 *
 *
 * در برابری ساده:
 *
 *    null == undefined; // true
 *
 *
 * اما در برابری سخت‌گیرانه:
 *
 *    null === undefined; // false
 *
 *
 * با وجود اینکه تو برابری ساده با هم مساوی هستن،
 * از نظر مفهومی کاربردهای متفاوتی دارن.
 *
 *
 * ============================================================================
 * حلقه‌ها (LOOPS)
 * ============================================================================
 *
 * جاوا اسکریچاکرم! برای اینکه این توضیحات توی گیت‌هاب (مثلاً توی یه فایل `.js` یا README) خیلی حرفه‌ای و تمیز به نظر برسه، فاصله‌های اضافیش رو کم کردم، بخش‌ها رو شماره‌گذاری کردم و مثال‌ها رو به شکل کدهای واقعی (خارج از کامنت) نوشتم تا Syntax Highlighting گیت‌هاب به بهترین شکل روش اعمال بشه. 

کافیه کد زیر رو کپی کنی:

```javascript
/**
 * ============================================================================
 * 🚀 JAVASCRIPT FUNDAMENTALS & CHEAT SHEET
 * ============================================================================
 * This is a brief review of essential JavaScript features, focusing on 
 * important rules and subtle details that are useful to remember.
 */

/* ============================================================================
 * 1. CODE STRUCTURE
 * ============================================================================ */

// JavaScript statements are usually separated by semicolons.
alert("Hello");
alert("World");

// Automatic Semicolon Insertion (ASI) can sometimes separate statements 
// by line breaks, but it doesn't always work as expected.
// Most coding style guides recommend using semicolons explicitly.

// IMPORTANT: Semicolons are NOT required after code blocks like loops or functions.
function test() {
    // no semicolon required
}
for (;;) {
    // no semicolon required
}


/* ============================================================================
 * 2. STRICT MODE
 * ============================================================================ */

// Strict mode enables a more modern and safer JavaScript behavior.
// It must be placed at the top of a script or function body.
"use strict";

let personName = "John";

// Note: Modern features like 'classes' enable strict mode automatically.


/* ============================================================================
 * 3. VARIABLES
 * ============================================================================ */

let age = 25;       // 'let': Used for variables whose value may change.
const pi = 3.14;    // 'const': Used for variables that should NOT be reassigned.
var oldWay = true;  // 'var': The older, legacy way of declaring variables.

// JavaScript variables are dynamically typed (can change type during lifetime).
let dynamicValue = 10;
dynamicValue = "Hello";


/* ============================================================================
 * 4. DATA TYPES
 * ============================================================================ */

// JavaScript has 8 basic data types:
let num = 100;                   // 1. number: Integers and floating-point
let bigNum = 9007199254740991n;  // 2. bigint: Integers of arbitrary size
let str = "Hello";               // 3. string: Text
let isTrue = true;               // 4. boolean: true or false
let emptyValue = null;           // 5. null: Intentional absence of value
let notAssigned;                 // 6. undefined: Value not yet assigned
let user = { name: "Ali" };      // 7. object: Complex data structures
let id = Symbol("id");           // 8. symbol: Unique identifiers


/* ============================================================================
 * 5. TYPEOF OPERATOR
 * ============================================================================ */

// The `typeof` operator returns the type of a value as a string.
typeof 42;          // "number"
typeof "Hello";     // "string"
typeof true;        // "boolean"

// Special Cases (Historical language quirks):
typeof null === "object";            // true (known JS bug/quirk)
typeof function() {} === "function"; // true (functions are treated specially)


/* ============================================================================
 * 6. INTERACTION (Browser Environment)
 * ============================================================================ */

// prompt(): Asks for input, returns string (or null if canceled).
// let userName = prompt("Your name?", "Alice");

// confirm(): Shows confirmation dialog, returns true/false.
// let isConfirmed = confirm("Are you sure?");

// alert(): Displays a message.
// alert("Hello");


/* ============================================================================
 * 7. OPERATORS & MATH
 * ============================================================================ */

// Arithmetic: +  -  *  /  %  **
let mathResult = (10 + 5) * 2; 

// The '+' operator also concatenates strings. 
// If one operand is a string, the other is converted to a string.
"1" + 2; // "12"


/* ============================================================================
 * 8. ASSIGNMENT OPERATORS
 * ============================================================================ */

let a = 10;
let b = 5;

a = b;   // Basic assignment
a += 2;  // Combined assignment (a = a + 2)
a -= 2;
a *= 2;
a /= 2;


/* ============================================================================
 * 9. CONDITIONAL (TERNARY) OPERATOR
 * ============================================================================ */

// Syntax: condition ? valueIfTrue : valueIfFalse
let userAge = 20;
let message = (userAge >= 18) ? "Adult" : "Minor";


/* ============================================================================
 * 10. LOGICAL OPERATORS
 * ============================================================================ */

// && (AND), || (OR), ! (NOT)
// '&&' and '||' use short-circuit evaluation (they return one of their operands).
let result = a || b; 

// '!' converts value to boolean and inverts it.
let isFalse = !true; 


/* ============================================================================
 * 11. NULLISH COALESCING OPERATOR (??)
 * ============================================================================ */

// Returns the first value unless it is `null` or `undefined`.
let guestName = null;
let finalName = guestName ?? "Guest"; // "Guest"


/* ============================================================================
 * 12. COMPARISONS
 * ============================================================================ */

// Loose equality (==): Performs type conversion
0 == false;  // true

// Strict equality (===): No type conversion (Preferred!)
0 === false; // false


/* ============================================================================
 * 13. NULL AND UNDEFINED
 * ============================================================================ */

null == undefined;  // true (loosely equal)
null === undefined; // false (different strict types/concepts)


/* ============================================================================
 * 14. LOOPS & CONTROL FLOW
 * ============================================================================ */

// 1. While loop
let i = 0;
while (i < 3) {
    i++;
}

// 2. Do...while loop
do {
    // executes at least once
} while (false);

// 3. For loop
for (let j = 0; j < 10; j++) {
    if (j === 2) continue; // Skips current iteration
    if (j === 5) break;    // Stops the entire loop
}


/* ============================================================================
 * 15. SWITCH STATEMENT
 * ============================================================================ */

// Replaces multiple 'if' checks using strict equality (===).
let switchVal = 2;

switch (switchVal) {
    case 1:
        console.log("One");
        break; // Prevents continuing to the next case
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other");
}


/* ============================================================================
 * 16. FUNCTIONS & SCOPE
 * ============================================================================ */

// 1. Function Declaration
function sum(a, b) {
    return a + b;
}

// 2. Function Expression
let multiply = function(a, b) {
    return a * b;
};

// 3. Arrow Function
let subtract = (a, b) => a - b;

// Default Parameters: Used if argument is missing
function greet(name = "Guest") {
    return "Hello " + name;
}

// Local Variables: Variables declared inside are only accessible inside.
function localScopeTest() {
    let localMsg = "I am private";
    console.log(localMsg);
}

// Return Value: Every function returns a value. 
// If no explicit 'return', it returns 'undefined'.
function noReturn() {
    let x = 1;
}
console.log(noReturn()); // undefined

/**
 * ============================================================================
 * END OF CHEAT SHEET
 * JavaScript provides many small language features that work together.
 * Understanding these rules makes mastering JavaScript much easier!
 * ============================================================================
 */