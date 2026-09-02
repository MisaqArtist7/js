// ==================== Encapsulation: Internal vs External Interface ====================

// OOP splits properties/methods into two groups:
// - External interface  → accessible from outside the class (public)
// - Internal interface  → accessible only inside the class (hidden details)
//
// Like a coffee machine: a button on the outside (external interface),
// wires and heating elements hidden inside (internal interface).

// JavaScript has 3 levels of access:
// 1. Public     → accessible from anywhere
// 2. Protected  → convention only (prefix with _), not enforced by JS
// 3. Private    → enforced by JS itself (prefix with #)


// ==================== Public (Default) ====================

// No special prefix = accessible from anywhere, no control at all.

class CoffeeMachinePublic {
  waterAmount = 0;

  constructor(power) {
    this.power = power;
  }
}

const cmPublic = new CoffeeMachinePublic(100);
cmPublic.waterAmount = 200;  // fine
cmPublic.waterAmount = -999; // also "fine" — nothing stops bad values


// ==================== Protected — Convention Only (prefix with _) ====================

// Use getters/setters to add control, and store the real value
// under an underscore-prefixed name.

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

const coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -10;
console.log(coffeeMachine.waterAmount); // 0, not -10 — setter caught it

// IMPORTANT: the underscore is ONLY a convention between programmers.
// JS does NOT prevent this:
coffeeMachine._waterAmount = -500; // works — no error, just "against the rules"


// ==================== Read-only Property (getter with no setter) ====================

// Defining ONLY a getter (no setter) makes a property effectively read-only.

class CoffeeMachineReadOnly {
  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
  // no set power() → assignment will throw
}

const cm2 = new CoffeeMachineReadOnly(100);
console.log(cm2.power); // 100
// cm2.power = 25; // ❌ Error — no setter defined


// ==================== Alternative: get.../set... Functions ====================

// Instead of get/set accessor syntax, plain named methods work too.
// More verbose, but more flexible (can take multiple arguments, etc).

class CoffeeMachineFn {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachineFn().setWaterAmount(100);


// ==================== Protected Fields ARE Inherited ====================

// Since "_" is just a convention, a subclass has full access
// to the parent's protected fields — nothing is actually blocked.

class MegaMachine extends CoffeeMachine {
  boostPower() {
    console.log(this._power); // works fine, protected fields are inheritable
  }
}


// ==================== Private Fields — Enforced by JS (prefix with #) ====================

// Private fields/methods start with #.
// Only accessible from INSIDE the exact class that defines them.

class CoffeeMachinePrivate {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
    return value;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

const cmPrivate = new CoffeeMachinePrivate();

// cmPrivate.#fixWaterAmount(123); // ❌ SyntaxError/TypeError — truly blocked
// cmPrivate.#waterLimit = 1000;   // ❌ Same — enforced by the language itself


// ==================== Private + Public Can Coexist ====================

// A private field can back a public getter/setter with the same "name idea".

class CoffeeMachineMixed {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

const machine = new CoffeeMachineMixed();
machine.waterAmount = 100;       // goes through the public setter
console.log(machine.waterAmount); // 100, via public getter
// machine.#waterAmount;          // ❌ Error — can't touch the private field directly


// ==================== KEY DIFFERENCE: Private Fields Are NOT Inherited-Accessible ====================

// Unlike protected (_) fields, a subclass has ZERO access
// to a parent's private (#) fields — even though it inherits from it.

class MegaCoffeeMachine extends CoffeeMachinePrivate {
  method() {
    // console.log(this.#waterLimit);
    // ❌ Error: private field '#waterLimit' must be declared in an enclosing class
    // Even the child class can't see it.
  }
}

// This is the real trade-off:
// - protected (_): child classes get access, but nothing is truly enforced
// - private (#):   truly enforced, but child classes are completely locked out
//
// In practice, many devs prefer protected (_) for exactly this reason —
// it gives subclasses flexibility, even though it's "just a convention".


// ==================== Private Fields Can't Be Accessed via this[name] ====================

// Regular properties CAN be accessed dynamically:
class UserDynamic {
  name = "John";
  sayHi() {
    const fieldName = "name";
    console.log(`Hello, ${this[fieldName]}`); // works: Hello, John
  }
}

// Private fields CANNOT — this['#name'] is simply invalid, by design.
class UserPrivate {
  #name = "John";
  sayHi() {
    const fieldName = "#name";
    // console.log(this[fieldName]); // does NOT work — always undefined/error
  }
}


// ==================== Summary ====================

// Encapsulation = separating external interface (public API)
// from internal interface (implementation details).
//
// Benefits:
// 1. Protects users from accidentally breaking things they shouldn't touch
// 2. Makes code maintainable — internals can change freely
//    as long as the external interface stays the same
// 3. Hides complexity — users only need to know the simple public API

// Public (no prefix)
// → Accessible from anywhere. No protection at all.

// Protected (_ prefix)
// → Convention only, NOT enforced by JavaScript.
// → Signals "internal use only" to other developers.
// → Inherited: subclasses CAN access it directly.

// Private (# prefix)
// → Enforced by the JavaScript language itself.
// → Only accessible from inside the exact class that defines it.
// → NOT inherited-accessible: subclasses CANNOT reach it, even indirectly —
//   they must go through a public getter/setter/method instead.
// → Cannot be accessed via this[name] dynamically.

// Getter only (no setter)
// → Makes a property effectively read-only from outside the class.

// Rule of thumb:
// → Use private (#) when you want a hard guarantee nothing outside touches it.
// → Use protected (_) when subclasses might legitimately need access.