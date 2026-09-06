// ==================== Property Descriptors ====================

// Every object property has internal settings:
// → value
// → writable
// → enumerable
// → configurable


// ==================== getOwnPropertyDescriptor ====================

const user = {
  name: "Misaq"
};

console.log(
  Object.getOwnPropertyDescriptor(user, "name")
);

// {
//   value: "Misaq",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// ==================== writable ====================

// Controls whether the value can be changed.

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Ali";

console.log(user.name); // Misaq


// ==================== enumerable ====================

// Controls whether the property appears in enumeration.

Object.defineProperty(user, "age", {
  value: 25,
  enumerable: false
});

console.log(Object.keys(user));
// ["name"]


// ==================== configurable ====================

// Controls whether the property can be deleted
// or its descriptor can be changed.

Object.defineProperty(user, "name", {
  configurable: false
});

delete user.name;

console.log(user.name); // Misaq


// ==================== defineProperty ====================

// Creates or modifies a property descriptor.

const person = {};

Object.defineProperty(person, "name", {
  value: "Misaq",
  writable: true,
  enumerable: true,
  configurable: true
});


// When omitted in defineProperty(),
// descriptor flags are false by default.

Object.defineProperty(person, "age", {
  value: 25
});


// age:
// writable → false
// enumerable → false
// configurable → false


// ==================== defineProperties ====================

// Defines multiple properties at once.

Object.defineProperties(person, {
  job: {
    value: "Developer",
    writable: true
  },

  city: {
    value: "Baku",
    writable: true
  }
});


// ==================== getOwnPropertyDescriptors ====================

// Gets descriptors for all own properties.

const descriptors =
  Object.getOwnPropertyDescriptors(person);

console.log(descriptors);


// ==================== Copying Descriptors ====================

// Object.assign() copies values,
// but not property descriptors.

const clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(person)
);


// ==================== Accessor Properties ====================

// Accessor properties use:
// → get
// → set

const account = {
  firstName: "Misaq",
  lastName: "Dev",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(account.fullName);


// ==================== Summary ====================

// writable
// → Controls value changes.

// enumerable
// → Controls enumeration.

// configurable
// → Controls deletion and descriptor changes.

// defineProperty()
// → Defines one property.

// defineProperties()
// → Defines multiple properties.

// getOwnPropertyDescriptor()
// → Gets one property's descriptor.

// getOwnPropertyDescriptors()
// → Gets all property descriptors.

