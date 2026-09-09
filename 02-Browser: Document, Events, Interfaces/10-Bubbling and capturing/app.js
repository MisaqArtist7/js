/**
 * ============================================================================
 * BUBBLING AND CAPTURING
 * ============================================================================
 *
 * Event Propagation
 * → The process of an event moving through the DOM tree.
 *
 * Event has three main phases:
 *
 *   1. Capturing
 *   2. Target
 *   3. Bubbling
 *
 * ============================================================================
 * CAPTURING
 * ============================================================================
 *
 * Event moves from outer elements toward the target.
 *
 *   document
 *      ↓
 *    body
 *      ↓
 *    parent
 *      ↓
 *    button  ← target
 *
 * Capturing handler:
 *
 *   element.addEventListener("click", handler, {
 *       capture: true
 *   });
 *
 * ============================================================================
 * TARGET
 * ============================================================================
 *
 * The event reaches the element where the action actually happened.
 *
 * Example:
 *
 *   <div>
 *       <button>Click</button>
 *   </div>
 *
 * If the button is clicked:
 *
 *   button → target
 *
 * ============================================================================
 * BUBBLING
 * ============================================================================
 *
 * After reaching the target, the event moves upward through its ancestors.
 *
 *   button
 *      ↑
 *    parent
 *      ↑
 *    body
 *      ↑
 *   document
 *
 * Bubbling is the default phase for addEventListener().
 *
 * ============================================================================
 * EVENT.TARGET
 * ============================================================================
 *
 * event.target
 * → The element where the event originally occurred.
 *
 * Example:
 *
 *   parent.addEventListener("click", (event) => {
 *       console.log(event.target);
 *   });
 *
 * If the button was clicked:
 *
 *   event.target → button
 *
 * ============================================================================
 * EVENT.CURRENTTARGET
 * ============================================================================
 *
 * event.currentTarget
 * → The element whose handler is currently executing.
 *
 * Example:
 *
 *   parent.addEventListener("click", (event) => {
 *       console.log(event.currentTarget);
 *   });
 *
 *   event.currentTarget → parent
 *
 * Main difference:
 *
 *   target
 *   → Where the event started.
 *
 *   currentTarget
 *   → Where the current handler is running.
 *
 * ============================================================================
 * STOP PROPAGATION
 * ============================================================================
 *
 * event.stopPropagation()
 * → Stops the event from continuing through the DOM.
 *
 * Example:
 *
 *   button.addEventListener("click", (event) => {
 *       event.stopPropagation();
 *   });
 *
 * This prevents the event from reaching ancestor elements.
 *
 * ============================================================================
 * STOP IMMEDIATE PROPAGATION
 * ============================================================================
 *
 * event.stopImmediatePropagation()
 * → Stops propagation AND prevents other handlers
 *   on the same element from running.
 *
 * ============================================================================
 * MAIN MENTAL MODEL
 * ============================================================================
 *
 * Capturing
 * → Outside → Target
 *
 * Target
 * → Event reaches the actual element.
 *
 * Bubbling
 * → Target → Outside
 *
 * event.target
 * → Original event element.
 *
 * event.currentTarget
 * → Element handling the event now.
 *
 * stopPropagation()
 * → Stops propagation to other elements.
 *
 * ============================================================================
 * IMPORTANT
 * ============================================================================
 *
 * Bubbling is the foundation of Event Delegation.
 *
 * Instead of adding handlers to many child elements,
 * we can often add one handler to their parent
 * and use event.target to determine what was clicked.
 *
 * ============================================================================
 */
