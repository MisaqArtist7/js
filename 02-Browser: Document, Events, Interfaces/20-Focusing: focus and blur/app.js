/**

* ============================================================================
* FOCUS AND BLUR
* ============================================================================
*
* focus and blur are browser events related to an element's focus state.
*
* ============================================================================
* FOCUS
* ============================================================================
*
* "focus" fires when an element receives focus.
*
* input.addEventListener("focus", () => {
* ```
    console.log("focused");
  ```
* });
*
* Focus can happen by:
*
* → Mouse click
* → Keyboard (Tab)
* → JavaScript
*
* ============================================================================
* BLUR
* ============================================================================
*
* "blur" fires when an element loses focus.
*
* input.addEventListener("blur", () => {
* ```
    console.log("lost focus");
  ```
* });
*
* Example:
*
* Input A → focus
* Input B → focus
*
* When moving from A to B:
*
* Input A → blur
* Input B → focus
*
* ============================================================================
* ACTIVE ELEMENT
* ============================================================================
*
* document.activeElement
* → Returns the element that currently has focus.
*
* console.log(document.activeElement);
*
* Mental model:
*
* focus
* → focus started
*
* blur
* → focus ended
*
* document.activeElement
* → who has focus right now?
*
* ============================================================================
* FOCUS() AND BLUR()
* ============================================================================
*
* JavaScript can control focus:
*
* input.focus();
* input.blur();
*
* focus()
* → Gives focus to the element.
*
* blur()
* → Removes focus from the element.
*
* ============================================================================
* FOCUS AND BUBBLING
* ============================================================================
*
* focus and blur do NOT bubble.
*
* For event delegation, use:
*
* focusin
* focusout
*
* These events bubble.
*
* Capturing can also be used:
*
* form.addEventListener("focus", handler, true);
*
* ============================================================================
* TABINDEX
* ============================================================================
*
* tabindex controls keyboard focusability.
*
* <div tabindex="0">Hello</div>
*
* tabindex="0"
* → Element participates in the normal Tab order.
*
* tabindex="-1"
* → Element can be focused programmatically,
* but is not included in the normal Tab order.
*
* element.focus();
*
* ============================================================================
* PREVENT SCROLL
* ============================================================================
*
* focus() can scroll the page to make the element visible.
*
* To prevent that:
*
* element.focus({
* ```
    preventScroll: true
  ```
* });
*
* ============================================================================
* VALIDATION
* ============================================================================
*
* blur is commonly used for input validation:
*
* input.addEventListener("blur", () => {
* ```
    if (input.value === "") {
  ```
* ```
        // show error
  ```
* ```
    }
  ```
* });
*
* It is useful when the user finishes editing a field
* and moves to another element.
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* focus
* → element receives focus
*
* blur
* → element loses focus
*
* focus()
* → give focus with JavaScript
*
* blur()
* → remove focus with JavaScript
*
* document.activeElement
* → currently focused element
*
* tabindex="0"
* → normal Tab order
*
* tabindex="-1"
* → JS-focusable, not normal Tab order
*
* focusin / focusout
* → bubbling alternatives to focus / blur
*
* ============================================================================
*/
