/**
 * ============================================================================
 * BROWSER ENVIRONMENT
 * ============================================================================
 *
 * JavaScript can run in different environments.
 * In a web browser, the browser provides additional objects and APIs
 * that are not part of the JavaScript language itself.
 *
 * The most important browser objects are:
 * - window
 * - document
 * - navigator
 * - location
 *
 * ============================================================================
 * WINDOW
 * ============================================================================
 *
 * - `window` is the global object in the browser.
 * - It represents the browser window and provides access to many
 *   browser-related features.
 *
 *   window.alert("Hello");
 *
 * - Because `window` is the global object, many of its properties and
 *   methods can be accessed without explicitly writing `window`.
 *
 *   window.alert("Hello");
 *   alert("Hello");
 *
 *   window.document;
 *   document;
 *
 * ============================================================================
 * DOCUMENT
 * ============================================================================
 *
 * - `document` represents the current HTML document.
 * - It is available as `window.document`.
 * - It provides access to the DOM (Document Object Model).
 *
 *   document.body;
 *   document.title;
 *
 * - JavaScript can use `document` to access and modify the HTML page.
 *
 * ============================================================================
 * DOM
 * ============================================================================
 *
 * - DOM stands for Document Object Model.
 * - The browser parses the HTML document and creates a DOM tree.
 * - Each HTML element becomes a node/object in this tree.
 *
 *   HTML:
 *
 *   <body>
 *     <h1>Hello</h1>
 *     <p>Welcome</p>
 *   </body>
 *
 *   DOM:
 *
 *   document
 *      |
 *     html
 *      |
 *     body
 *     /  \
 *   h1    p
 *
 * - JavaScript can use the DOM to access, modify, add, or remove
 *   elements and their content.
 *
 *   document.querySelector("h1").textContent = "Hello Misaq";
 *
 * ============================================================================
 * BOM
 * ============================================================================
 *
 * - BOM stands for Browser Object Model.
 * - It provides objects and functions for interacting with the browser
 *   environment rather than the HTML document itself.
 *
 *   location  → information about the current URL and navigation
 *   navigator → information about the browser and environment
 *   alert()   → displays a browser dialog
 *
 * ============================================================================
 * CSSOM
 * ============================================================================
 *
 * - CSSOM stands for CSS Object Model.
 * - It represents the CSS rules and styles associated with a document.
 * - JavaScript can also modify styles through the DOM.
 *
 *   element.style.color = "red";
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 *   window
 *      → Global browser object
 *
 *   document
 *      → Represents the current HTML document
 *
 *   DOM
 *      → Object model of the HTML document
 *
 *   BOM
 *      → Objects and APIs related to the browser environment
 *
 *   CSSOM
 *      → Object model of CSS rules and styles
 *
 * ============================================================================
 * KEY IDEA
 * ============================================================================
 *
 * - JavaScript itself does not know what HTML, the browser window, or
 *   the current URL are.
 * - The browser provides these features through browser APIs.
 *
 *   JavaScript
 *       ↓
 *   Browser Environment
 *       ↓
 *   window
 *       ├── document → DOM → HTML page
 *       ├── location → URL / navigation
 *       └── navigator → browser information
 *
 */

