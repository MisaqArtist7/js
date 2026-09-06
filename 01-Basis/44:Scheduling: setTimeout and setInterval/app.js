// ==================== Scheduling ====================

// JavaScript can schedule a function
// to run later instead of running it immediately.

// setTimeout
// → Runs a function once after a delay.

// setInterval
// → Runs a function repeatedly at a given interval.


// ==================== setTimeout ====================

// setTimeout schedules a function to run once
// after the specified delay.

// Delay is measured in milliseconds.
// 1000 milliseconds = 1 second.

setTimeout(() => {
  console.log("Hello");
}, 1000);


// ==================== Passing a Function ====================

// setTimeout expects a function reference.

// Correct:
function sayHi() {
  console.log("Hi");
}

setTimeout(sayHi, 1000);


// Do not call the function immediately.

// Wrong:
// setTimeout(sayHi(), 1000);


// sayHi
// → Passes the function.

// sayHi()
// → Executes the function immediately
//   and passes its return value to setTimeout.


// ==================== Passing Arguments ====================

// Arguments can be passed after the delay.

function greet(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greet, 1000, "Misaq");


// An arrow function can also be used.

setTimeout(() => {
  greet("Misaq");
}, 1000);


// ==================== clearTimeout ====================

// setTimeout returns a timer identifier.

const timerId = setTimeout(() => {
  console.log("This will not run");
}, 3000);


// clearTimeout cancels the scheduled execution.

clearTimeout(timerId);


// ==================== setInterval ====================

// setInterval repeatedly executes a function
// after the specified interval.

const intervalId = setInterval(() => {
  console.log("tick");
}, 1000);


// Stop the interval when it is no longer needed.

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);


// ==================== setInterval vs setTimeout ====================

// setTimeout
// → Runs once.

setTimeout(() => {
  console.log("Once");
}, 1000);


// setInterval
// → Runs repeatedly.

const id = setInterval(() => {
  console.log("Repeated");
}, 1000);

clearInterval(id);


// ==================== Nested setTimeout ====================

// A function can schedule itself again
// using another setTimeout.

function run() {
  console.log("Run");

  setTimeout(run, 1000);
}

setTimeout(run, 1000);


// The next execution is scheduled
// after the current function finishes.


// ==================== Why Nested setTimeout? ====================

// Nested setTimeout is more flexible than setInterval.

// It allows the next delay to depend
// on the result of the current execution.

function request() {
  // Send request...

  // The next call can be scheduled
  // with a different delay if necessary.

  setTimeout(request, 5000);
}

setTimeout(request, 5000);


// ==================== setInterval and Execution Time ====================

// setInterval schedules calls based on the interval,
// but the execution time of the function
// also affects the actual timing.

// If the function takes longer than the interval,
// the next call cannot start until the current
// execution finishes.


// ==================== Zero Delay ====================

// A delay of 0 does not mean "run immediately".

setTimeout(() => {
  console.log("World");
}, 0);

console.log("Hello");

// Output:
// Hello
// World


// The callback runs after the current script finishes.


// ==================== Closures and Timers ====================

// Timer callbacks can form closures
// and remember variables from their outer scope.

function startCounter() {
  let count = 0;

  setInterval(() => {
    console.log(++count);
  }, 1000);
}

startCounter();


// The callback remembers "count"
// through its closure.


// ==================== Garbage Collection ====================

// The scheduler keeps a reference to the callback
// while the timer is active.

// Therefore, the callback and its outer lexical environment
// can remain in memory while the timer is active.

// Cancel timers when they are no longer needed.


// ==================== Important Notes ====================

// Timer delays are not guaranteed to be exact.

// The actual execution can be delayed by:
// → CPU load
// → Other running JavaScript code
// → Background browser tabs
// → Power-saving modes
// → Operating system conditions


// ==================== Summary ====================

// setTimeout
// → Executes a function once after a delay.

// clearTimeout
// → Cancels a scheduled setTimeout.

// setInterval
// → Executes a function repeatedly.

// clearInterval
// → Stops a setInterval.

// Nested setTimeout
// → Schedules the next execution after
//   the current execution finishes.
// → More flexible than setInterval.

// setTimeout(fn, 0)
// → Runs the callback as soon as possible,
//   but only after the current script finishes.

// Timers
// → Do not guarantee exact execution time.

