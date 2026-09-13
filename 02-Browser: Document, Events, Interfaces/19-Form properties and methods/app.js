/**

* ============================================================================
* KEYBOARD EVENTS
* ============================================================================
*
* Keyboard events let us detect keyboard interactions.
*
* ============================================================================
* MAIN EVENTS
* ============================================================================
*
* keydown
* → Fires when a key is pressed.
*
* keyup
* → Fires when a key is released.
*
* A held key can trigger repeated keydown events.
*
* event.repeat
* → true when keydown is caused by auto-repeat.
*
* ============================================================================
* KEY VS CODE
* ============================================================================
*
* event.key
* → The logical value / meaning of the key.
*
* Examples:
*
* "a"
* "A"
* "Enter"
* "ArrowLeft"
*
* event.code
* → The physical key position.
*
* Examples:
*
* "KeyA"
* "Enter"
* "ArrowLeft"
* "ShiftLeft"
*
* Mental model:
*
* key  → what key/value was produced?
* code → which physical key was pressed?
*
* ============================================================================
* KEYBOARD LAYOUT
* ============================================================================
*
* Use event.key when the actual character/value matters.
*
* Use event.code when the physical key matters,
* for example in keyboard controls or games.
*
* ============================================================================
* MODIFIER KEYS
* ============================================================================
*
* Keyboard events provide modifier states:
*
* event.shiftKey
* event.ctrlKey
* event.altKey
* event.metaKey
*
* They return true / false.
*
* ============================================================================
* DEFAULT ACTION
* ============================================================================
*
* Keyboard events can trigger browser default actions.
*
* Examples:
*
* character key → inserts text
* PageDown      → scrolls page
* Ctrl + S      → browser save action
*
* Cancel the default action with:
*
* event.preventDefault();
*
* ============================================================================
* INPUT EVENTS
* ============================================================================
*
* Do NOT use keydown to detect every change to an input's value.
*
* Input can change through:
*
* Keyboard
* Paste
* Mobile input
* IME
* Speech input
*
* Use:
*
* input.addEventListener("input", handler);
*
* input
* → fires when the actual value changes.
*
* ============================================================================
* DEPRECATED KEYBOARD APIS
* ============================================================================
*
* Avoid legacy properties/events such as:
*
* keyCode
* charCode
* which
* keypress
*
* Prefer:
*
* event.key
* event.code
*
* ============================================================================
* HOTKEYS
* ============================================================================
*
* Modifier-based shortcut:
*
* if (event.ctrlKey && event.key === "s") {
* ```
    // action
  ```
* }
*
* For multiple simultaneously pressed keys,
* a Set can track the currently pressed keys.
*
* const pressed = new Set();
*
* keydown → pressed.add(event.code)
* keyup   → pressed.delete(event.code)
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* keydown
* → key pressed
*
* keyup
* → key released
*
* key
* → logical key/value
*
* code
* → physical key
*
* repeat
* → auto-repeat state
*
* Modifier properties
* → Shift / Ctrl / Alt / Meta state
*
* preventDefault()
* → cancel browser default action
*
* input
* → actual input value changed
*
* ============================================================================
  */
