// ==================== Static Methods ====================

// A method can belong to the CLASS itself, not to instances.
// Marked with the "static" keyword.

class User {
  static staticMethod() {
    console.log(this === User); // true
  }
}

User.staticMethod(); // true
// Note: `this` inside a static method = the class itself, not an instance.


// ==================== Static Is Just a Property on the Class ====================

// class User { static staticMethod() {...} }
// is functionally the same as:

class User2 {}
User2.staticMethod = function () {
  console.log(this === User2);
};
User2.staticMethod(); // true


// ==================== Why Use Static Methods? ====================

// For functionality that belongs to the WHOLE class,
// not to any single instance.

// --- Example 1: Comparison helper ---

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

const articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);
console.log(articles[0].title); // CSS

// compare() isn't about ONE article — it's about the relationship
// between two articles, so it lives on the class, not an instance.


// --- Example 2: Factory method ---

class ArticleFactory {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // `this` here = the class itself (ArticleFactory)
    return new this("Today's digest", new Date());
  }
}

const todays = ArticleFactory.createTodays();
console.log(todays.title); // Today's digest

// Common real-world use: database-style static methods
// Article.find(id), Article.remove(id), Article.createTodays(), etc.


// ==================== Static Methods Are NOT Available on Instances ====================

const a1 = new ArticleFactory("Test", new Date());

// a1.createTodays();
// TypeError: a1.createTodays is not a function
// Static methods only exist on the class, never on `new`-created objects.


// ==================== Static Properties ====================

// Same idea as static methods, but for data instead of behavior.

class ArticleWithPublisher {
  static publisher = "Ilya Kantor";
}

console.log(ArticleWithPublisher.publisher); // Ilya Kantor

// Equivalent to:
// ArticleWithPublisher.publisher = "Ilya Kantor";


// ==================== Inheritance of Static Properties/Methods ====================

// Static members ARE inherited when using extends.

class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5),
];

rabbits.sort(Rabbit.compare); // inherited from Animal
rabbits[0].run();             // Black Rabbit runs with speed 5.

console.log(Rabbit.planet);   // Earth (inherited static property)


// ==================== Why Static Inheritance Works: TWO Prototype Chains ====================

// extends actually sets up TWO separate links, not one:
//
// 1. Rabbit.prototype.__proto__ === Animal.prototype
//    → powers inheritance of REGULAR (instance) methods
//
// 2. Rabbit.__proto__ === Animal
//    → powers inheritance of STATIC methods/properties

class AnimalBase {}
class RabbitBase extends AnimalBase {}

console.log(RabbitBase.__proto__ === AnimalBase);                     // true (static chain)
console.log(RabbitBase.prototype.__proto__ === AnimalBase.prototype); // true (instance chain)


// ==================== Bonus: class X extends Object — Subtle Differences ====================

// A class with NO extends at all still has Object.prototype
// in its chain automatically (that's why hasOwnProperty etc. work):

class PlainRabbit {
  constructor(name) {
    this.name = name;
  }
}
const pr = new PlainRabbit("Rab");
console.log(pr.hasOwnProperty("name")); // true — inherited via Object.prototype


// But writing "extends Object" explicitly changes two things:

class ExplicitRabbit extends Object {
  constructor(name) {
    super(); // now REQUIRED, because this is a derived class
    this.name = name;
  }
}

// Difference 1: must call super() (any derived class requires it)
// Difference 2: static chain now points to Object itself

console.log(PlainRabbit.__proto__ === Function.prototype); // true (default for any function/class)
console.log(PlainRabbit.__proto__ === Object);              // false

console.log(ExplicitRabbit.__proto__ === Object); // true
// So ExplicitRabbit gets access to Object's OWN static methods:
console.log(ExplicitRabbit.getOwnPropertyNames({ a: 1, b: 2 })); // ["a", "b"]

// PlainRabbit.getOwnPropertyNames({...}); // ❌ Error — not inherited without "extends Object"


// ==================== Summary ====================

// static keyword
// → Attaches a method/property to the CLASS itself, not to instances.
// → Same as writing: ClassName.prop = value / ClassName.method = fn

// Inside a static method, `this` = the class itself.

// Use static methods for:
// → Things that operate on/compare MULTIPLE instances (e.g. compare())
// → Factory functions that create instances (e.g. createTodays())
// → Class-level utilities not tied to any one object (e.g. db queries)

// Static methods/properties are NOT accessible from instances
// (instance.staticMethod() → TypeError)

// extends creates TWO prototype links:
// → Class.prototype.__proto__ = Parent.prototype   (instance methods)
// → Class.__proto__ = Parent                        (static methods/properties)
// → Both regular AND static members get inherited because of this.

// class X extends Object (explicit) vs class X (implicit):
// → Explicit: must call super() in constructor; X.__proto__ === Object
//   (gains access to Object's own static methods)
// → Implicit: no super() needed; X.__proto__ === Function.prototype
//   (does NOT gain Object's static methods, but instances still get
//    Object.prototype methods like hasOwnProperty either way)