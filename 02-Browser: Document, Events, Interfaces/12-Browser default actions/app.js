/**
 * ============================================================================
 * BROWSER DEFAULT ACTIONS
 * ============================================================================
 *
 * Many browser events automatically trigger a default browser action.
 *
 * Examples:
 *
 *   click on <a>
 *   → navigation
 *
 *   submit
 *   → form submission
 *
 *   click on checkbox
 *   → check / uncheck
 *
 *   contextmenu
 *   → browser context menu
 *
 *   keydown
 *   → may insert a character or perform another action
 *
 * ============================================================================
 * PREVENT DEFAULT ACTION
 * ============================================================================
 *
 * event.preventDefault()
 * → Prevents the browser's default action.
 *
 * Example:
 *
 *   link.addEventListener("click", (event) => {
 *       event.preventDefault();
 *   });
 *
 * ============================================================================
 * RETURN FALSE
 * ============================================================================
 *
 * return false can prevent the default action when the handler
 * is assigned through on<event>.
 *
 * Example:
 *
 *   link.onclick = function () {
 *       return false;
 *   };
 *
 * But with addEventListener():
 *
 *   link.addEventListener("click", () => {
 *       return false;
 *   });
 *
 * return false is ignored.
 *
 * Prefer event.preventDefault() with addEventListener().
 *
 * ============================================================================
 * FOLLOW-UP EVENTS
 * ============================================================================
 *
 * Some events lead to other events through their default action.
 *
 * Example:
 *
 *   mousedown
 *      ↓
 *   focus
 *
 * Preventing mousedown can prevent the following focus.
 *
 * ============================================================================
 * PASSIVE HANDLER
 * ============================================================================
 *
 *   element.addEventListener("touchmove", handler, {
 *       passive: true
 *   });
 *
 * passive: true tells the browser that the handler
 * will NOT call preventDefault().
 *
 * This allows the browser to perform actions such as scrolling
 * without waiting for the handler.
 *
 * ============================================================================
 * DEFAULT PREVENTED
 * ============================================================================
 *
 * event.defaultPrevented
 *
 *   false → default action was not prevented.
 *   true  → default action was prevented.
 *
 * This can be used to communicate that an event
 * has already been handled.
 *
 * ============================================================================
 * PREVENT DEFAULT VS STOP PROPAGATION
 * ============================================================================
 *
 * event.preventDefault()
 * → Stops the browser's default behavior.
 *
 * event.stopPropagation()
 * → Stops the event from propagating through the DOM.
 *
 * They are completely different concepts.
 *
 * ============================================================================
 * SEMANTIC HTML
 * ============================================================================
 *
 * Don't replace semantic HTML with JavaScript unnecessarily.
 *
 * Use:
 *
 *   <a>
 *   → for navigation
 *
 *   <button>
 *   → for actions
 *
 * Keeping semantic HTML preserves browser features
 * and improves accessibility.
 *
 * ============================================================================
 * MAIN MENTAL MODEL
 * ============================================================================
 *
 * User Action
 *     ↓
 * Event
 *     ↓
 * Event Handler
 *     ↓
 * Default Browser Action
 *
 * preventDefault()
 * → Cancel the default action.
 *
 * defaultPrevented
 * → Check whether it was cancelled.
 *
 * passive: true
 * → Tell the browser we won't cancel the action.
 *
 * ============================================================================
 */

