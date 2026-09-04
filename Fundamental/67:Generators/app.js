// // ==================== Generators ====================

// // A Generator is a special function that can
// // pause and resume its execution.
// //
// // → function* creates a Generator function
// // → yield pauses execution
// // → next() resumes execution


// // ==================== Creating a Generator ====================

// function* generate() {

//   yield 1;
//   yield 2;
//   yield 3;

// }

// const generator = generate();


// // ==================== next() ====================

// // next() resumes the Generator
// // and returns an object:
// //
// // → value → yielded value
// // → done  → whether the Generator is finished

// console.log(generator.next());
// // { value: 1, done: false }

// console.log(generator.next());
// // { value: 2, done: false }

// console.log(generator.next());
// // { value: 3, done: false }

// console.log(generator.next());
// // { value: undefined, done: true }


// // ==================== yield ====================

// // yield returns a value and pauses the Generator.

// function* generate() {

//   yield 1;

//   // Execution pauses here
//   // until next() is called again.

//   yield 2;

// }


// // ==================== return ====================

// // return() finishes the Generator immediately.

// function* generate() {

//   yield 1;
//   yield 2;
//   yield 3;

// }

// const generator = generate();

// generator.next();
// generator.return("Done");

// // { value: "Done", done: true }


// // ==================== next(value) ====================

// // next(value) sends a value back into
// // the previous yield expression.

// function* gen() {

//   const result = yield "2 + 2 = ?";

//   console.log(result);

// }

// const generator = gen();

// console.log(generator.next());
// // { value: "2 + 2 = ?", done: false }

// generator.next(4);

// // result = 4


// // ==================== Generator as Iterable ====================

// // Generators are iterable,
// // so they work with for...of and spread syntax.

// function* generate() {

//   yield 1;
//   yield 2;
//   yield 3;

// }

// for (const value of generate()) {
//   console.log(value);
// }

// console.log([...generate()]);
// // [1, 2, 3]


// // ==================== yield* ====================

// // yield* delegates to another Generator
// // and yields all of its values.

// function* numbers() {

//   yield 1;
//   yield 2;
//   yield 3;

// }

// function* all() {

//   yield* numbers();

//   yield 4;
//   yield 5;

// }

// console.log([...all()]);
// // [1, 2, 3, 4, 5]


// // ==================== generator.throw() ====================

// // throw() injects an error at the current
// // yield position.

// function* gen() {

//   try {

//     yield "Hello";

//   } catch (error) {

//     console.log(error.message);

//   }

// }

// const generator = gen();

// generator.next();

// generator.throw(new Error("Oops"));


// // ==================== Important ====================

// // A Generator does not run when it is created.
// //
// // const generator = generate();
// //
// // The function starts executing only
// // when next() is called.


// // ==================== Summary ====================

// // function*
// // → Creates a Generator function.

// // yield
// // → Returns a value and pauses execution.

// // next()
// // → Resumes execution.

// // next(value)
// // → Sends a value into the previous yield.

// // return()
// // → Finishes the Generator.

// // throw()
// // → Throws an error inside the Generator.

// // yield*
// // → Delegates to another Generator.

// // Generator
// // → Is also an iterable.
