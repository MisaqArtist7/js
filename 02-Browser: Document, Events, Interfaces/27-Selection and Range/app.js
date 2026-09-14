/**

* ============================================================================
* MUTATION OBSERVER
* ============================================================================
*
* MutationObserver watches the DOM and notifies us when it changes.
*
* Instead of repeatedly checking the DOM:
*
* setInterval(() => {
* ```
    // check DOM
  ```
* }, 100);
*
* We can observe mutations directly.
*
* ============================================================================
* CREATE OBSERVER
* ============================================================================
*
* const observer = new MutationObserver(mutations => {
* ```
    console.log(mutations);
  ```
* });
*
* The callback receives an array of MutationRecord objects.
*
* ============================================================================
* START OBSERVING
* ============================================================================
*
* observer.observe(element, {
* ```
    childList: true,
  ```
* ```
    attributes: true
  ```
* });
*
* observe() defines:
*
* → What to observe
* → Which types of changes to observe
*
* ============================================================================
* CHILD LIST
* ============================================================================
*
* childList: true
*
* Detects direct child additions/removals.
*
* element.append(child);
* child.remove();
*
* ============================================================================
* ATTRIBUTES
* ============================================================================
*
* attributes: true
*
* Detects attribute changes:
*
* element.setAttribute("data-id", "123");
* element.classList.add("active");
*
* ============================================================================
* CHARACTER DATA
* ============================================================================
*
* characterData: true
*
* Detects changes to Text Nodes.
*
* ============================================================================
* SUBTREE
* ============================================================================
*
* subtree: true
*
* Observes descendants as well as the target element's
* direct children.
*
* Example:
*
* parent
* ```
  └── div
  ```
* ```
       └── span
  ```
*
* With subtree: true, changes inside div/span can also
* be observed.
*
* ============================================================================
* MUTATION RECORD
* ============================================================================
*
* Each detected mutation is represented by a MutationRecord.
*
* Important properties:
*
* mutation.type
* mutation.target
* mutation.addedNodes
* mutation.removedNodes
* mutation.attributeName
*
* type can be:
*
* "childList"
* "attributes"
* "characterData"
*
* ============================================================================
* ATTRIBUTE OPTIONS
* ============================================================================
*
* attributeFilter
* → Observe only specific attributes.
*
* attributeFilter: ["class", "data-id"]
*
* attributeOldValue
* → Include the previous attribute value.
*
* attributeOldValue: true
*
* Then:
*
* mutation.oldValue
*
* ============================================================================
* CALLBACK TIMING
* ============================================================================
*
* MutationObserver callbacks are not executed directly in the
* middle of the DOM mutation.
*
* Simplified model:
*
* DOM mutation
* ```
    ↓
  ```
* MutationRecord
* ```
    ↓
  ```
* queue
* ```
    ↓
  ```
* observer callback
*
* Multiple mutations can therefore be delivered together.
*
* ============================================================================
* DISCONNECT
* ============================================================================
*
* observer.disconnect();
*
* Stops observing mutations.
*
* Useful when a component is destroyed or observation
* is no longer needed.
*
* ============================================================================
* TAKE RECORDS
* ============================================================================
*
* observer.takeRecords();
*
* Returns pending MutationRecords that have not yet
* been delivered to the callback and clears the queue.
*
* ============================================================================
* IMPORTANT DISTINCTION
* ============================================================================
*
* MutationObserver observes DOM changes.
*
* It does NOT observe ordinary JavaScript state changes.
*
* let count = 0;
* count++;
*
* MutationObserver does not care about this.
*
* But:
*
* element.textContent = "Hello";
*
* is a DOM mutation and can be observed.
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* MutationObserver
* → watch DOM changes
*
* observe()
* → start observing
*
* childList
* → children added/removed
*
* attributes
* → attributes changed
*
* characterData
* → text node changed
*
* subtree
* → observe descendants
*
* MutationRecord
* → information about a mutation
*
* addedNodes
* → added nodes
*
* removedNodes
* → removed nodes
*
* attributeName
* → changed attribute
*
* disconnect()
* → stop observing
*
* ============================================================================
  */
