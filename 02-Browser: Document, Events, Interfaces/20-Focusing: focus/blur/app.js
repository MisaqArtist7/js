/**

* ============================================================================
* POINTER EVENTS
* ============================================================================
*
* Pointer Events provide one API for:
*
* Mouse
* Touch
* Pen / Stylus
*
* ============================================================================
* MAIN EVENTS
* ============================================================================
*
* pointerdown  → pointer pressed
* pointerup    → pointer released
* pointermove  → pointer moved
* pointerover  → pointer enters / moves over
* pointerout   → pointer leaves
* pointerenter → pointer enters
* pointerleave → pointer leaves
*
* Additional events:
*
* pointercancel
* gotpointercapture
* lostpointercapture
*
* ============================================================================
* POINTER PROPERTIES
* ============================================================================
*
* event.pointerId
* → Unique identifier for the current pointer.
*
* Useful for Multi-touch.
*
* event.pointerType
* → "mouse", "touch", or "pen".
*
* event.isPrimary
* → true for the primary pointer.
*
* Other device-specific properties:
*
* pressure
* width
* height
* tiltX
* tiltY
* twist
*
* ============================================================================
* MULTI-TOUCH
* ============================================================================
*
* Each touching finger gets its own pointerId.
*
* Example:
*
* Finger 1 → pointerId: 1
* Finger 2 → pointerId: 2
*
* isPrimary is true for the first/primary pointer.
*
* ============================================================================
* POINTERCANCEL
* ============================================================================
*
* pointercancel fires when the browser or device
* interrupts the current pointer interaction.
*
* For custom drag interactions, prevent browser takeover:
*
* element.ondragstart = () => false;
*
* And for touch interactions:
*
* .draggable {
* ```
    touch-action: none;
  ```
* }
*
* ============================================================================
* POINTER CAPTURE
* ============================================================================
*
* setPointerCapture(pointerId)
*
* → Captures future pointer events for that pointer
* and sends them to the element.
*
* Example:
*
* element.setPointerCapture(event.pointerId);
*
* After capture, pointer events continue to target the element
* even if the pointer moves outside it.
*
* ============================================================================
* RELEASE CAPTURE
* ============================================================================
*
* releasePointerCapture(pointerId)
*
* → Explicitly releases pointer capture.
*
* Capture is also automatically released on:
*
* pointerup
* pointercancel
* element removal
*
* ============================================================================
* DRAG & DROP
* ============================================================================
*
* Pointer capture simplifies dragging:
*
* pointerdown
* ```
    ↓
  ```
* setPointerCapture(pointerId)
* ```
    ↓
  ```
* pointermove
* ```
    ↓
  ```
* pointermove
* ```
    ↓
  ```
* pointerup
*
* We don't need to attach pointermove to document.
*
* ============================================================================
* CAPTURE EVENTS
* ============================================================================
*
* gotpointercapture
* → Pointer capture was established.
*
* lostpointercapture
* → Pointer capture was released.
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* Mouse Events
* → Mouse only.
*
* Pointer Events
* → Mouse + Touch + Pen.
*
* pointerId
* → Identify a specific pointer.
*
* pointerType
* → Identify the input device.
*
* isPrimary
* → Identify the primary pointer.
*
* pointercancel
* → Interaction was interrupted.
*
* setPointerCapture()
* → Keep receiving events for a pointer.
*
* touch-action: none
* → Prevent unwanted browser touch gestures.
*
* Pointer Events are especially useful for:
*
* Drag & Drop
* Sliders
* Touch interfaces
* Multi-touch interactions
* Stylus input
*
* ============================================================================
  */
