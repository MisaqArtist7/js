/**
 * ============================================================================
 * HELLO, WORLD! — ATTACHING JAVASCRIPT TO HTML
 * ============================================================================
 *
 * JavaScript can be executed in a browser by using the <script> tag.
 *
 * ----------------------------------------------------------------------------
 * INLINE SCRIPTS
 * ----------------------------------------------------------------------------
 * - JavaScript code can be placed directly inside a <script> tag.
 *
 *   <script>
 *     alert("Hello, world!");
 *   </script>
 *
 * - The browser automatically executes the JavaScript when it processes
 *   the <script> tag.
 *
 * ----------------------------------------------------------------------------
 * MODERN HTML
 * ----------------------------------------------------------------------------
 * - type="text/javascript" is no longer required.
 * - language="javascript" is obsolete and unnecessary.
 * - <script> is enough for normal JavaScript code.
 *
 * ----------------------------------------------------------------------------
 * EXTERNAL SCRIPTS
 * ----------------------------------------------------------------------------
 * - JavaScript can be placed in a separate .js file and loaded with src.
 *
 *   <script src="app.js"></script>
 *
 * - Relative paths can be used:
 *   <script src="script.js"></script>
 *   <script src="./script.js"></script>
 *
 * - Multiple external scripts can be loaded with multiple <script> tags.
 *
 * ----------------------------------------------------------------------------
 * WHY USE EXTERNAL FILES?
 * ----------------------------------------------------------------------------
 * - Keeps HTML cleaner and separates HTML from JavaScript.
 * - External scripts can be cached by the browser.
 * - Cached scripts can reduce network traffic and improve page loading.
 *
 * ----------------------------------------------------------------------------
 * IMPORTANT
 * ----------------------------------------------------------------------------
 * - If a <script> tag has a src attribute, its inline content is ignored.
 *
 *   WRONG:
 *   <script src="file.js">
 *     alert(1); // ignored
 *   </script>
 *
 *   CORRECT:
 *   <script src="file.js"></script>
 *   <script>
 *     alert(1);
 *   </script>
 *
 * QUICK REVIEW:
 * - <script> → inline JavaScript
 * - <script src="app.js"></script> → external JavaScript
 * - src + inline code in the same <script> → inline code is ignored
 * - type="text/javascript" → unnecessary in modern HTML
 * - language="javascript" → obsolete
 */