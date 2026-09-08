/**

* ============================================================================
* BASIC DOM NODE PROPERTIES
* ============================================================================
*
* DOM nodes are JavaScript objects with properties inherited from:
* EventTarget → Node → Element → HTMLElement → Specific Element
*
* ============================================================================
* nodeType
* ============================================================================
*
* Identifies the type of a DOM node.
*
* 1 → Element
* 3 → Text
* 9 → Document
*
* ============================================================================
* nodeName / tagName
* ============================================================================
*
* nodeName
* → Works with all types of nodes.
*
* tagName
* → Works only with Elements.
*
* ============================================================================
* innerHTML / outerHTML
* ============================================================================
*
* innerHTML
* → Gets or sets HTML inside the element.
*
* outerHTML
* → Gets the element itself + its contents.
*
* Setting `outerHTML` replaces the element in the DOM.
* The original variable still references the old element.
*
* ============================================================================
* textContent
* ============================================================================
*
* Gets or sets plain text inside an element.
*
* element.textContent = "<b>Hello</b>";
*
* The string is treated as TEXT, not HTML.
*
* ============================================================================
* hidden
* ============================================================================
*
* Controls whether an element is hidden.
*
* element.hidden = true;
* element.hidden = false;
*
* ============================================================================
* TEXT / COMMENT NODE
* ============================================================================
*
* Text and Comment nodes can use:
*
* node.data
* node.nodeValue
*
* These contain the text stored inside the node.
*
* ============================================================================
* KEY DIFFERENCES
* ============================================================================
*
* nodeType
* → Identifies the node type.
*
* nodeName
* → Name of any DOM node.
*
* tagName
* → Tag name of an Element.
*
* innerHTML
* → HTML inside the element.
*
* outerHTML
* → Element + its HTML content.
*
* textContent
* → Plain text inside the element.
*
* hidden
* → Shows or hides the element.
*

*/
