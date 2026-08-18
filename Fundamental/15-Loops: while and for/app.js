/**
 * ============================================================================
 * LOOPS: WHILE AND FOR
 * ============================================================================
 *
 * Loops are used to repeat the same block of code multiple times.
 *
 * Common loop types in JavaScript:
 *
 *    while
 *    do...while
 *    for
 *
 * Other loops:
 *
 *    for...of  -> used for iterable objects like arrays
 *    for...in  -> used for object properties
 *
 * ============================================================================
 * WHILE LOOP
 * ============================================================================
 *
 * Syntax:
 *
 *    while (condition) {
 *       // loop body
 *    }
 *
 *
 * The code inside the loop runs while the condition is truthy.
 *
 *
 * Example:
 *
 *    let i = 0;
 *
 *    while (i < 3) {
 *       console.log(i);
 *       i++;
 *    }
 *
 *
 * Output:
 *
 *    0
 *    1
 *    2
 *
 *
 * Important:
 *
 * The loop needs something that changes the condition.
 *
 * Otherwise, it can create an infinite loop.
 *
 * Example:
 *
 *    while (true) {
 *       // runs forever
 *    }
 *
 * ============================================================================
 * DO...WHILE LOOP
 * ============================================================================
 *
 * Syntax:
 *
 *    do {
 *       // loop body
 *    } while (condition);
 *
 *
 * Difference from while:
 *
 *    while:
 *       Checks the condition first.
 *
 *    do...while:
 *       Executes the code first,
 *       then checks the condition.
 *
 *
 * Example:
 *
 *    let i = 0;
 *
 *    do {
 *       console.log(i);
 *       i++;
 *    } while (i < 3);
 *
 *
 * A do...while loop always runs at least once.
 *
 * ============================================================================
 * FOR LOOP
 * ============================================================================
 *
 * The for loop is commonly used when
 * the number of iterations is known.
 *
 *
 * Syntax:
 *
 *    for (begin; condition; step) {
 *       // loop body
 *    }
 *
 *
 * Example:
 *
 *    for (let i = 0; i < 3; i++) {
 *       console.log(i);
 *    }
 *
 *
 * The three parts:
 *
 *
 *    begin:
 *       Runs once before the loop starts.
 *
 *       Example:
 *          let i = 0
 *
 *
 *    condition:
 *       Checked before every iteration.
 *
 *       If false, the loop stops.
 *
 *
 *    step:
 *       Runs after each iteration.
 *
 *       Example:
 *          i++
 *
 *
 * Execution order:
 *
 *    begin
 *       ↓
 *    condition
 *       ↓
 *    body
 *       ↓
 *    step
 *       ↓
 *    repeat
 *
 * ============================================================================
 * FOR VS WHILE
 * ============================================================================
 *
 * Use for:
 *
 *    When you know how many times
 *    something should repeat.
 *
 *
 * Example:
 *
 *    Repeat 10 times.
 *
 *
 * Use while:
 *
 *    When the number of repetitions
 *    is unknown.
 *
 *
 * Example:
 *
 *    Repeat until user enters correct password.
 *
 * ============================================================================
 * PREFIX AND POSTFIX IN LOOPS
 * ============================================================================
 *
 * Increment operators:
 *
 *    ++i  -> prefix
 *
 *    i++  -> postfix
 *
 *
 * Prefix:
 *
 *    Increase first,
 *    then use the value.
 *
 *
 * Example:
 *
 *    let i = 0;
 *
 *    console.log(++i);
 *
 *    // 1
 *
 *
 * Postfix:
 *
 *    Use the current value first,
 *    then increase.
 *
 *
 * Example:
 *
 *    let i = 0;
 *
 *    console.log(i++);
 *
 *    // 0
 *
 * ============================================================================
 * PREFIX AND POSTFIX WITH WHILE
 * ============================================================================
 *
 * Example:
 *
 *    let i = 0;
 *
 *    while (++i < 5) {
 *       console.log(i);
 *    }
 *
 *
 * Output:
 *
 *    1
 *    2
 *    3
 *    4
 *
 *
 * Because i increases before comparison.
 *
 *
 * Example:
 *
 *    let i = 0;
 *
 *    while (i++ < 5) {
 *       console.log(i);
 *    }
 *
 *
 * Output:
 *
 *    1
 *    2
 *    3
 *    4
 *    5
 *
 *
 * Because the old value is used for comparison,
 * then i increases before the body runs.
 *
 * ============================================================================
 * BREAK
 * ============================================================================
 *
 * The break statement stops the entire loop immediately.
 *
 *
 * Example:
 *
 *    for (let i = 0; i < 10; i++) {
 *
 *       if (i === 5) {
 *          break;
 *       }
 *
 *       console.log(i);
 *    }
 *
 *
 * Output:
 *
 *    0
 *    1
 *    2
 *    3
 *    4
 *
 *
 * When i becomes 5,
 * the loop stops completely.
 *
 * ============================================================================
 * CONTINUE
 * ============================================================================
 *
 * The continue statement skips the current iteration
 * and moves to the next one.
 *
 *
 * Example:
 *
 *    for (let i = 0; i < 5; i++) {
 *
 *       if (i === 2) {
 *          continue;
 *       }
 *
 *       console.log(i);
 *    }
 *
 *
 * Output:
 *
 *    0
 *    1
 *    3
 *    4
 *
 *
 * The value 2 is skipped.
 *
 * ============================================================================
 * USING CONTINUE FOR FILTERING VALUES
 * ============================================================================
 *
 * Example:
 *
 * Print only odd numbers:
 *
 *
 *    for (let i = 0; i < 10; i++) {
 *
 *       if (i % 2 === 0) {
 *          continue;
 *       }
 *
 *       console.log(i);
 *    }
 *
 *
 * Output:
 *
 *    1
 *    3
 *    5
 *    7
 *    9
 *
 *
 * % (remainder operator):
 *
 *    number % 2 === 0  -> even number
 *
 *    number % 2 !== 0  -> odd number
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * while:
 *
 *    Checks condition before each iteration.
 *
 *
 * do...while:
 *
 *    Runs once before checking condition.
 *
 *
 * for:
 *
 *    Best for counted loops.
 *
 *
 * break:
 *
 *    Stops the entire loop.
 *
 *
 * continue:
 *
 *    Skips current iteration.
 *
 *
 * Prefix:
 *
 *    ++i -> increase then use
 *
 *
 * Postfix:
 *
 *    i++ -> use then increase
 *
 * ============================================================================
 */