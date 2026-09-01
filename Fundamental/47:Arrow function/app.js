// ==================== Arrow Functions ====================

// Arrow functions are a shorter function syntax.

// They have no own:
// → this
// → arguments

// ==================== this ====================

// Arrow functions use this from the outer scope.

const user = {
  name: "Misaq",

  sayHi() {
    const greet = () => {
      console.log(this.name);
    };

    greet();
  }
};

user.sayHi(); // Misaq


// ==================== arguments ====================

// Arrow functions don't have their own arguments.

// Use rest parameters instead.

const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3)); // 6


// ==================== new ====================

// Arrow functions cannot be used as constructors.

// const User = name => {
//   this.name = name;
// };

// new User("Misaq"); // TypeError


// ==================== Summary ====================

// Arrow Function
// → Shorter syntax
// → No own this
// → No own arguments
// → Cannot be used with new
// → Useful for callbacks