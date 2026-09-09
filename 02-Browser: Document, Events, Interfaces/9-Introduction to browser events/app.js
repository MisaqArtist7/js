/**
 * ============================================================================
 * INTRODUCTION TO BROWSER EVENTS
 * ============================================================================
 *
 * Event
 * → An event is an action or occurrence detected by the browser.
 *
 * Examples:
 *   click
 *   keydown
 *   keyup
 *   submit
 *   focus
 *   mouseover
 *   DOMContentLoaded
 *
 * ============================================================================
 * EVENT HANDLER
 * ============================================================================
 *
 * Handler
 * → A function that runs when a specific event occurs.
 *
 * Example:
 *
 *   button.onclick = function () {
 *       console.log("Clicked");
 *   };
 *
 * ============================================================================
 * THREE WAYS TO ASSIGN HANDLERS
 * ============================================================================
 *
 * 1. HTML attribute:
 *
 *   <button onclick="alert('Hello')">Click</button>
 *
 * 2. DOM property:
 *
 *   button.onclick = handler;
 *
 * 3. addEventListener():
 *
 *   button.addEventListener("click", handler);
 *
 * ============================================================================
 * ADD EVENT LISTENER
 * ============================================================================
 *
 * addEventListener() is the recommended and flexible approach.
 *
 *   button.addEventListener("click", handler1);
 *   button.addEventListener("click", handler2);
 *
 * Multiple handlers can listen to the same event.
 *
 * ============================================================================
 * REMOVE EVENT LISTENER
 * ============================================================================
 *
 *   button.removeEventListener("click", handler1);
 *
 * Important:
 * removeEventListener() needs the SAME function reference.
 *
 * Correct:
 *
 *   function handler() {}
 *   button.addEventListener("click", handler);
 *   button.removeEventListener("click", handler);
 *
 * ============================================================================
 * EVENT OBJECT
 * ============================================================================
 *
 * The browser passes an Event object to the handler.
 *
 *   button.addEventListener("click", function(event) {
 *       console.log(event);
 *   });
 *
 * Useful properties:
 *
 *   event.type
 *   → Type of the event.
 *
 *   event.currentTarget
 *   → Element whose handler is currently executing.
 *
 * ============================================================================
 * THIS
 * ============================================================================
 *
 * In a regular event handler:
 *
 *   button.onclick = function() {
 *       console.log(this);
 *   };
 *
 * this usually refers to the element that owns the handler.
 *
 * event.currentTarget is often clearer and more explicit.
 *
 * ============================================================================
 * IMPORTANT DIFFERENCE
 * ============================================================================
 *
 *   button.onclick = handler;
 *   → One onclick property can hold one handler.
 *
 *   button.addEventListener("click", handler);
 *   → Multiple handlers can be attached.
 *
 * ============================================================================
 * FUNCTION REFERENCE
 * ============================================================================
 *
 * Correct:
 *
 *   button.addEventListener("click", sayThanks);
 *
 * Wrong:
 *
 *   button.addEventListener("click", sayThanks());
 *
 * sayThanks
 * → Pass the function.
 *
 * sayThanks()
 * → Execute the function immediately.
 *
 * ============================================================================
 * DOMCONTENTLOADED
 * ============================================================================
 *
 *   document.addEventListener("DOMContentLoaded", () => {
 *       console.log("DOM is ready");
 *   });
 *
 * This event fires when the HTML has been fully parsed
 * and the DOM tree has been created.
 *
 * ============================================================================
 * MAIN MENTAL MODEL
 * ============================================================================
 *
 * Event
 * → Something happened.
 *
 * Handler
 * → Function that reacts to it.
 *
 * addEventListener()
 * → Connect handler to an event.
 *
 * removeEventListener()
 * → Remove that specific handler.
 *
 * Event object
 * → Contains information about the event.
 *
 * ============================================================================
 */

