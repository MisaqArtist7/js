/**

* ============================================================================
* EVENT LOOP
* ============================================================================
*
* JavaScript is single-threaded:
* → one Call Stack executes JavaScript at a time.
*
* Asynchronous operations are handled by the browser/runtime,
* then their callbacks are queued for later execution.
*
* ============================================================================
* CALL STACK
* ============================================================================
*
* The Call Stack contains the JavaScript code currently being executed.
*
* function foo() {
* ```
    console.log("foo");
  ```
* }
*
* foo();
*
* Execution:
*
* foo()
* ```
   ↓
  ```
* console.log()
* ```
   ↓
  ```
* stack becomes empty
*
* ============================================================================
* TASKS
* ============================================================================
*
* Operations such as setTimeout and browser events create tasks.
*
* setTimeout(() => {
* ```
    console.log("Timeout");
  ```
* }, 0);
*
* `0ms` does NOT mean "execute immediately".
*
* The callback must wait until the current JavaScript execution
* finishes and the event loop can process the task.
*
* ============================================================================
* EVENT LOOP
* ============================================================================
*
* Simplified model:
*
* Is Call Stack empty?
* ```
       ↓
  ```
* ```
      Yes
  ```
* ```
       ↓
  ```
* Process queued work
* ```
       ↓
  ```
* Execute callback
*
* The event loop coordinates when queued callbacks can enter
* the Call Stack.
*
* ============================================================================
* MICROTASKS
* ============================================================================
*
* Promises use the Microtask Queue.
*
* Promise.resolve().then(() => {
* ```
    console.log("microtask");
  ```
* });
*
* Other common microtasks:
*
* Promise.then()
* Promise.catch()
* Promise.finally()
* queueMicrotask()
*
* ============================================================================
* TASK VS MICROTASK
* ============================================================================
*
* Example:
*
* console.log("A");
*
* setTimeout(() => console.log("B"), 0);
*
* Promise.resolve().then(() => console.log("C"));
*
* console.log("D");
*
* Output:
*
* A
* D
* C
* B
*
* Why?
*
* 1. Synchronous code runs first.
* 2. Call Stack becomes empty.
* 3. Microtasks are processed.
* 4. Then the next Task is processed.
*
* General order:
*
* Synchronous code
* ```
     ↓
  ```
* Microtasks
* ```
     ↓
  ```
* Next Task
*
* ============================================================================
* MICROTASK QUEUE
* ============================================================================
*
* Microtasks are processed until the queue becomes empty.
*
* If a microtask creates another microtask, the new one is also
* processed before moving to the next Task.
*
* Therefore, an endless stream of microtasks can prevent
* Tasks and rendering from getting a chance to run.
*
* ============================================================================
* RENDERING
* ============================================================================
*
* The browser needs the Main Thread for JavaScript and rendering.
*
* A long-running synchronous task can block the UI:
*
* for (let i = 0; i < 10000000000; i++) {
* ```
    // heavy work
  ```
* }
*
* While JavaScript is busy, the browser cannot freely update
* the page or respond to user interaction.
*
* Heavy work should be split into smaller tasks or moved to
* a Web Worker when appropriate.
*
* ============================================================================
* MENTAL MODEL
* ============================================================================
*
* Call Stack
* → JavaScript currently executing
*
* Task Queue
* → callbacks such as timers and browser events
*
* Microtask Queue
* → Promise callbacks and queueMicrotask()
*
* Event Loop
* → controls when queued work can run
*
* Main rule:
*
* Synchronous code
* ```
     ↓
  ```
* Microtasks
* ```
     ↓
  ```
* Next Task
* ```
     ↓
  ```
* Microtasks
* ```
     ↓
  ```
* ...
*
* ============================================================================
  */
