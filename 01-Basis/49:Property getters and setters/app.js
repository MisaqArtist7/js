// ==================== Property Accessors ====================

// Accessor properties allow us to define:
// → get
// → set
//
// They look like normal properties,
// but internally they execute functions.


// ==================== Getter ====================

// A getter runs when the property is read.

const user = {

  firstName: "Misaq",

  lastName: "Babakhani",

  get fullName() {

    return `${this.firstName} ${this.lastName}`;

  }

};

console.log(user.fullName);

// "Misaq Babakhani"


// ==================== Getter vs Method ====================

// Getter:
// → Accessed like a property.

console.log(user.fullName);


// Method:
// → Called like a function.

const person = {

  firstName: "Misaq",

  lastName: "Babakhani",

  fullName() {

    return `${this.firstName} ${this.lastName}`;

  }

};

console.log(person.fullName());


// ==================== Setter ====================

// A setter runs when a value is assigned
// to the property.

const account = {

  firstName: "Misaq",

  lastName: "Dev",

  get fullName() {

    return `${this.firstName} ${this.lastName}`;

  },

  set fullName(value) {

    [this.firstName, this.lastName] = value.split(" ");

  }

};

account.fullName = "Ali Developer";

console.log(account.firstName); // Ali
console.log(account.lastName);  // Developer
console.log(account.fullName);  // Ali Developer


// ==================== Getter + Setter ====================

// Getter → runs when reading the property.
// Setter → runs when assigning a value.

account.fullName;
// → getter runs

account.fullName = "John Smith";
// → setter runs


// ==================== Validation with Setter ====================

// Setters can validate values before assigning them.

const userProfile = {

  _age: 0,

  get age() {

    return this._age;

  },

  set age(value) {

    if (value < 0) {

      console.log("Age cannot be negative");

      return;

    }

    this._age = value;

  }

};

userProfile.age = 25;

console.log(userProfile.age); // 25

userProfile.age = -10;

// "Age cannot be negative"


// ==================== Internal Property ====================

// "_" is a naming convention for internal properties.
//
// JavaScript does NOT make "_age" private.
// It simply indicates that the property
// is intended to be used internally.


// ==================== Accessor Descriptor ====================

// Accessor properties use:
// → get
// → set
// → enumerable
// → configurable
//
// They do NOT use:
// → value
// → writable

const descriptor =

  Object.getOwnPropertyDescriptor(account, "fullName");

console.log(descriptor);

// {
//   get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: true,
//   configurable: true
// }


// ==================== Getter Without Setter ====================

// If a property only has a getter,
// it is effectively read-only through that accessor.

const product = {

  price: 100,

  get finalPrice() {

    return this.price * 1.2;

  }

};

console.log(product.finalPrice); // 120

// product.finalPrice = 200;
// No setter exists for finalPrice.


// ==================== Why Use Accessors? ====================

// Accessors are useful when we need:
// → Computed properties
// → Validation
// → Controlled access
// → Logic when reading or changing values


// ==================== Summary ====================

// get
// → Runs when a property is read.

// set
// → Runs when a property is assigned.

// Getter
// → property access without ()

// Setter
// → assignment triggers a function

// Accessor property
// → Uses get / set instead of value / writable.

// Common use cases:
// → Computed values
// → Validation
// → Controlling property access

