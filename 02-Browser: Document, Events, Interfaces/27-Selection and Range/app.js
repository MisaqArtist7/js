/**

* ============================================================================
* SELECTION & RANGE
* ============================================================================
*
* Range = a logical area inside the DOM.
* Selection = the actual user selection in the document.
*
* Range and Selection are NOT the same thing.
*
* ============================================================================
* RANGE
* ============================================================================
*
* const range = new Range();
*
* range.setStart(node, offset);
* range.setEnd(node, offset);
*
* A Range can start in one Node and end in another Node.
*
* The meaning of `offset` depends on the Node type:
*
* Text Node
* → character position inside the text.
*
* Element Node
* → child index.
*
* ============================================================================
* RANGE PROPERTIES
* ============================================================================
*
* startContainer
* startOffset
* endContainer
* endOffset
* collapsed
* commonAncestorContainer
*
* `collapsed === true`
* → start and end point to the same position.
*
* ============================================================================
* RANGE METHODS
* ============================================================================
*
* setStart() / setEnd()
* → define the range boundaries.
*
* setStartBefore() / setStartAfter()
* setEndBefore() / setEndAfter()
* → define boundaries relative to a Node.
*
* selectNode()
* → selects the Node itself.
*
* selectNodeContents()
* → selects everything inside the Node.
*
* collapse()
* → reduces the Range to a single point.
*
* cloneRange()
* → creates a copy of the Range.
*
* ============================================================================
* MODIFYING RANGE CONTENT
* ============================================================================
*
* deleteContents()
* → removes the selected content.
*
* extractContents()
* → removes the content and returns it.
*
* cloneContents()
* → copies the content without removing it.
*
* insertNode()
* → inserts a Node at the Range position.
*
* surroundContents()
* → wraps the Range content inside an Element.
*
* `extractContents()` and `cloneContents()`
* usually return a DocumentFragment.
*
* ============================================================================
* SELECTION
* ============================================================================
*
* Selection represents the actual selection in the document.
*
* const selection = document.getSelection();
*
* To put a Range into the current Selection:
*
* selection.removeAllRanges();
* selection.addRange(range);
*
* ============================================================================
* SELECTION PROPERTIES
* ============================================================================
*
* anchorNode
* anchorOffset
* focusNode
* focusOffset
* isCollapsed
* rangeCount
*
* `anchor`
* → where the selection started.
*
* `focus`
* → where the selection ended.
*
* Unlike Range, Selection has a direction.
*
* ============================================================================
* GET SELECTED TEXT
* ============================================================================
*
* document.getSelection().toString();
*
* To preserve the DOM structure:
*
* range.cloneContents();
*
* ============================================================================
* SELECTION EVENTS
* ============================================================================
*
* selectionchange
* → fires when the document selection changes.
*
* selectstart
* → fires when selection starts.
*
* ============================================================================
* INPUT / TEXTAREA
* ============================================================================
*
* Input and textarea have their own selection API.
*
* input.selectionStart
* input.selectionEnd
* input.selectionDirection
*
* input.select()
* → selects the entire value.
*
* input.setSelectionRange(start, end)
* → selects a specific text range.
*
* input.setRangeText(...)
* → replaces part of the input value.
*
* If:
*
* selectionStart === selectionEnd
*
* nothing is selected; the position represents the cursor.
*
* ============================================================================
* CSS
* ============================================================================
*
* user-select: none;
*
* → prevents normal text selection from starting on the element.
*
* ============================================================================
* MENTAL MODEL
* ============================================================================
*
* Range
* → a logical region inside the DOM.
*
* Selection
* → the actual document selection.
*
* Range
* → setStart / setEnd
* → selectNode / selectNodeContents
* → delete / extract / clone / insert
*
* Selection
* → addRange / removeAllRanges
* → getRangeAt
* → anchor / focus
*
* Input / Textarea
* → selectionStart / selectionEnd
* → select / setSelectionRange / setRangeText
* ============================================================================
  */
