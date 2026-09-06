/**
 * ============================================================================
 * 🚀 OBJECT METHODS AND "THIS"
 * ============================================================================
 * Objects are usually created to represent entities of the real world, 
 * like users, orders, etc. 
 * Actions that these objects can perform are represented by functions in properties.
 */

/* ============================================================================
 * 1. METHODS
 * ============================================================================ */

// A function that is a property of an object is called its "method".

let user = {
    name: "John",
    
    // Regular function expression:
    sayHi: function() {
        console.log("Hello!");
    },
    
    // Method shorthand syntax (Preferred & cleaner):
    sayBye() {
        console.log("Goodbye!");
    }
};

user.sayHi(); // Hello!
user.sayBye(); // Goodbye!


/* ============================================================================
 * 2. THE "THIS" KEYWORD
 * ============================================================================ */

// To access the object's properties from within a method, we use the `this` keyword.
// The value of `this` is the object "before dot", the one used to call the method.

let person = {
    name: "Ali",
    age: 30,
    introduce() {
        // 'this' refers to the current object (person)
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
};

person.introduce(); // Hi, I am Ali and I am 30 years old.


/* ============================================================================
 * 3. "THIS" IS NOT BOUND (EVALUATED AT CALL-TIME)
 * ============================================================================ */

// In JavaScript, `this` is completely free. Its value is evaluated at run-time
// and depends on the context (how the function was called).
// The rule is simple: if obj.f() is called, then `this` is obj during the call.

let userObj = { name: "John" };
let adminObj = { name: "Admin" };

function sayName() {
    console.log(this.name);
}

// Assigning the same function to both objects
userObj.func = sayName;
adminObj.func = sayName;

userObj.func();   // John  (this == userObj)
adminObj.func();  // Admin (this == adminObj)

// Calling the function without an object (in non-strict mode it's the global object,
// in strict mode it's undefined, which causes an error if we try to access this.name).
// sayName(); // Error!


/* ============================================================================
 * 4. ARROW FUNCTIONS HAVE NO "THIS"
 * ============================================================================ */

// Arrow functions are special: they don't have their "own" `this`.
// If we reference `this` from such a function, it’s taken from the outer "normal" function.

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        // The arrow function takes `this` from the outer `showList()` method context
        this.students.forEach(student => {
            console.log(this.title + ": " + student);
        });
    }
};

group.showList();
// Our Group: John
// Our Group: Pete
// Our Group: Alice

// If we used a regular function inside forEach instead of an arrow function, 
// `this` would be undefined (or the global object), causing an error!


/**
 * ============================================================================
 * SUMMARY
 * ============================================================================
 * - Functions stored in object properties are called "methods".
 * - Methods allow objects to "act" (e.g. object.doSomething()).
 * - The value of `this` is defined at run-time.
 * - When a function is declared, it may use `this`, but that `this` has no 
 *   value until the function is called.
 * - Arrow functions don't have their own `this`. They borrow it from the outside.
 * ============================================================================
 */