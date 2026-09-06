// ==================== extends: Step by Step ====================

// extends connects two prototypes together into ONE chain.
// It does NOT copy methods — it just links where JS should look next.

class Animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} runs`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
}

const rabbit = new Rabbit("White Rabbit");

// What happens when you call rabbit.run():
//
// 1. Look on the object itself (rabbit)        → not found
// 2. Look on Rabbit.prototype                  → not found (only "hide" is there)
// 3. Look on Animal.prototype (linked by extends) → FOUND → run()

rabbit.run();   // works, comes from Animal.prototype
rabbit.hide();  // works, defined directly on Rabbit.prototype


// ==================== Overriding a Method ====================

// Redefining a method in the child class fully replaces the parent's version
// for objects of that child class.

class RabbitOverride extends Animal {
  run() {
    console.log("Overridden — this run() replaces Animal's run()");
  }
}


// ==================== super.method() — Extend, Don't Just Replace ====================

// Use super.method() when you want to build ON TOP of
// the parent's behavior, not fully throw it away.

class RabbitExtend extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    // no "stop" defined on Animal in this trimmed example,
    // but the pattern is:
    // super.stop();  → run parent's version first
    this.hide();       // → then add extra behavior
  }
}


// ==================== super() in Constructors — The Rule ====================

// Rule: if a child class defines its OWN constructor,
// it MUST call super() before using `this`.

class RabbitWithConstructor extends Animal {
  constructor(name, earLength) {
    super(name);                  // ① must come first
    this.earLength = earLength;   // ② only now is `this` usable
  }
}

const r1 = new RabbitWithConstructor("White Rabbit", 10);
console.log(r1.name, r1.earLength); // White Rabbit 10


// ==================== Why super() Is Mandatory (the actual reason) ====================

// Normal class (not extending anything):
//   `new` automatically creates {} and assigns it to `this`
//   BEFORE the constructor body runs.
//
// Derived class (extends something):
//   `new` does NOT create `this` automatically.
//   The engine waits for super() to do that job
//   (because super() runs the parent constructor,
//    which is the one that actually creates the object).
//
// So touching `this` before calling super() in a derived
// constructor means `this` doesn't exist yet → ReferenceError.


// ==================== Field vs Method Override — The Surprising Difference ====================

// This is the trickiest part of class inheritance in JS.

// --- FIELDS: parent constructor sees the PARENT's own field value ---

class AnimalField {
  name = "animal";
  constructor() {
    console.log(this.name); // (*)
  }
}

class RabbitField extends AnimalField {
  name = "rabbit";
  // no own constructor → super(...args) is called implicitly
}

new AnimalField(); // animal
new RabbitField(); // animal ← NOT "rabbit", even though Rabbit overrides it!

// Reason — field initialization ORDER:
//   Base class:     fields set BEFORE constructor body runs
//   Derived class:  fields set IMMEDIATELY AFTER super() finishes
//
// Timeline for `new RabbitField()`:
//   1. super() is called → runs AnimalField's constructor
//   2. Inside that constructor, this.name is read at line (*)
//   3. At this point, RabbitField's own fields haven't been
//      assigned yet (that happens only after super() returns)
//   4. So this.name still equals AnimalField's own field: "animal"


// --- METHODS: parent constructor sees the CHILD's overridden version ---

class AnimalMethod {
  showName() {
    console.log("animal");
  }
  constructor() {
    this.showName(); // uses whatever showName is at call time
  }
}

class RabbitMethod extends AnimalMethod {
  showName() {
    console.log("rabbit");
  }
}

new AnimalMethod(); // animal
new RabbitMethod(); // rabbit ← works as most people would expect

// Reason: methods live on the prototype and are available
// immediately — there's no "not assigned yet" moment like with fields.

// PRACTICAL TAKEAWAY:
// If a parent constructor needs to use a value that a child
// might override, use a METHOD or GETTER — not a field.


// ==================== [[HomeObject]] — How "super" Actually Resolves ====================

// Question: how does `super.method()` know WHICH prototype to look at?
// Answer: NOT via `this`. Via a hidden internal property: [[HomeObject]].

// Every method written with shorthand syntax method() {...}
// (in a class OR a plain object) remembers the object/class
// it was defined on. super uses THAT to find the parent method.

const animalObj = {
  sayHi() { console.log("I'm an animal"); }
};

const rabbitObj = {
  __proto__: animalObj,
  sayHi() { super.sayHi(); } // [[HomeObject]] of this sayHi = rabbitObj
};

rabbitObj.sayHi(); // "I'm an animal" — works correctly


// CONSEQUENCE: methods with `super` inside are NOT safely copyable
// between objects — [[HomeObject]] can never be changed.

const plantObj = {
  sayHi() { console.log("I'm a plant"); }
};

const treeObj = {
  __proto__: plantObj,
  sayHi: rabbitObj.sayHi // copying a method that uses super — risky!
};

treeObj.sayHi();
// "I'm an animal" — WRONG result.
// [[HomeObject]] is still rabbitObj, so super still points to animalObj,
// completely ignoring treeObj's real prototype (plantObj).

// Note: [[HomeObject]] only applies to shorthand methods (foo() {...}),
// not to function-property syntax (foo: function() {...}).


// ==================== Arrow Functions: No Own "this" or "super" ====================

// Arrow functions borrow BOTH `this` and `super` from
// whatever scope they were defined in.

class RabbitArrow extends Animal {
  stop() {
    setTimeout(() => {
      // super here = same super as in stop() → totally fine
      console.log(`${this.name} eventually stops`);
    }, 1000);
  }
}

// A regular function() {} here would throw "Unexpected super"
// if it tried to use super — because plain functions
// have no [[HomeObject]] of their own.


// ==================== Summary ====================

// extends
// → Links Child.prototype.[[Prototype]] to Parent.prototype.
// → Method lookup walks up this chain until found.

// Overriding a method
// → Just redefine it — full replacement.

// super.method()
// → Call parent's version explicitly, usually to extend behavior.

// super() in constructor
// → MANDATORY in a derived class's own constructor, before using `this`.
// → Because derived constructors don't create `this` themselves —
//   they rely on the parent constructor (via super) to do it.

// Fields vs methods on override:
// → Fields: parent constructor sees PARENT's own field (init timing issue).
// → Methods: parent constructor sees CHILD's override (no timing issue).
// → Fix: prefer methods/getters over fields for anything a child might override
//   and that the parent constructor needs to read.

// [[HomeObject]]
// → Hidden link every shorthand method has to its defining object/class.
// → super uses it, not `this`, to resolve the parent.
// → Copying such a method elsewhere keeps the OLD [[HomeObject]] — unsafe.

// Arrow functions
// → No own `this`/`super` — inherit both from the enclosing method/scope.