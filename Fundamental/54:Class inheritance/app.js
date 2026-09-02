// ==================== Class Inheritance ====================

// One class can extend another class,
// building new functionality on top of existing one.


// ==================== The "extends" Keyword ====================

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit("White Rabbit");

rabbit.run(5);  // White Rabbit runs with speed 5.
rabbit.hide();  // White Rabbit hides!

// Rabbit objects can use BOTH:
// - their own methods (hide)
// - inherited methods from Animal (run, stop)


// ==================== How "extends" Works Internally ====================

// extends sets:
// Rabbit.prototype.[[Prototype]] = Animal.prototype
//
// So if a method isn't found on Rabbit.prototype,
// JS looks it up on Animal.prototype next.

console.log(Object.getPrototypeOf(Rabbit.prototype) === Animal.prototype);
// true


// ==================== Overriding a Method ====================

// If Child defines its own method with the same name,
// it replaces (shadows) the parent's version.

class Rabbit2 extends Animal {
  stop() {
    console.log("Rabbit2 has its own stop, not Animal's");
  }
}


// ==================== super.method() ====================

// Used to call the PARENT's version of a method,
// usually to extend it rather than fully replace it.

class Rabbit3 extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop();   // run Animal's stop() first
    this.hide();    // then add extra behavior
  }
}

const r3 = new Rabbit3("White Rabbit");
r3.run(5);
r3.stop();
// White Rabbit runs with speed 5.
// White Rabbit stands still.
// White Rabbit hides!


// ==================== Arrow Functions Have No "super" ====================

// Arrow functions don't have their own `super`.
// They use `super` from the surrounding (enclosing) method — this is fine:

class Rabbit4 extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // works: super comes from stop()
  }
}

// A regular function here would throw: "Unexpected super"
// setTimeout(function() { super.stop() }, 1000); // ❌ error


// ==================== super() — Calling the Parent Constructor ====================

// Rule: a derived class's constructor MUST call super()
// before it can use `this`.

class Rabbit5 extends Animal {
  constructor(name, earLength) {
    super(name);         // must run first
    this.earLength = earLength; // now `this` exists, safe to use
  }
}

const r5 = new Rabbit5("White Rabbit", 10);
console.log(r5.name);      // White Rabbit
console.log(r5.earLength); // 10

// Without super(name) first → ReferenceError: this is not defined


// ==================== Why super() Is Required ====================

// A derived constructor has an internal flag: [[ConstructorKind]] = "derived"
//
// - A normal constructor: `new` creates {} and sets it as `this` automatically.
// - A derived constructor: does NOT create `this` on its own.
//   It expects the parent constructor (via super()) to create it.
//
// So no super() call → no `this` object exists yet → error if you touch `this`.


// ==================== Default Constructor When None Is Written ====================

// If a class extends another and defines NO constructor,
// JS generates this automatically:

class RabbitDefault extends Animal {
  // equivalent to:
  // constructor(...args) {
  //   super(...args);
  // }
}


// ==================== Tricky Note: Overriding Class Fields ====================

// Class FIELDS behave differently from METHODS when overridden.
// This is a JS-specific quirk.

class AnimalF {
  name = "animal";
  constructor() {
    console.log(this.name);
  }
}

class RabbitF extends AnimalF {
  name = "rabbit";
}

new AnimalF(); // animal
new RabbitF(); // animal  ← NOT "rabbit"! (surprising)

// Why? Field initialization order:
// - Base class: fields init BEFORE constructor body runs
// - Derived class: fields init RIGHT AFTER super() call
//
// So when Animal's constructor runs during `new RabbitF()`,
// Rabbit's own fields haven't been set yet — only Animal's exist.

// Compare with METHODS — these behave as expected (no surprise):

class AnimalM {
  showName() {
    console.log("animal");
  }
  constructor() {
    this.showName();
  }
}

class RabbitM extends AnimalM {
  showName() {
    console.log("rabbit");
  }
}

new AnimalM(); // animal
new RabbitM(); // rabbit  ← works as expected

// Fix for the fields quirk: use methods or getters/setters
// instead of relying on overridden fields inside a parent constructor.


// ==================== [[HomeObject]] (Advanced / Internals) ====================

// How does `super` actually know which prototype to look at?
// It's not based on `this` — it's based on a hidden property: [[HomeObject]].
//
// When a function is written as a method (method() {...}),
// JS remembers the object it was defined on, as [[HomeObject]].
// super uses THAT to find the parent method — not this.__proto__.

// This is why copying a method with `super` inside it to another
// object can break — [[HomeObject]] stays pointed at the original object.

const animalObj = {
  sayHi() { console.log("I'm an animal"); }
};

const rabbitObj = {
  __proto__: animalObj,
  sayHi() { super.sayHi(); } // [[HomeObject]] = rabbitObj
};

const plantObj = {
  sayHi() { console.log("I'm a plant"); }
};

const treeObj = {
  sayHi: rabbitObj.sayHi // copied method — [[HomeObject]] is still rabbitObj!
};
Object.setPrototypeOf(treeObj, plantObj);

treeObj.sayHi();
// "I'm an animal" — wrong result, because [[HomeObject]] didn't change

// [[HomeObject]] only applies to shorthand methods (foo() {...}),
// NOT to function-property syntax (foo: function() {...}).


// ==================== Real Example ====================

// Extending a base Clock class with extra behavior (custom tick precision)

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    const date = new Date();
    console.log(this.template.replace("h", date.getHours()));
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);                 // must call first
    const { precision = 1000 } = options;
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const fastClock = new ExtendedClock({ template: "h:m:s", precision: 200 });
// fastClock.start();


// ==================== Summary ====================

// class Child extends Parent
// → Child.prototype.[[Prototype]] = Parent.prototype
// → Child inherits Parent's methods automatically.

// Overriding a method
// → Just redefine it in Child. Fully replaces parent's version.

// super.method()
// → Calls the parent's version of a method (used to extend, not just replace).

// super(...)
// → Calls the parent constructor. REQUIRED before using `this`
//   in any constructor of a class that extends another.

// No constructor in Child?
// → JS auto-generates: constructor(...args) { super(...args); }

// Class fields vs methods when overridden:
// → Methods: parent constructor sees the CHILD's overridden version.
// → Fields: parent constructor sees its OWN (parent) field value,
//   because child fields init only after super() finishes.

// [[HomeObject]]
// → Hidden property set on methods (not plain function properties).
// → super uses it to resolve the parent prototype.
// → Copying a method with `super` inside to another object breaks it,
//   because [[HomeObject]] can't change.

// Arrow functions
// → No own `this` or `super` — they inherit both from the enclosing scope.