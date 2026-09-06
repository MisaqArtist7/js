// ==================== Destructuring Assignment ====================

// Destructuring برای استخراج مقدارها از Array و Object استفاده می‌شود.

// Array → بر اساس ترتیب
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30


// می‌توان بعضی مقدارها را نادیده گرفت.

const [a, , c] = numbers;

console.log(a); // 10
console.log(c); // 30


// Rest → بقیه‌ی مقدارها را داخل یک Array قرار می‌دهد.

const [x, y, ...rest] = [10, 20, 30, 40];

console.log(rest); // [30, 40]


// Default value → اگر مقدار وجود نداشته باشد استفاده می‌شود.

const [name, age = 18] = ["Ali"];

console.log(age); // 18


// Object → بر اساس نام property

const user = {
    name: "Ali",
    age: 25,
    city: "Berlin"
};

const { name, age, city } = user;

console.log(name); // Ali
console.log(age);  // 25


// می‌توان نام متغیر را تغییر داد.

const { name: userName } = user;

console.log(userName); // Ali


// Rest در Object → بقیه‌ی propertyها را جمع می‌کند.

const { name: currentName, ...otherData } = user;

console.log(otherData);
// { age: 25, city: "Berlin" }


// Destructuring در Function

function showUser({ name, age }) {
    console.log(name, age);
}

showUser(user);


// Destructuring در for...of

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}


// Swap کردن دو متغیر

let firstValue = 10;
let secondValue = 20;

[firstValue, secondValue] = [secondValue, firstValue];


// خلاصه:
//
// Array  → بر اساس ترتیب
// Object → بر اساس نام property
// ...rest → دریافت بقیه‌ی مقدارها
// default → مقدار پیش‌فرض
// rename  → تغییر نام متغیر

