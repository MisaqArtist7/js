/**

* ============================================================================
* EVENTS: CHANGE, INPUT
* ============================================================================
*
* These events detect changes in form controls.
*
* The most important distinction:
*
* input
* → value changed
*
* change
* → value changed and the change was committed
*
* ============================================================================
* INPUT EVENT
* ============================================================================
*
* "input" fires whenever the value actually changes.
*
* input.addEventListener("input", () => {
* ```
    console.log(input.value);
  ```
* });
*
* It can fire for every character typed.
*
* Example:
*
* A
* Al
* Ali
*
* input fires after each change.
*
* Useful for:
*
* → Live search
* → Character counters
* → Live preview
* → Real-time validation
*
* ============================================================================
* CHANGE EVENT
* ============================================================================
*
* "change" fires when the value has changed and the user
* has finished the change according to the control's behavior.
*
* input.addEventListener("change", () => {
* ```
    console.log(input.value);
  ```
* });
*
* For text inputs, this commonly happens when the user
* changes the value and then leaves the field.
*
* ============================================================================
* SELECT
* ============================================================================
*
* "change" is especially useful with <select>:
*
* select.addEventListener("change", () => {
* ```
    console.log(select.value);
  ```
* });
*
* It fires when the selected option changes.
*
* ============================================================================
* CHECKBOX AND RADIO
* ============================================================================
*
* "change" can detect changes to checked state:
*
* checkbox.addEventListener("change", () => {
* ```
    console.log(checkbox.checked);
  ```
* });
*
* radio.addEventListener("change", () => {
* ```
    console.log(radio.checked);
  ```
* });
*
* ============================================================================
* KEYDOWN IS NOT INPUT CHANGE
* ============================================================================
*
* keydown means:
*
* → A keyboard key was pressed.
*
* It does NOT necessarily mean the input value changed.
*
* The value can change through:
*
* → Typing
* → Paste
* → Speech input
* → Drag & drop
* → Mobile input
* → IME
* → Browser features
*
* Therefore:
*
* keydown
* → keyboard activity
*
* input
* → actual value change
*
* ============================================================================
* CLIPBOARD EVENTS
* ============================================================================
*
* Specific clipboard events include:
*
* cut
* copy
* paste
*
* Example:
*
* input.addEventListener("paste", handler);
*
* Use these when the clipboard operation itself matters.
*
* If you only care that the value changed,
* "input" is usually more appropriate.
*
* ============================================================================
* BEFOREINPUT
* ============================================================================
*
* "beforeinput" fires before the value/content is changed.
*
* input.addEventListener("beforeinput", event => {
* ```
    // change is about to happen
  ```
* });
*
* Mental model:
*
* beforeinput
* → change is about to happen
*
* input
* → change happened
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* keydown
* → keyboard key pressed
*
* beforeinput
* → input change is about to happen
*
* input
* → value actually changed
*
* change
* → value changed and change was committed
*
* paste / copy / cut
* → clipboard operation
*
* ============================================================================
* PRACTICAL RULE
* ============================================================================
*
* Need a real-time reaction?
*
* → input
*
* Need the final/committed value or selection?
*
* → change
*
* Need keyboard shortcuts?
*
* → keydown / keyup
*
* Need clipboard-specific behavior?
*
* → paste / copy / cut
*
* ============================================================================
  */
