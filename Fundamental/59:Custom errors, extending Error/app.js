// ==================== Custom Errors ====================

// Custom errors allow us to create specific error types
// for our application's own logic.
//
// Examples:
// → ValidationError
// → UserNotFoundError
// → HttpError


// ==================== Custom Error ====================

// Create a custom error by extending Error.

class ValidationError extends Error {

  constructor(message) {

    super(message);

    this.name = "ValidationError";

  }

}


// ==================== Throw Custom Error ====================

function createUser(email) {

  if (!email.includes("@")) {

    throw new ValidationError("Invalid email");

  }

  return {
    email
  };

}


// ==================== Handling Custom Errors ====================

try {

  createUser("misaq.com");

} catch (error) {

  if (error instanceof ValidationError) {

    console.log("Validation failed:", error.message);

  } else {

    throw error;

  }

}


// ==================== instanceof ====================

// Checks whether an error belongs to a specific class.

const error = new ValidationError("Invalid email");

console.log(error instanceof ValidationError);
// true

console.log(error instanceof Error);
// true


// ==================== Error Inheritance ====================

// ValidationError inherits from Error.
//
// error
//   ↓
// ValidationError.prototype
//   ↓
// Error.prototype
//   ↓
// Object.prototype
//   ↓
// null


// ==================== Built-in Error Types ====================

// JavaScript provides built-in error types:
//
// → Error
// → TypeError
// → ReferenceError
// → SyntaxError
// → RangeError
// → URIError


// ==================== Rethrow ====================

// Handle known errors,
// but rethrow unknown errors.

try {

  createUser("misaq.com");

} catch (error) {

  if (error instanceof ValidationError) {

    console.log(error.message);

  } else {

    throw error;

  }

}


// ==================== Summary ====================

// Custom Error
// → A user-defined error type.

// extends Error
// → Inherits from the built-in Error class.

// super(message)
// → Calls the Error constructor.

// this.name
// → Sets the custom error name.

// instanceof
// → Checks the error type.

// Rethrow
// → Throws unknown errors again.