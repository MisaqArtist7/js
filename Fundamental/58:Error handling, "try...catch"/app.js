// ==================== try...catch ====================

// Handles runtime errors without stopping the program.

// try
// → Runs code that may cause an error.

// catch
// → Runs when an error occurs in try.

// finally
// → Always runs, whether there is an error or not.


// ==================== Basic Example ====================

try {

  console.log(user.name);

} catch (error) {

  console.log("Something went wrong");

}


// ==================== Error Object ====================

// catch receives an Error object.

try {

  user.name;

} catch (error) {

  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

}


// ==================== throw ====================

// throw allows us to create an error manually.

try {

  const user = {
    age: 25
  };

  if (!user.name) {

    throw new Error("Name is required");

  }

} catch (error) {

  console.log(error.message);

}


// ==================== Rethrow ====================

// Handle known errors,
// but rethrow errors that we don't know.

try {

  // risky code

} catch (error) {

  if (error instanceof SyntaxError) {

    console.log("Handle syntax error");

  } else {

    throw error;

  }

}


// ==================== finally ====================

// finally always executes.

try {

  console.log("try");

} catch (error) {

  console.log("catch");

} finally {

  console.log("finally");

}


// ==================== Important ====================

// try...catch handles runtime errors,
// not syntax errors.
//
// try...catch is synchronous.
//
// For asynchronous code,
// try...catch must cover the code
// when the error actually occurs.


// ==================== Execution Flow ====================

// No error:
//
// try → finally
//
// Error:
//
// try → catch → finally
//
// throw:
//
// throw → catch


// ==================== Summary ====================

// try
// → Code that may cause an error.

// catch
// → Handles the error.

// throw
// → Creates/throws an error manually.

// finally
// → Always executes.

// Error
// → Object containing information about the error.