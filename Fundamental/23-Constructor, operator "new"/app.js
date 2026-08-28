/*
 * ============================================================================
 * 🚀 OPTIONAL CHAINING "?."
 * ============================================================================
 *
 * Optional chaining (`?.`) is used to safely access properties and methods
 * when a value might be `null` or `undefined`.
 *
 * Instead of throwing an error, JavaScript stops the evaluation and returns
 * `undefined`.
 *
 */


/* ============================================================================
 * 1. THE PROBLEM
 * ============================================================================
 */

// Accessing a nested property normally can cause an error
// if one of the objects in the chain doesn't exist.

let user = {};

console.log(user.address.city);

// Error:
// Cannot read properties of undefined (reading 'city')


// Why?
//
// First:
//
//     user.address
//
// returns:
//
//     undefined
//
// Then JavaScript tries:
//
//     undefined.city
//
// Which causes an error.



/* ============================================================================
 * 2. OPTIONAL CHAINING WITH "?."
 * ============================================================================
 */

// Optional chaining allows us to safely access nested properties.

let person = {};

console.log(person?.address?.city); // undefined


// If `person` exists, JavaScript checks `address`.
//
// If `address` is `null` or `undefined`,
// the rest of the chain is skipped.
//
// No error is thrown.



/* ============================================================================
 * 3. OPTIONAL CHAINING WITH EXISTING PROPERTIES
 * ============================================================================
 */

let userInfo = {
    name: "Ali",
    address: {
        city: "Baku"
    }
};

console.log(userInfo?.name); // Ali

console.log(userInfo?.address?.city); // Baku


// Since all properties exist, `?.` works just like normal property access.



/* ============================================================================
 * 4. OPTIONAL CHAINING ONLY CHECKS NULL AND UNDEFINED
 * ============================================================================
 */

// `?.` does NOT check for every falsy value.
//
// It specifically checks for:
//
//     null
//     undefined
//
// Other values such as:
//
//     0
//     ""
//     false
//
// are NOT treated as nullish.

let value = 0;

console.log(value?.toString()); // "0"


// `0` exists, so JavaScript continues evaluating the expression.



/* ============================================================================
 * 5. OPTIONAL CHAINING VS "&&"
 * ============================================================================
 */

// Before optional chaining, developers often used `&&`
// to safely access nested properties.

let account = {
    profile: {
        name: "Ali"
    }
};

console.log(
    account &&
    account.profile &&
    account.profile.name
); // Ali


// With optional chaining, the same idea is much cleaner:

console.log(account?.profile?.name); // Ali


// Important difference:
//
// `&&` checks truthy / falsy values.
//
// `?.` checks specifically for `null` / `undefined`.



/* ============================================================================
 * 6. OPTIONAL CHAINING MUST BE USED WHERE NEEDED
 * ============================================================================
 */

// Optional chaining only protects the part of the chain
// where `?.` is used.

let customer = null;


// Safe:
console.log(customer?.address?.city); // undefined


// The first `?.` safely stops the chain because `customer` is null.



/* ============================================================================
 * 7. OPTIONAL CHAINING WITH UNDECLARED VARIABLES
 * ============================================================================
 */

// `?.` does NOT make an undeclared variable safe.
//
// If the variable itself doesn't exist, JavaScript throws a ReferenceError.
//
// Example:
//
// console.log(user?.name);
//
// If `user` was never declared:
//
// ReferenceError: user is not defined


// But if the variable exists and contains `undefined`, it is safe:

let userData;

console.log(userData?.name); // undefined



/* ============================================================================
 * 8. SHORT-CIRCUITING
 * ============================================================================
 */

// When optional chaining encounters `null` or `undefined`,
// JavaScript stops evaluating the rest of the chain.
//
// This behavior is called "short-circuiting".

let profile = null;
let counter = 0;

profile?.sayHi(counter++);

console.log(counter); // 0


// `profile` is null.
//
// Therefore `sayHi()` is never called,
// and `counter++` is never evaluated.



/* ============================================================================
 * 9. OPTIONAL METHOD CALL "?.()"
 * ============================================================================
 */

// `?.()` is used when a method might not exist.
//
// It calls the method only if it exists.

let admin = {

    sayHi() {
        console.log("I am admin");
    }

};

admin.sayHi?.(); // I am admin


// If the method doesn't exist:

let guest = {};

guest.sayHi?.();


// Nothing happens.
// No error is thrown.
//
// This is useful when a method is optional.



/* ============================================================================
 * 10. OPTIONAL BRACKET ACCESS "?.[]"
 * ============================================================================
 */

