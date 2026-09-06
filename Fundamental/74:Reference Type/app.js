// ==================== Reference Type ====================

// Reference Type → internal JavaScript specification type
// → Helps JavaScript preserve the object behind a method call


// ==================== Method Call ====================

const user = {
  name: "Ali",

  sayHi() {
    console.log(this.name);
  }
};

user.sayHi(); // Ali

// obj.method()
// → Reference keeps information about obj
// → this = obj


// ==================== Reference Structure ====================

// Reference Type conceptually contains:

// (base, name, strict)

// base   → object
// name   → property name
// strict → strict mode information

// Example:
// user.sayHi
// → (user, "sayHi", strict)


// ==================== this ====================

// user.sayHi()
// → Reference is preserved
// → JavaScript knows the method belongs to user
// → this = user


// ==================== Reference Gets Lost ====================

const hi = user.sayHi;

hi(); // undefined in strict mode

// user.sayHi → function is extracted
// → Reference information is lost
// → hi() becomes a standalone function call
// → this = undefined


// ==================== Dot vs Brackets ====================

user.sayHi();
user["sayHi"]();

// → Both preserve the Reference
// → this = user


// ==================== Parentheses ====================

(user.sayHi)();

// → Parentheses alone don't break the Reference
// → this = user


// ==================== Expressions ====================

(user.sayHi || user.other)();

// → Expression is evaluated first
// → Function becomes a normal value
// → Reference information is lost
// → this is no longer user


// ==================== Assignment ====================

const fn = user.sayHi;

// → Function is copied to another variable
// → Reference is lost

fn();


// ==================== Important Rule ====================

// obj.method()
// → Reference preserved
// → this = obj

// const fn = obj.method
// → Reference lost

// fn()
// → standalone call
// → this = undefined in strict mode


// ==================== this Is Not Fixed ====================

// this does NOT permanently belong to a function
// → this depends on how the function is called


// ==================== Semicolon Pitfall ====================

// const user = {
//   sayHi() {
//     console.log(this);
//   }
// };

// (user.sayHi)();

// → Add semicolon after object declarations
// → Prevent unexpected expression chaining


// ==================== Mental Model ====================

// obj.method()
//      ↓
// Property access
//      ↓
// Reference Type
//      ↓
// (obj, "method", strict)
//      ↓
// ()
//      ↓
// this = obj


// ==================== Summary ====================

// Reference Type → internal mechanism
// base → object
// name → property
// strict → strict mode

// Direct method call → this is preserved
// Extracted function → Reference is lost
// Expression → may lose Reference
// this → depends on the call context