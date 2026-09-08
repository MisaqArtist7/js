/**

* ============================================================================
* MODIFYING THE DOCUMENT
* ============================================================================
*
* DOM can be dynamically changed using JavaScript.
*
* ============================================================================
* CREATE ELEMENT
* ============================================================================
*
* document.createElement("div")
*
* Creates a new Element in memory.
* It does NOT automatically add the element to the document.
*
* Example:
*
* const div = document.createElement("div");
* div.textContent = "Hello";
* document.body.append(div);
*
* ============================================================================
* INSERT ELEMENTS
* ============================================================================
*
* parent.prepend(node)
* → Inserts inside parent, at the beginning.
*
* parent.append(node)
* → Inserts inside parent, at the end.
*
* element.before(node)
* → Inserts outside the element, before it.
*
* element.after(node)
* → Inserts outside the element, after it.
*
* ============================================================================
* INSERT HTML
* ============================================================================
*
* element.insertAdjacentHTML(position, html)
*
* Positions:
*
* "beforebegin" → before the element
* "afterbegin"  → inside, at the beginning
* "beforeend"   → inside, at the end
* "afterend"    → after the element
*
* Difference:
*
* element.append("<b>Hello</b>");
* → Inserts plain text.
*
* element.insertAdjacentHTML("beforeend", "<b>Hello</b>");
* → Parses and inserts HTML.
*
* ============================================================================
* REMOVE
* ============================================================================
*
* element.remove()
*
* Removes the element from the DOM.
*
* ============================================================================
* MOVE ELEMENTS
* ============================================================================
*
* Appending an existing Node moves it instead of copying it.
*
* box1.append(element);
* box2.append(element);
*
* The element ends up inside `box2`.
*
* A DOM Node can only have one parent at a time.
*
* ============================================================================
* CLONE NODE
* ============================================================================
*
* element.cloneNode(true)
* → Copies the element and all descendants.
*
* element.cloneNode(false)
* → Copies only the element itself.
*
* ============================================================================
* DOCUMENTFRAGMENT
* ============================================================================
*
* DocumentFragment is a temporary container for DOM nodes.
*
* const fragment = new DocumentFragment();
*
* Nodes can be built inside it and then inserted into the document.
*
* When the fragment is appended, its children are inserted,
* while the fragment itself is not added to the DOM.
*
* ============================================================================
* MAIN MENTAL MODEL
* ============================================================================
*
* createElement()        → Create in memory
* prepend()              → Insert inside, first
* append()               → Insert inside, last
* before()               → Insert outside, before
* after()                → Insert outside, after
* insertAdjacentHTML()   → Insert HTML
* remove()               → Remove from DOM
* cloneNode(true)        → Copy with descendants
* append(existingNode)   → Move the Node
* DocumentFragment       → Temporary container
*

*/
