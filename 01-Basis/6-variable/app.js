/**
 * ============================================================================
 * VARIABLES
 * ============================================================================
 *
 * A variable is a named storage location for data.
 *
 * ----------------------------------------------------------------------------
 * DECLARING VARIABLES
 * ----------------------------------------------------------------------------
 * - Use let to declare a variable.
 *
 *   let message;
 *   message = 'Hello';
 *
 * - Declaration and assignment can be combined:
 *
 *   let message = 'Hello';
 *
 * - A variable can be reassigned:
 *
 *   let message = 'Hello';
 *   message = 'World';
 *
 * - Declare a variable only once with let.
 *
 * ----------------------------------------------------------------------------
 * LET, CONST, AND VAR
 * ----------------------------------------------------------------------------
 * - let   → modern variable declaration; can be reassigned.
 * - const → variable cannot be reassigned.
 * - var   → old-style variable declaration; normally avoid it.
 *
 *   let age = 20;
 *   age = 21; // OK
 *
 *   const birthYear = 2000;
 *   birthYear = 2001; // Error
 *
 * - Always explicitly declare variables before using them.
 *
 * ----------------------------------------------------------------------------
 * VARIABLE NAMING
 * ----------------------------------------------------------------------------
 * - Names may contain letters, digits, $ and _.
 * - A variable name cannot start with a digit.
 * - Hyphens (-) are not allowed.
 * - JavaScript is case-sensitive:
 *   userName and username are different variables.
 *
 * - Use camelCase for multi-word variable names:
 *
 *   let currentUser;
 *   let shoppingCart;
 *
 * - Use meaningful English names.
 * - Avoid unclear names such as a, b, data, or value unless the context
 *   makes their meaning obvious.
 *
 * - Reserved words such as let, class, return, and function cannot be used
 *   as variable names.
 *
 * ----------------------------------------------------------------------------
 * CONSTANT NAMING
 * ----------------------------------------------------------------------------
 * - Hard-coded constants are commonly written in UPPER_SNAKE_CASE:
 *
 *   const COLOR_RED = '#F00';
 *
 * - Runtime constants are normally written using regular camelCase:
 *
 *   const pageLoadTime = ...;
 *
 * - UPPER_SNAKE_CASE is mainly used for aliases of hard-coded values.
 *
 * ----------------------------------------------------------------------------
 * GOOD PRACTICES
 * ----------------------------------------------------------------------------
 * - Choose names that clearly describe the stored data.
 * - Prefer descriptive and concise names.
 * - Don't be afraid to create another variable when it improves clarity.
 * - Reusing one variable for unrelated values can make code harder to debug.
 *
 * QUICK REVIEW:
 * - let = reassignable variable.
 * - const = non-reassignable variable.
 * - var = legacy declaration.
 * - Use camelCase for normal variable names.
 * - Use meaningful names.
 * - Declare variables explicitly.
 * - Use UPPER_SNAKE_CASE for hard-coded constants.
 */