// ==================== instanceof — Class Checking ====================

// obj instanceof Class
// → returns true if obj belongs to Class OR any class it inherits from.


// ==================== Basic Usage ====================

class Rabbit {}
const rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true


// Works with plain constructor functions too:

function RabbitFn() {}
console.log(new RabbitFn() instanceof RabbitFn); // true


// Works with built-ins:

const arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true — Array prototypically inherits from Object


// ==================== Works Through Inheritance ====================

class Animal {}
class RabbitChild extends Animal {}

const r = new RabbitChild();
console.log(r instanceof RabbitChild); // true
console.log(r instanceof Animal);      // true — inheritance is checked too


// ==================== The Actual Algorithm ====================

// obj instanceof Class checks the PROTOTYPE CHAIN, step by step:
//
//   obj.__proto__ === Class.prototype ?
//   obj.__proto__.__proto__ === Class.prototype ?
//   obj.__proto__.__proto__.__proto__ === Class.prototype ?
//   ... continue until found (true) or chain ends at null (false)

// For `r instanceof Animal`:
// r.__proto__ === Animal.prototype              → false (it's RabbitChild.prototype)
// r.__proto__.__proto__ === Animal.prototype    → true  (match found here)


// If a static Symbol.hasInstance method exists on the class,
// JS calls THAT instead of walking the prototype chain:

class AnimalCustom {
  static [Symbol.hasInstance](obj) {
    return obj.canEat === true;
  }
}

const duckLike = { canEat: true };
console.log(duckLike instanceof AnimalCustom); // true — custom logic, no prototype link needed


// ==================== Weird but Important: Only prototype Matters, NOT the Constructor ====================

// instanceof does NOT care which function actually built the object.
// It ONLY compares against Class.prototype.

function RabbitOld() {}
const rabbitOld = new RabbitOld();

RabbitOld.prototype = {}; // swap the prototype AFTER the object was created

console.log(rabbitOld instanceof RabbitOld);
// false! — rabbitOld's __proto__ still points to the OLD prototype object,
// but RabbitOld.prototype now points to a brand new {} object.


// --- Classic "strange instanceof" example ---

function A() {}
function B() {}

A.prototype = B.prototype = {}; // both functions share ONE prototype object

const a = new A();

console.log(a instanceof B); // true!
// `a` was never built by B() — but instanceof only checks:
// a.__proto__ === B.prototype → true, because both point to the SAME object.
//
// LESSON: from instanceof's point of view, the prototype object
// defines "type" — not which constructor function was used.


// ==================== Bonus: Object.prototype.toString as a Better typeof ====================

// A hidden trick: Object.prototype.toString, called with .call(),
// reveals the internal type tag of ANY value — even primitives.

const objectToString = Object.prototype.toString;

console.log(objectToString.call([]));      // [object Array]
console.log(objectToString.call(123));     // [object Number]
console.log(objectToString.call(null));    // [object Null]
console.log(objectToString.call(undefined)); // [object Undefined]
console.log(objectToString.call(true));    // [object Boolean]
console.log(objectToString.call(() => {})); // [object Function]


// ==================== Customizing It: Symbol.toStringTag ====================

const user = {
  [Symbol.toStringTag]: "User"
};

console.log({}.toString.call(user)); // [object User]

// Many built-in/environment objects define this automatically, e.g.
// window[Symbol.toStringTag]        → "Window"
// XMLHttpRequest.prototype[Symbol.toStringTag] → "XMLHttpRequest"


// ==================== Summary Table ====================

// typeof
// → Works for: primitives only
// → Returns: a string ("number", "string", "object", ...)

// {}.toString.call(x)
// → Works for: primitives, built-in objects, anything with Symbol.toStringTag
// → Returns: a string like "[object Array]"
// → Essentially "typeof on steroids"

// instanceof
// → Works for: objects (checks the prototype chain, respects inheritance)
// → Returns: true / false
// → Best choice when working with a class hierarchy

// Key takeaways:
// 1. instanceof walks obj's prototype chain comparing against Class.prototype
// 2. It's the PROTOTYPE that matters, not the constructor function itself
// 3. Changing Class.prototype after object creation breaks the link
// 4. Symbol.hasInstance lets you fully override instanceof's default behavior