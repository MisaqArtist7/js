/**
 * ============================================================================
 * EVENT DELEGATION
 * ============================================================================
 *
 * Event Delegation
 * → A pattern where one handler on a parent handles events
 *   from many child elements.
 *
 * It works mainly because of Event Bubbling.
 *
 * ============================================================================
 * BASIC PATTERN
 * ============================================================================
 *
 * Instead of:
 *
 *   buttons.forEach(button => {
 *       button.addEventListener("click", handler);
 *   });
 *
 * We can use:
 *
 *   container.addEventListener("click", (event) => {
 *       // handle child
 *   });
 *
 * The event bubbles from the child to the parent.
 *
 * ============================================================================
 * EVENT.TARGET
 * ============================================================================
 *
 * event.target
 * → The element where the event originally happened.
 *
 * Example:
 *
 *   container.addEventListener("click", (event) => {
 *       console.log(event.target);
 *   });
 *
 * ============================================================================
 * MATCHES
 * ============================================================================
 *
 *   if (event.target.matches("button")) {
 *       // clicked element is a button
 *   }
 *
 * matches() checks whether an element matches a CSS selector.
 *
 * ============================================================================
 * CLOSEST
 * ============================================================================
 *
 * The target may be a nested element:
 *
 *   <button>
 *       <span>Delete</span>
 *   </button>
 *
 * Clicking <span> makes:
 *
 *   event.target → span
 *
 * We can find the button with:
 *
 *   const button = event.target.closest("button");
 *
 * ============================================================================
 * CONTAINS
 * ============================================================================
 *
 * After using closest(), make sure the element belongs
 * to the intended container.
 *
 *   const element = event.target.closest(".item");
 *
 *   if (!element) return;
 *   if (!container.contains(element)) return;
 *
 * This is especially important when nested structures exist.
 *
 * ============================================================================
 * DYNAMIC ELEMENTS
 * ============================================================================
 *
 * Event Delegation works with elements added later.
 *
 *   container.addEventListener("click", handler);
 *
 * New children do not need their own event listeners.
 *
 * This makes delegation useful for dynamic UIs.
 *
 * ============================================================================
 * DATA-ACTION
 * ============================================================================
 *
 * We can describe an action using data-* attributes:
 *
 *   <button data-action="save">Save</button>
 *
 * Then:
 *
 *   const action = event.target.dataset.action;
 *
 * The action can be used to call the corresponding method.
 *
 * ============================================================================
 * BEHAVIOR PATTERN
 * ============================================================================
 *
 * data-* attributes can describe reusable behaviors.
 *
 * Example:
 *
 *   <button data-counter>+</button>
 *
 * A document-level handler can detect data-counter
 * and perform the behavior.
 *
 * ============================================================================
 * DOCUMENT HANDLERS
 * ============================================================================
 *
 * For document-level delegation, prefer:
 *
 *   document.addEventListener("click", handler);
 *
 * instead of:
 *
 *   document.onclick = handler;
 *
 * because onclick can be overwritten by another handler.
 *
 * ============================================================================
 * LIMITATIONS
 * ============================================================================
 *
 * Event Delegation requires an event that bubbles.
 *
 * Some events do not bubble.
 *
 * Also, stopPropagation() in lower-level handlers
 * can prevent the delegated handler from receiving the event.
 *
 * ============================================================================
 * MAIN MENTAL MODEL
 * ============================================================================
 *
 * Child event
 *     ↓
 * Event Bubbling
 *     ↓
 * Parent handler
 *     ↓
 * event.target
 *     ↓
 * matches() / closest()
 *     ↓
 * Handle the correct element
 *
 * ============================================================================
 * MAIN BENEFITS
 * ============================================================================
 *
 * → Fewer event handlers
 * → Less code
 * → Works naturally with dynamic elements
 * → Easier to add/remove many similar elements
 * → Foundation for many dynamic UI patterns
 *
 * ============================================================================
 */

