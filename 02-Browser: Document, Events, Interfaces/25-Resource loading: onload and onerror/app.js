/**
 * ============================================================================
 * PAGE LIFECYCLE: DOMContentLoaded, load, beforeunload, unload
 * ============================================================================
 *
 * A page has 3 important lifecycle events:
 *
 * → DOMContentLoaded  – HTML is parsed, DOM tree is built
 * → load              – DOM + all resources (images, styles) are loaded
 * → beforeunload/unload – the user is leaving the page
 *
 * ============================================================================
 * DOMCONTENTLOADED
 * ============================================================================
 *
 * Fires on `document`. Must use addEventListener:
 *
 * document.addEventListener("DOMContentLoaded", () => {
 * ```
    console.log("DOM ready");
  ```
 * });
 *
 * → DOM is ready, but images/stylesheets may still be loading.
 * → document.querySelector etc. are safe to use here.
 *
 * ============================================================================
 * SCRIPTS BLOCK DOMCONTENTLOADED
 * ============================================================================
 *
 * <script src="lib.js"></script>
 *
 * → Browser must execute this before continuing to build the DOM.
 * → DOMContentLoaded waits for it.
 *
 * Exceptions (do NOT block DOMContentLoaded):
 *
 * → <script async src="...">
 * → scripts created dynamically via document.createElement('script')
 *
 * ============================================================================
 * STYLES CAN DELAY SCRIPTS (INDIRECTLY DELAY DOMCONTENTLOADED)
 * ============================================================================
 *
 * <link rel="stylesheet" href="style.css">
 * <script>
 * ```
    // waits for style.css to finish loading first
    getComputedStyle(document.body).marginTop;
  ```
 * </script>
 *
 * → CSS itself doesn't block DOMContentLoaded.
 * → But a <script> placed AFTER a stylesheet must wait for it,
 *   which in turn delays DOMContentLoaded.
 *
 * ============================================================================
 * WINDOW.ONLOAD
 * ============================================================================
 *
 * window.onload = function() {
 * ```
    console.log("everything loaded");
  ```
 * };
 *
 * → Fires when DOM + images + styles + all resources are fully loaded.
 * → Safe place to read final image sizes / computed layout.
 * → Fires later than DOMContentLoaded.
 *
 * ============================================================================
 * WINDOW.ONUNLOAD
 * ============================================================================
 *
 * window.addEventListener("unload", () => {
 * ```
    navigator.sendBeacon("/analytics", JSON.stringify(data));
  ```
 * });
 *
 * → Fires when the user is finally leaving.
 * → No time for delays or asking the user anything.
 * → navigator.sendBeacon() sends data in the background without
 *   delaying the page transition (limit: 64kb, sent as POST).
 *
 * ============================================================================
 * WINDOW.ONBEFOREUNLOAD
 * ============================================================================
 *
 * window.addEventListener("beforeunload", event => {
 * ```
    event.returnValue = "You have unsaved changes. Leave anyway?";
  ```
 * });
 *
 * → Fires right before the user leaves/closes the page.
 * → Used to confirm navigation away (e.g. unsaved changes).
 *
 * Important:
 *
 * event.preventDefault()
 * → does NOT work in most browsers for this event.
 *
 * event.returnValue = "some string"
 * → this is what actually triggers the browser's confirmation dialog.
 *
 * Note: modern browsers show only a generic built-in message,
 * custom text is ignored (to prevent abuse).
 *
 * ============================================================================
 * DOCUMENT.READYSTATE
 * ============================================================================
 *
 * document.readyState
 *
 * → "loading"     – document is still loading
 * → "interactive" – document fully parsed (~same time as DOMContentLoaded)
 * → "complete"    – document + all resources loaded (~same time as load)
 *
 * Handles the case where your script runs AFTER the DOM is already ready:
 *
 * if (document.readyState == "loading") {
 * ```
    document.addEventListener("DOMContentLoaded", work);
  ```
 * } else {
 * ```
    work(); // DOM is already ready
  ```
 * }
 *
 * Can also track changes:
 *
 * document.addEventListener("readystatechange", () => {
 * ```
    console.log(document.readyState);
  ```
 * });
 *
 * ============================================================================
 * TYPICAL EVENT ORDER (with an <img> and <iframe> on the page)
 * ============================================================================
 *
 * readyState: loading
 * ```
    ↓
  ```
 * readyState: interactive
 * ```
    ↓
  ```
 * DOMContentLoaded
 * ```
    ↓
  ```
 * iframe onload
 * ```
    ↓
  ```
 * img onload
 * ```
    ↓
  ```
 * readyState: complete
 * ```
    ↓
  ```
 * window onload  (always fires LAST, after all other load handlers)
 *
 * ============================================================================
 * MAIN MENTAL MODEL
 * ============================================================================
 *
 * DOMContentLoaded
 * → DOM is built, safe to touch elements
 * → blocked by regular <script> tags, NOT by async/dynamic ones
 * → blocked indirectly by <link rel="stylesheet"> placed before a <script>
 *
 * load
 * → everything is loaded (DOM + images + styles)
 * → fires after DOMContentLoaded
 *
 * beforeunload
 * → user is about to leave
 * → use event.returnValue to trigger a confirm dialog
 *
 * unload
 * → user is leaving right now
 * → only quick, non-blocking work (e.g. navigator.sendBeacon)
 *
 * document.readyState
 * → "loading" / "interactive" / "complete"
 * → lets you check state instead of relying only on events
 *
 * ============================================================================
 */