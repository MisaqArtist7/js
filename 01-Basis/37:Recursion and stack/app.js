// ==================== Recursion ====================

// Recursion means a function calls itself.
// Every recursion usually has two parts:
// 1. Base case → stops the recursion
// 2. Recursive step → calls the function again with a simpler problem


// Simple example

function countDown(n) {
  if (n === 0) {
    return; // Base case
  }

  console.log(n);

  countDown(n - 1); // Recursive step
}

countDown(3);


// Example: calculating a power

function pow(x, n) {
  if (n === 1) {
    return x; // Base case
  }

  return x * pow(x, n - 1);
}

console.log(pow(2, 4));
// 16


// Each recursive call creates an execution context.
// Active contexts are stored in the Call Stack.
//
// pow(2, 3)
//   → pow(2, 2)
//      → pow(2, 1)
//         → Base case
//
// After reaching the base case, the results return
// through the Call Stack.


/*
  Recursion is especially useful for nested structures.

  Example:
  Tree
     A
    / \
   B   C
  / \
 D   E

  Each node can contain more nodes with the same structure.
*/


// Recursion can also be used with nested objects.

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );
  }

  let sum = 0;

  for (const subDepartment of Object.values(department)) {
    sum += sumSalaries(subDepartment);
  }

  return sum;
}


// Recursion can be converted to a loop in many cases,
// but it is often cleaner for nested or recursive data structures.


// Summary:
//
// Recursion      → a function calls itself
// Base case      → stops the recursion
// Recursive step → calls the function with a simpler problem
// Call Stack     → stores active function calls
// Recursion Depth → maximum number of nested calls

