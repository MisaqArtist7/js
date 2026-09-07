/**
 * ============================================================================
 * DOM NAVIGATION
 * ============================================================================
 *
 * DOM navigation means moving through the DOM tree using relationships
 * between nodes and elements.
 *
 * Every node can have:
 *
 * - A parent
 * - Child nodes
 * - Sibling nodes
 *
 * ============================================================================
 * PARENT
 * ============================================================================
 *
 * - `parentNode` returns the parent node.
 *
 *   element.parentNode;
 *
 * - `parentElement` returns the parent element.
 *
 *   element.parentElement;
 *
 * IMPORTANT:
 *
 *   parentNode
 *      → Can return any type of Node.
 *
 *   parentElement
 *      → Returns an Element or null.
 *
 * ============================================================================
 * CHILDREN
 * ============================================================================
 *
 * - `childNodes` returns all child nodes.
 * - It can include Element, Text, and Comment nodes.
 *
 *   element.childNodes;
 *
 * - `children` returns only child elements.
 *
 *   element.children;
 *
 * IMPORTANT:
 *
 *   childNodes → all child nodes
 *   children   → elements only
 *
 * ============================================================================
 * FIRST AND LAST CHILD
 * ============================================================================
 *
 * - `firstChild` returns the first child node.
 *
 *   element.firstChild;
 *
 * - `lastChild` returns the last child node.
 *
 *   element.lastChild;
 *
 * - These can return Text Nodes caused by spaces or line breaks
 *   in the HTML source.
 *
 * - To get only elements:
 *
 *   element.firstElementChild;
 *   element.lastElementChild;
 *
 * ============================================================================
 * SIBLINGS
 * ============================================================================
 *
 * - Siblings are nodes that have the same parent.
 *
 * Example:
 *
 *   <ul>
 *     <li>John</li>
 *     <li>Pete</li>
 *     <li>Alex</li>
 *   </ul>
 *
 * - `previousSibling` returns the previous node.
 *
 *   element.previousSibling;
 *
 * - `nextSibling` returns the next node.
 *
 *   element.nextSibling;
 *
 * - These can return Text Nodes because of whitespace between elements.
 *
 * ============================================================================
 * ELEMENT SIBLINGS
 * ============================================================================
 *
 * - `previousElementSibling` returns the previous element.
 *
 *   element.previousElementSibling;
 *
 * - `nextElementSibling` returns the next element.
 *
 *   element.nextElementSibling;
 *
 * - These ignore Text Nodes and Comment Nodes.
 *
 * ============================================================================
 * DOCUMENT NAVIGATION
 * ============================================================================
 *
 * The document provides direct access to some important elements:
 *
 *   document.documentElement
 *      → <html>
 *
 *   document.head
 *      → <head>
 *
 *   document.body
 *      → <body>
 *
 * ============================================================================
 * DOM NAVIGATION MAP
 * ============================================================================
 *
 *                    Parent
 *                      ↑
 *                      |
 * Previous ←────── Element ──────→ Next
 *                      |
 *                      ↓
 *                   Children
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 *   parentNode
 *      → Returns the parent node.
 *
 *   parentElement
 *      → Returns the parent element.
 *
 *   childNodes
 *      → Returns all child nodes.
 *
 *   children
 *      → Returns only child elements.
 *
 *   firstChild
 *      → Returns the first child node.
 *
 *   firstElementChild
 *      → Returns the first child element.
 *
 *   lastChild
 *      → Returns the last child node.
 *
 *   lastElementChild
 *      → Returns the last child element.
 *
 *   previousSibling
 *      → Returns the previous node.
 *
 *   previousElementSibling
 *      → Returns the previous element.
 *
 *   nextSibling
 *      → Returns the next node.
 *
 *   nextElementSibling
 *      → Returns the next element.
 *
 * ============================================================================
 * KEY IDEA
 * ============================================================================
 *
 * - The DOM is a tree.
 * - DOM navigation allows us to move through this tree.
 * - Node-based properties can include Text and Comment nodes.
 * - Element-based properties work only with HTML elements.
 *
 * The most important distinction:
 *
 *   childNodes  → all nodes
 *   children    → elements only
 *
 *   firstChild  → first node
 *   firstElementChild → first element
 *
 *   nextSibling → next node
 *   nextElementSibling → next element
 *
 */

