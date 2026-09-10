/**

* ============================================================================
* MOUSE EVENTS BASICS
* ============================================================================
*
* Mouse events let us detect and respond to mouse interactions.
*
* ============================================================================
* MAIN MOUSE EVENTS
* ============================================================================
*
* mousedown
* → Mouse button is pressed.
*
* mouseup
* → Mouse button is released.
*
* click
* → Press + release of the mouse button.
*
* dblclick
* → Double click.
*
* mousemove
* → Mouse pointer moves over an element.
*
* mouseover / mouseout
* → Pointer enters / leaves an element.
*
* contextmenu
* → Right-click / context menu.
*
* ============================================================================
* CLICK ORDER
* ============================================================================
*
* A normal click usually follows:
*
* mousedown
* ```
    ↓
  ```
* mouseup
* ```
    ↓
  ```
* click
*
* ============================================================================
* MOUSE BUTTON
* ============================================================================
*
* event.button
*
* Identifies the button involved in mousedown / mouseup:
*
* 0 → Left
* 1 → Middle
* 2 → Right
* 3 → X1
* 4 → X2
*
* ============================================================================
* PRESSED BUTTONS
* ============================================================================
*
* event.buttons
*
* → Shows which mouse buttons are currently pressed.
*
* Unlike event.button, it can represent multiple pressed buttons.
*
* ============================================================================
* MODIFIER KEYS
* ============================================================================
*
* Mouse events can also tell us whether modifier keys were pressed:
*
* event.shiftKey
* event.altKey
* event.ctrlKey
* event.metaKey
*
* All of them return true / false.
*
* ============================================================================
* COORDINATES
* ============================================================================
*
* event.clientX / event.clientY
* → Mouse position relative to the viewport.
*
* event.pageX / event.pageY
* → Mouse position relative to the document.
*
* Mental model:
*
* client → viewport
* page   → document
*
* ============================================================================
* DEFAULT ACTION
* ============================================================================
*
* mousedown can trigger browser default actions,
* such as text selection.
*
* Prevent it with:
*
* event.preventDefault();
*
* ============================================================================
* MOUSEMOVE
* ============================================================================
*
* mousemove can fire very frequently while the pointer moves.
*
* Therefore, expensive work inside mousemove handlers
* can cause performance problems.
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* mousedown
* → button pressed
*
* mouseup
* → button released
*
* click
* → normal click
*
* dblclick
* → double click
*
* mousemove
* → pointer movement
*
* button
* → which button caused the event
*
* buttons
* → which buttons are currently pressed
*
* clientX/Y
* → viewport coordinates
*
* pageX/Y
* → document coordinates
*
* preventDefault()
* → cancel browser default action
*
* ============================================================================
  */
