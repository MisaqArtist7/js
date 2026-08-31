// ==================== JSON ====================

// JSON (JavaScript Object Notation) یک فرمت متنی برای
// ذخیره و انتقال داده است.

// JSON.stringify() → JavaScript value → JSON string

const user = {
  name: "Ali",
  age: 25,
  isAdmin: true
};

const json = JSON.stringify(user);

console.log(json);
// {"name":"Ali","age":25,"isAdmin":true}

console.log(typeof json);
// string


// JSON.parse() → JSON string → JavaScript value

const parsedUser = JSON.parse(json);

console.log(parsedUser);
// { name: "Ali", age: 25, isAdmin: true }

console.log(parsedUser.name);
// Ali


// JSON از string, number, boolean, null, object و array پشتیبانی می‌کند.

console.log(JSON.stringify("Hello"));
console.log(JSON.stringify(25));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify([1, 2, 3]));


// Function, Symbol و undefined قابل تبدیل به JSON نیستند.

const data = {
  name: "Ali",
  age: undefined,
  sayHello() {
    console.log("Hello");
  }
};

console.log(JSON.stringify(data));
// {"name":"Ali"}


// می‌توان با replacer مشخص کرد چه propertyهایی ذخیره شوند.

const filtered = JSON.stringify(
  user,
  ["name", "age"]
);

console.log(filtered);
// {"name":"Ali","age":25}


// آرگومان سوم برای pretty formatting استفاده می‌شود.

const pretty = JSON.stringify(
  user,
  null,
  2
);

console.log(pretty);


// JSON معمولاً برای انتقال داده بین Front-end و Backend استفاده می‌شود.
//
// JavaScript Object
//      ↓
// JSON.stringify()
//      ↓
// JSON String
//      ↓
// HTTP Request
//      ↓
// Server
//      ↓
// JSON.parse()
//      ↓
// JavaScript Object

