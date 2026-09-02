// ==================== Class Basic Syntax ====================

// A class is a template for creating objects.
// Under the hood, it's still function + prototype.

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

const user = new User("John");
user.sayHi(); // John


// ==================== What "class" Really Creates ====================

// class User {...} actually:
//
// 1. Creates a function named User
//    (the function body = constructor code)
// 2. Stores methods (like sayHi) on User.prototype

console.log(typeof User);
// function

console.log(User === User.prototype.constructor);
// true

console.log(Object.getOwnPropertyNames(User.prototype));
// ["constructor", "sayHi"]


// ==================== The "new" Operator ====================

// What happens step by step when you call `new User("John")`:
//
// 1. A new empty object {} is created
// 2. Its [[Prototype]] is set to User.prototype
// 3. The constructor runs, with `this` bound to that new object
// 4. The object (this) is returned automatically

const u2 = new User("Sara");

console.log(u2.hasOwnProperty("name"));
// true → own property, lives on the object itself

console.log(u2.hasOwnProperty("sayHi"));
// false → inherited from User.prototype


// ==================== Calling a Class Without "new" ====================

// Class functions carry an internal [[IsClassConstructor]] flag.
// Calling one without `new` throws an error.

// User("John");
// TypeError: Class constructor User cannot be invoked without 'new'


// ==================== Prototype (Where Methods Actually Live) ====================

// Methods are NOT copied onto every object.
// All instances share ONE copy via the prototype chain.

console.log(User.prototype.sayHi === user.sayHi);
// true → same function reference, shared, not duplicated


// ==================== Constructor: With vs Without ====================

// Without a constructor, JS creates an empty one automatically.

class Simple {
  sayHi() {
    console.log("hi");
  }
}
// same as:
class SimpleExplicit {
  constructor() {}
  sayHi() {
    console.log("hi");
  }
}

// Use a constructor when you need to accept arguments
// and set initial state on the object.


// ==================== The "this" Problem ====================

// `this` depends on HOW a function is called, not where it's defined.

class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}

const btn = new Button("clicked!");

btn.click();
// "clicked!" → this = btn, called as btn.click()

const detached = btn.click;
detached();
// undefined → this is lost, called standalone

setTimeout(btn.click, 1000);
// undefined → same problem, this is lost


// ==================== Fixing "this" with Class Fields (Arrow Functions) ====================

// Arrow functions don't have their own `this`.
// They capture `this` from where they were defined —
// which, as a class field, is always the instance.

class ButtonFixed {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  }
}

const btn2 = new ButtonFixed("clicked!");

setTimeout(btn2.click, 1000);
// "clicked!" → works, because click is bound per-instance


// ==================== Class Fields (Instance Properties) ====================

// Fields are set on each object individually,
// NOT on the prototype.

class Counter {
  count = 0; // instance field

  increment() {
    this.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();

c1.increment();
c1.increment();

console.log(c1.count); // 2
console.log(c2.count); // 0 → independent per instance


// ==================== Real Project Example ====================

// Why bother with classes instead of plain functions/objects?
// - No repeated code: `new` gives a full, ready object every time
// - Each instance has its own data, shared methods
// - Related logic stays organized in one place

class ShoppingCart {
  items = [];

  constructor(customerName) {
    this.customerName = customerName;
  }

  addItem(product, price) {
    this.items.push({ product, price });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkout = () => {
    console.log(`${this.customerName} paid ${this.getTotal()}`);
  }
}

const cart = new ShoppingCart("Ali");
cart.addItem("Book", 50000);
cart.addItem("Pen", 5000);
cart.checkout();
// "Ali paid 55000"


// ==================== Summary ====================

// class
// → Syntax sugar over: function (constructor) + prototype (methods)

// new ClassName(...)
// → 1. creates empty object
// → 2. links it to ClassName.prototype
// → 3. runs constructor with this = new object
// → 4. returns the object

// ClassName.prototype
// → Shared storage for methods. Not duplicated per instance.

// constructor
// → Optional. Needed when you must accept args / set initial state.
// → If omitted, JS creates an empty one automatically.

// this
// → Depends on HOW a function is called, not where it's written.
// → Lost when a method is detached from its object (e.g. passed to setTimeout).

// Arrow function as a class field (method = () => {...})
// → Captures `this` permanently from the instance.
// → Use this when a method will be passed around / used as a callback.

// Class fields (prop = value)
// → Set per-instance, not on the prototype.