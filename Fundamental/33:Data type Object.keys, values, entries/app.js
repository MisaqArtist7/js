// ==================== Object.keys / values / entries ====================

// Object.keys() → تمام keyهای Object را به صورت Array برمی‌گرداند.

const user = {
    name: "Ali",
    age: 25,
    city: "Berlin"
};

console.log(Object.keys(user));
// ["name", "age", "city"]


// Object.values() → تمام valueهای Object را برمی‌گرداند.

console.log(Object.values(user));
// ["Ali", 25, "Berlin"]


// Object.entries() → key و value را به صورت [key, value] برمی‌گرداند.

console.log(Object.entries(user));
// [
//   ["name", "Ali"],
//   ["age", 25],
//   ["city", "Berlin"]
// ]

// می‌توان با destructuring روی entries پیمایش کرد.

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}


// Object.entries() می‌تواند Object را به Map تبدیل کند.

const map = new Map(Object.entries(user));

console.log(map.get("name"));
// Ali


// Object.fromEntries() برعکس عمل می‌کند و Map یا entries را به Object تبدیل می‌کند.

const newUser = Object.fromEntries(map);

console.log(newUser);
// { name: "Ali", age: 25, city: "Berlin" }


// خلاصه:
//
// Object.keys(obj)     → [key1, key2, ...]
// Object.values(obj)   → [value1, value2, ...]
// Object.entries(obj)  → [[key1, value1], [key2, value2], ...]
// Object.fromEntries() → تبدیل key/value pairs به Object

