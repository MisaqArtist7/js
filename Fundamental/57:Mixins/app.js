// ==================== Mixins ====================

// JavaScript only allows single inheritance:
// - An object has only ONE [[Prototype]]
// - A class can only "extends" ONE other class
//
// Mixins solve this: instead of inheriting, we COPY reusable
// methods from a plain object into a class's prototype.
// This lets one class gain behavior from multiple sources.


// ==================== Basic Mixin Example ====================

const sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// Copy the mixin's methods onto User's prototype
Object.assign(User.prototype, sayHiMixin);

new User("Dude").sayHi(); // Hello Dude!

// NOTE: this is NOT inheritance — it's plain method copying.
// User.prototype now simply HAS its own copies of sayHi/sayBye.


// ==================== Mixins Work Alongside "extends" ====================

// A class can extend ONE parent class AND still mix in
// as many mixins as needed — they don't conflict.

class Person {
  constructor(name) {
    this.name = name;
  }
}

class UserWithParent extends Person {
  // ...
}

Object.assign(UserWithParent.prototype, sayHiMixin);
// Could add more: Object.assign(UserWithParent.prototype, eventMixin);


// ==================== A Mixin Can Inherit From Another Mixin ====================

const sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};

const sayHiMixin2 = {
  __proto__: sayMixin, // linking mixins via prototype

  sayHi() {
    super.say(`Hello ${this.name}`); // (*) calls sayMixin's method
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  }
};

class User2 {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User2.prototype, sayHiMixin2);

new User2("Dude").sayHi(); // Hello Dude!

// WHY does super.say() still work after copying?
// Methods carry an internal [[HomeObject]] property —
// it remembers WHERE they were originally defined, not
// where they end up being used.
//
// sayHi/sayBye's [[HomeObject]] is sayHiMixin2, no matter
// which class's prototype they get copied onto.
// So super looks at sayHiMixin2.__proto__ (= sayMixin) — correctly.


// ==================== Real-World Mixin: eventMixin ====================

// Adds pub/sub style event handling to ANY class:
// .on(name, handler)   → subscribe
// .off(name, handler)  → unsubscribe
// .trigger(name, ...args) → fire the event

const eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    const handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) return;
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};


// ==================== Using eventMixin ====================

class Menu {
  choose(value) {
    this.trigger("select", value); // Menu doesn't know HOW events work,
                                     // it just calls trigger() from the mixin
  }
}

Object.assign(Menu.prototype, eventMixin);

const menu = new Menu();

// subscribe to the "select" event
menu.on("select", value => console.log(`Value selected: ${value}`));

menu.choose("123");
// → Value selected: 123


// ==================== Why This Is Powerful ====================

// Menu itself has NOTHING to do with "events" as a concept.
// One line (Object.assign) gave it full subscribe/unsubscribe/trigger
// capability — reusable across ANY class, without touching
// the class's own inheritance chain (extends).

class Calendar {
  loadFor(user) {
    console.log(`Loading calendar for ${user}`);
  }
}
Object.assign(Calendar.prototype, eventMixin);

const calendar = new Calendar();
calendar.on("dateChanged", date => console.log(`Date changed: ${date}`));
calendar.trigger("dateChanged", "2026-09-02");


// ==================== The Danger of Mixins ====================

// If two mixins (or a mixin and the class itself) define a
// method with the SAME NAME, one silently overwrites the other.
// No error, no warning — just quietly broken behavior.
//
// MITIGATION: choose distinctive, unlikely-to-clash method names
// when writing a mixin (e.g. prefer "eventTrigger" over "trigger"
// if collisions are a real risk in your codebase).


// ==================== Summary ====================

// Mixin
// → A plain object holding reusable methods, meant to be
//   copied (not inherited) into a class's prototype.

// How to apply one:
// → Object.assign(ClassName.prototype, mixinObject);

// Why mixins exist:
// → JS supports only single inheritance (one "extends" per class).
// → Mixins let you add MULTIPLE independent behaviors to any class
//   without needing multiple inheritance.

// Mixins + extends together:
// → A class can extend ONE parent AND mix in as many mixins as needed.

// Mixin-to-mixin inheritance:
// → Mixins can link to each other via __proto__.
// → super still resolves correctly after copying, because methods
//   carry [[HomeObject]] — a reference to where they were DEFINED,
//   which doesn't change when the method is copied elsewhere.

// Real use case:
// → eventMixin: gives any class .on()/.off()/.trigger() —
//   pub/sub event handling without writing it from scratch each time.

// Risk:
// → Name collisions between mixins (or with the class's own methods)
//   silently overwrite one another. Choose names carefully.