// Optional chaining also works with bracket notation.
//
// This is useful when the property name is stored in a variable.

let key = "name";

let personInfo = {
    name: "Ali"
};

console.log(personInfo?.[key]); // Ali


// If the object doesn't exist:

let personData = null;

console.log(personData?.[key]); // undefined


// Without optional chaining:
//
// personData[key]
//
// would cause an error.



/* ============================================================================
 * 11. OPTIONAL CHAINING WITH "DELETE"
 * ============================================================================
 */

// Optional chaining can also be used with `delete`.

let employee = {
    name: "Ali"
};

delete employee?.name;

console.log(employee); // {}


// If the object is null or undefined,
// `delete` does not throw an error.

let employee2 = null;

delete employee2?.name;



/* ============================================================================
 * 12. OPTIONAL CHAINING CANNOT BE USED FOR ASSIGNMENT
 * ============================================================================
 */

// Optional chaining is used for safely READING properties,
// not assigning values to them.
//
// This is NOT allowed:
//
// user?.name = "Ali";
//
// SyntaxError


// If you want to assign a value,
// first make sure the object exists.

let newUser = {};

if (newUser) {
    newUser.name = "Ali";
}

console.log(newUser.name); // Ali



/* ============================================================================
 * 13. OPTIONAL CHAINING WITH DEEPLY NESTED OBJECTS
 * ============================================================================
 */

// Optional chaining becomes especially useful
// with deeply nested objects.

let data = {
    user: {
        profile: {
            social: {
                instagram: "@ali"
            }
        }
    }
};

console.log(
    data?.user?.profile?.social?.instagram
); // @ali


// If any part of the chain is null or undefined,
// JavaScript stops and returns undefined.

let emptyData = {};

console.log(
    emptyData?.user?.profile?.social?.instagram
); // undefined



/* ============================================================================
 * 14. OPTIONAL CHAINING + NULLISH COALESCING
 * ============================================================================
 */

// Optional chaining and nullish coalescing (`??`) are often used together.
//
// `?.` safely accesses a property.
//
// `??` provides a default value if the result is null or undefined.

let accountInfo = {};

let city = accountInfo?.address?.city ?? "Unknown";

console.log(city); // Unknown


// Think of it like this:
//
//     ?.  → "Safely access this property."
//
//     ??  → "If the result is null/undefined, use this value instead."



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - Optional chaining uses the `?.` operator.
 *
 * - It safely accesses properties that might be `null` or `undefined`.
 *
 * - If the value before `?.` is null or undefined,
 *   the rest of the chain is skipped.
 *
 * - The result of a skipped optional chain is `undefined`.
 *
 * - `?.` checks only for `null` and `undefined`,
 *   not all falsy values.
 *
 * - Optional chaining can be used with properties:
 *
 *     obj?.property
 *
 * - Optional chaining can be used with bracket notation:
 *
 *     obj?.[property]
 *
 * - Optional chaining can be used with methods:
 *
 *     obj.method?.()
 *
 * - Optional chaining supports short-circuiting.
 *
 * - `?.` does not protect undeclared variables.
 *
 * - Optional chaining cannot be used on the left side of an assignment.
 *
 * - `?.` is often combined with `??`:
 *
 *     user?.address?.city ?? "Unknown"
 *
 * ============================================================================
 *//*
 * ============================================================================
 * 🚀 CONSTRUCTOR FUNCTIONS AND "NEW"
 * ============================================================================
 *
 * Constructor functions are used to create multiple objects with the same
 * structure and properties.
 *
 * The `new` operator creates a new object and uses the constructor function
 * to initialize that object.
 *
 */


/* ============================================================================
 * 1. CONSTRUCTOR FUNCTIONS
 * ============================================================================
 */

// A constructor function is a regular function that is used to create objects.
//
// By convention, constructor functions start with a capital letter.
//
// The function itself doesn't create the object yet.
// The object is created when we call the function with `new`.

function User(name, age) {

    // `this` refers to the new object that is being created.

    this.name = name;
    this.age = age;
}


/* ============================================================================
 * 2. USING "NEW"
 * ============================================================================
 */

// The `new` operator creates a new object and calls the constructor function.
//
// `new User("Ali", 25)` can be thought of roughly as:
//
// 1. Create an empty object.
// 2. Set `this` to that new object.
// 3. Execute the constructor function.
// 4. Return the newly created object.

let user1 = new User("Ali", 25);

console.log(user1.name); // Ali
console.log(user1.age);  // 25


/* ============================================================================
 * 3. CREATING MULTIPLE OBJECTS
 * ============================================================================
 */

