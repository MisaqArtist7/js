/**

* ============================================================================
* MOUSE DRAG & DROP
* ============================================================================
*
* Drag & Drop can be implemented using mouse events:
*
* mousedown → start
* mousemove → move
* mouseup   → finish
*
* ============================================================================
* BASIC ALGORITHM
* ============================================================================
*
* 1. mousedown
* → Prepare the element for dragging.
*
* 2. mousemove
* → Update its left/top position.
*
* 3. mouseup
* → Stop moving and remove temporary handlers.
*
* Usually mousemove is attached to document,
* not the draggable element.
*
* ============================================================================
* WHY DOCUMENT?
* ============================================================================
*
* Mousemove events may be missed when the pointer moves very fast
* and leaves the draggable element.
*
* Therefore:
*
* document.addEventListener("mousemove", onMouseMove);
*
* This makes dragging more reliable.
*
* ============================================================================
* ABSOLUTE POSITIONING
* ============================================================================
*
* Dragged elements are commonly positioned with:
*
* position: absolute;
*
* Then their position can be controlled with:
*
* element.style.left = "...px";
* element.style.top = "...px";
*
* ============================================================================
* KEEP THE INITIAL SHIFT
* ============================================================================
*
* If the user grabs the element from its edge,
* the element should not suddenly jump under the pointer.
*
* Calculate the initial offset:
*
* const shiftX =
* ```
    event.clientX - element.getBoundingClientRect().left;
  ```
*
* const shiftY =
* ```
    event.clientY - element.getBoundingClientRect().top;
  ```
*
* Then keep this offset while dragging:
*
* element.style.left =
* ```
    event.pageX - shiftX + "px";
  ```
*
* element.style.top =
* ```
    event.pageY - shiftY + "px";
  ```
*
* Mental model:
*
* new position = mouse position - initial shift
*
* ============================================================================
* NATIVE DRAGGING
* ============================================================================
*
* Images and some other elements have native browser Drag & Drop behavior.
*
* It can conflict with custom mouse-based dragging.
*
* Disable it when necessary:
*
* element.ondragstart = () => false;
*
* ============================================================================
* DROP TARGETS
* ============================================================================
*
* A draggable element can cover the element underneath it.
*
* Therefore mouse events may not reach the underlying droppable.
*
* Use:
*
* document.elementFromPoint(clientX, clientY)
*
* to find the topmost element at given viewport coordinates.
*
* While dragging:
*
* element.hidden = true;
* const below = document.elementFromPoint(
* ```
    event.clientX,
  ```
* ```
    event.clientY
  ```
* );
* element.hidden = false;
*
* Then find a droppable ancestor:
*
* const droppable = below?.closest(".droppable");
*
* ============================================================================
* CURRENT DROPPABLE
* ============================================================================
*
* Keep track of the current drop target:
*
* let currentDroppable = null;
*
* If it changes:
*
* leaveDroppable(old);
* enterDroppable(new);
*
* This allows us to highlight the target while dragging.
*
* ============================================================================
* IMPORTANT CONNECTIONS
* ============================================================================
*
* Drag & Drop combines several previous concepts:
*
* Mouse Events
* → mousedown / mousemove / mouseup
*
* Coordinates
* → clientX/Y and pageX/Y
*
* DOM
* → style.left / style.top
*
* Default Actions
* → prevent native dragging
*
* Event Delegation
* → can manage many draggable elements
*
* elementFromPoint()
* → detect the element underneath the pointer
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* mousedown
* → remember initial shift
* → prepare element
*
* mousemove
* → calculate new position
* → move element
* → detect droppable
*
* mouseup
* → stop dragging
* → finish the drop
*
* ============================================================================
  */
