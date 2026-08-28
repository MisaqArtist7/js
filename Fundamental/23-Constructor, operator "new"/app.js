/*
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