// The same constructor can be used to create many different objects.
//
// Each call to `new User()` creates a completely new object.

let user2 = new User("Sara", 22);
let user3 = new User("Reza", 30);

console.log(user2); // { name: "Sara", age: 22 }
console.log(user3); // { name: "Reza", age: 30 }


// Each object has its own properties.

console.log(user1.name); // Ali
console.log(user2.name); // Sara
console.log(user3.name); // Reza


/* ============================================================================
 * 4. HOW "NEW" WORKS
 * ============================================================================
 */

// When we write:
//
// let user = new User("Ali", 25);
//
// JavaScript performs approximately these steps:
//
// Step 1: A new empty object is created.
//
//     let user = {};
//
// Step 2: `this` is assigned to that new object.
//
//     this = user;
//
// Step 3: The constructor function runs.
//
//     this.name = "Ali";
//     this.age = 25;
//
// Step 4: The new object is returned.
//
// So the result is approximately:
//
//     user = {
//         name: "Ali",
//         age: 25
//     };



/* ============================================================================
 * 5. "THIS" INSIDE A CONSTRUCTOR
 * ============================================================================
 */

// The most important idea:
//
// When a constructor is called with `new`, `this` refers to the new object.
//
// Each call gets its own `this`.

function Product(name, price) {

    // `this` refers to the newly created Product object.

    this.name = name;
    this.price = price;
}

let laptop = new Product("Laptop", 1000);
let phone = new Product("Phone", 700);

console.log(laptop.name); // Laptop
console.log(phone.name);  // Phone


/* ============================================================================
 * 6. CONSTRUCTOR WITH METHODS
 * ============================================================================
 */

// A constructor can also add methods to the newly created object.

function Person(name) {

    this.name = name;

    this.sayHi = function() {

        console.log("Hi, I am " + this.name);

    };
}

let person1 = new Person("Ali");

person1.sayHi(); // Hi, I am Ali


// The created object now contains both properties and methods:
//
// {
//     name: "Ali",
//     sayHi: function() { ... }
// }



/* ============================================================================
 * 7. "NEW" VS NORMAL FUNCTION CALL
 * ============================================================================
 */

// Calling a constructor with `new` is very different from calling it normally.

function UserInfo(name) {

    this.name = name;
}


// With `new`:
//
// `this` refers to the newly created object.

let user = new UserInfo("Ali");

console.log(user.name); // Ali


// Without `new`:
//
// The function is called normally, so JavaScript does NOT create a new object.
//
// In strict mode, `this` is undefined.
//
// UserInfo("Ali");


// Constructor functions are therefore normally called with `new`.



/* ============================================================================
 * 8. RETURN FROM A CONSTRUCTOR
 * ============================================================================
 */

// Normally, a constructor doesn't need a `return` statement.
//
// `new` automatically returns the newly created object.

function UserAccount(name) {

    this.name = name;

}

let account = new UserAccount("Ali");

console.log(account.name); // Ali


// If a constructor explicitly returns an OBJECT,
// that object replaces the automatically created object.

function Example() {

    this.name = "Ali";

    return {
        name: "Sara"
    };
}

let example = new Example();

console.log(example.name); // Sara


// But if the constructor returns a primitive value,
// that value is ignored and the newly created object is returned.

function Example2() {

    this.name = "Ali";

    return "Hello";

}

let example2 = new Example2();

console.log(example2.name); // Ali



/* ============================================================================
 * 9. "NEW.TARGET" (ADVANCED)
 * ============================================================================
 */

// `new.target` allows us to check whether a function
// was called with `new`.
//
// If the function was called with `new`, `new.target` refers
// to the constructor function itself.
//
// If it was called normally, `new.target` is undefined.

function UserCheck() {

    console.log(new.target);

}

new UserCheck(); // UserCheck
UserCheck();     // undefined


// This is an advanced feature and is not usually needed
// when first learning constructor functions.



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - A constructor function is a regular function used to create objects.
 *
 * - By convention, constructor function names start with a capital letter.
 *
 * - Constructor functions are normally called with `new`.
 *
 * - `new` creates a new object.
 *
 * - Inside the constructor, `this` refers to the newly created object.
 *
 * - The constructor initializes the object by adding properties and methods.
 *
 * - Every `new Constructor()` call creates a separate object.
 *
 * - `new` automatically returns the newly created object.
 *
 * - If a constructor returns an object explicitly, that object is returned
 *   instead.
 *
 * - `new.target` can be used to detect whether a function was called with `new`.
 *
 * ============================================================================
 */



