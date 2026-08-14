/**
 * ============================================================================
 * AN INTRODUCTION TO JAVASCRIPT
 * ============================================================================
 * Let’s see what’s so special about JavaScript, what we can achieve with it, 
 * and what other technologies play well with it.
 *
 * ----------------------------------------------------------------------------
 * 1. WHAT IS JAVASCRIPT?
 * ----------------------------------------------------------------------------
 * JavaScript was initially created to “make web pages alive”.
 * The programs in this language are called scripts. They can be written right 
 * in a web page’s HTML and run automatically as the page loads.
 * 
 * Scripts are provided and executed as plain text. They don’t need special 
 * preparation or compilation to run.
 * 
 * In this aspect, JavaScript is very different from another language called Java.
 *
 * --- WHY IS IT CALLED JAVASCRIPT? ---
 * When JavaScript was created, it initially had another name: “LiveScript”. 
 * But Java was very popular at that time, so it was decided that positioning 
 * a new language as a “younger brother” of Java would help.
 * 
 * But as it evolved, JavaScript became a fully independent language with its own 
 * specification called ECMAScript, and now it has no relation to Java at all.
 * 
 * Today, JavaScript can execute not only in the browser, but also on the server, 
 * or actually on any device that has a special program called the JavaScript engine.
 * 
 * The browser has an embedded engine sometimes called a “JavaScript virtual machine”.
 * Different engines have different “codenames”. For example:
 *   - V8 – in Chrome, Opera and Edge.
 *   - SpiderMonkey – in Firefox.
 *   - Chakra – for IE.
 *   - JavaScriptCore, Nitro, SquirrelFish – for Safari.
 * 
 * The terms above are good to remember because they are used in developer articles 
 * on the internet. We’ll use them too. For instance, if “a feature X is supported 
 * by V8”, then it probably works in Chrome, Opera and Edge.
 *
 * --- HOW DO ENGINES WORK? ---
 * Engines are complicated. But the basics are easy:
 *   1. The engine (embedded if it’s a browser) reads (“parses”) the script.
 *   2. Then it converts (“compiles”) the script to machine code.
 *   3. And then the machine code runs, pretty fast.
 * 
 * The engine applies optimizations at each step of the process. It even watches 
 * the compiled script as it runs, analyzes the data that flows through it, and 
 * further optimizes the machine code based on that knowledge.
 *
 * ----------------------------------------------------------------------------
 * 2. WHAT CAN IN-BROWSER JAVASCRIPT DO?
 * ----------------------------------------------------------------------------
 * Modern JavaScript is a “safe” programming language. It does not provide 
 * low-level access to memory or the CPU, because it was initially created for 
 * browsers which do not require it.
 * 
 * JavaScript’s capabilities greatly depend on the environment it’s running in. 
 * For instance, Node.js supports functions that allow JavaScript to read/write 
 * arbitrary files, perform network requests, etc.
 * 
 * In-browser JavaScript can do everything related to webpage manipulation, 
 * interaction with the user, and the webserver.
 * 
 * For instance, in-browser JavaScript is able to:
 *   - Add new HTML to the page, change the existing content, modify styles.
 *   - React to user actions, run on mouse clicks, pointer movements, key presses.
 *   - Send requests over the network to remote servers, download and upload files 
 *     (so-called AJAX and COMET technologies).
 *   - Get and set cookies, ask questions to the visitor, show messages.
 *   - Remember the data on the client-side (“local storage”).
 *
 * ----------------------------------------------------------------------------
 * 3. WHAT CAN’T IN-BROWSER JAVASCRIPT DO?
 * ----------------------------------------------------------------------------
 * JavaScript’s abilities in the browser are limited to protect the user’s safety. 
 * The aim is to prevent an evil webpage from accessing private information or 
 * harming the user’s data.
 * 
 * Examples of such restrictions include:
 *   - JavaScript on a webpage may not read/write arbitrary files on the hard disk, 
 *     copy them or execute programs. It has no direct access to OS functions.
 *   - Modern browsers allow it to work with files, but the access is limited 
 *     and only provided if the user does certain actions, like “dropping” a file 
 *     into a browser window or selecting it via an <input> tag.
 *   - There are ways to interact with the camera/microphone and other devices, 
 *     but they require a user’s explicit permission. So a JavaScript-enabled page 
 *     may not sneakily enable a web-camera, observe the surroundings and send 
 *     the information to the NSA.
 *   - Different tabs/windows generally do not know about each other. Sometimes 
 *     they do, for example when one window uses JavaScript to open the other one. 
 *     But even in this case, JavaScript from one page may not access the other 
 *     page if they come from different sites (from a different domain, protocol or port).
 *     This is called the “Same Origin Policy”.
 *   - JavaScript can easily communicate over the net to the server where the 
 *     current page came from. But its ability to receive data from other sites/domains 
 *     is severely limited. Though possible, it requires explicit agreement 
 *     (expressed in HTTP headers) from the remote side.
 * 
 * Such limitations do not exist if JavaScript is used outside of the browser, 
 * for example on a server. Modern browsers also allow plugins/extensions which 
 * may ask for extended permissions.
 *
 * ----------------------------------------------------------------------------
 * 4. WHAT MAKES JAVASCRIPT UNIQUE?
 * ----------------------------------------------------------------------------
 * There are at least three great things about JavaScript:
 *   1. Full integration with HTML/CSS.
 *   2. Simple things are done simply.
 *   3. Supported by all major browsers and enabled by default.
 * 
 * JavaScript is the only browser technology that combines these three things. 
 * That’s what makes JavaScript unique. That’s why it’s the most widespread tool 
 * for creating browser interfaces.
 * 
 * That said, JavaScript can be used to create servers, mobile applications, etc.
 *
 * ----------------------------------------------------------------------------
 * 5. LANGUAGES “OVER” JAVASCRIPT
 * ----------------------------------------------------------------------------
 * The syntax of JavaScript does not suit everyone’s needs. Different people 
 * want different features. That’s to be expected, because projects and 
 * requirements are different for everyone.
 * 
 * So, recently a plethora of new languages appeared, which are transpiled 
 * (converted) to JavaScript before they run in the browser.
 * 
 * Examples of such languages:
 *   - CoffeeScript: “Syntactic sugar” for JavaScript. Introduces shorter syntax.
 *   - TypeScript: Concentrated on adding “strict data typing” for complex systems (Microsoft).
 *   - Flow: Adds data typing in a different way (Facebook).
 *   - Dart: Standalone language with its own engine, transpiles to JS (Google).
 *   - Brython: Python transpiler to JavaScript.
 *   - Kotlin: Modern, concise and safe programming language targeting browser/Node.
 *
 * ----------------------------------------------------------------------------
 * SUMMARY
 * ----------------------------------------------------------------------------
 * - JavaScript was initially created as a browser-only language, but is now 
 *   used in many environments.
 * - Holds a unique position as the most widely-adopted browser language, 
 *   fully integrated with HTML/CSS.
 * - Many languages get “transpiled” to JS to provide extended features.
 */

console.log("JavaScript Info: 'An Introduction to JavaScript' notes loaded.");