// ==================== Map & Set ====================

// Map مجموعه‌ای از key/value است.
// برخلاف Object، key می‌تواند هر نوع داده‌ای باشد.

const map = new Map();

map.set("name", "Misaq");
map.set("age", 20);

console.log(map.get("name")); // Misaq
console.log(map.has("age"));  // true
console.log(map.size);        // 2

map.delete("age");
map.clear();

// متدهای اصلی Map:
// set(key, value) → اضافه یا تغییر مقدار
// get(key)        → دریافت مقدار
// has(key)        → بررسی وجود key
// delete(key)     → حذف یک key
// clear()         → حذف همه
// size            → تعداد آیتم‌ها

// Map iterable است و می‌توان با for...of روی آن پیمایش کرد.

const users = new Map([
    ["Ali", 20],
    ["Sara", 25]
]);

for (const [name, age] of users) {
    console.log(name, age);
}


// ==================== Set ====================

// Set مجموعه‌ای از valueهای یکتا است.
// مقدار تکراری فقط یک بار ذخیره می‌شود.

const set = new Set();

set.add("Apple");
set.add("Banana");
set.add("Apple");

console.log(set);
// Set(2) {"Apple", "Banana"}

console.log(set.has("Apple")); // true
console.log(set.size);         // 2

// متدهای اصلی Set:
// add(value)    → اضافه کردن
// has(value)    → بررسی وجود
// delete(value) → حذف
// clear()       → حذف همه
// size          → تعداد مقادیر

// یکی از کاربردهای رایج Set حذف مقادیر تکراری از Array است.

const numbers = [1, 2, 2, 3, 3, 4];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
// [1, 2, 3, 4]

// Map → key/value
// Set → valueهای یکتا
// هر دو Iterable هستند و با for...of قابل پیمایش‌اند.

