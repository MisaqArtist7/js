/**
 * ============================================================================
 * DOM NODES
 * ============================================================================
 *
 * The DOM (Document Object Model) represents an HTML document as a tree
 * of objects called nodes.
 *
 * The browser parses the HTML document and creates this DOM tree.
 * JavaScript can then use the DOM to access and manipulate the page.
 *
 * ============================================================================
 * DOM TREE
 * ============================================================================
 *
 * Example HTML:
 *
 *   <body>
 *     <h1>Hello</h1>
 *     <p>Welcome</p>
 *   </body>
 *
 * DOM structure:
 *
 *   Document
 *      |
 *     html
 *      |
 *     body
 *     /  \
 *   h1    p
 *   |     |
 * "Hello" "Welcome"
 *
 * - Each item in the DOM tree is a NODE.
 *
 * ============================================================================
 * NODE
 * ============================================================================
 *
 * - A Node is a basic building block of the DOM tree.
 * - Elements, text, and the document itself are all types of nodes.
 *
 * Common node types:
 *
 *   Document Node
 *   Element Node
 *   Text Node
 *   Comment Node
 *
 * ============================================================================
 * ELEMENT NODE
 * ============================================================================
 *
 * - HTML elements such as <html>, <body>, <div>, <h1>, and <p>
 *   are Element Nodes.
 *
 *   <h1>Hello</h1>
 *    |
 *    └── Element Node
 *
 * - Elements can contain other elements and text nodes.
 *
 * ============================================================================
 * TEXT NODE
 * ============================================================================
 *
 * - The text inside an HTML element is represented as a Text Node.
 *
 *   <h1>Hello</h1>
 *        |
 *        └── Text Node: "Hello"
 *
 * - Text nodes are separate nodes from their parent elements.
 *
 * ============================================================================
 * NODE VS ELEMENT
 * ============================================================================
 *
 * IMPORTANT:
 *
 * - Every Element is a Node.
 * - Not every Node is an Element.
 *
 *   Node
 *   ├── Document
 *   ├── Element
 *   ├── Text
 *   └── Comment
 *
 * Therefore:
 *
 *   Element ⊂ Node
 *
 * ============================================================================
 * WHITESPACE AND TEXT NODES
 * ============================================================================
 *
 * - Spaces and line breaks in HTML can also become Text Nodes.
 *
 *   <div>
 *     <p>Hello</p>
 *   </div>
 *
 * The DOM may contain:
 *
 *   div
 *   ├── Text Node: "\n    "
 *   ├── p
 *   │   └── Text Node: "Hello"
 *   └── Text Node: "\n"
 *
 * - This is important when navigating through DOM nodes.
 *
 * ============================================================================
 * CHILD NODES VS CHILD ELEMENTS
 * ============================================================================
 *
 * - `childNodes` returns all child nodes, including text nodes.
 *
 *   element.childNodes
 *
 * - `children` returns only child elements.
 *
 *   element.children
 *
 * Example:
 *
 *   <div>
 *     <p>Hello</p>
 *   </div>
 *
 * - `childNodes` may include whitespace text nodes.
 * - `children` contains only the <p> element.
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 *   DOM
 *      → Represents the HTML document as a tree of nodes.
 *
 *   Node
 *      → A general building block of the DOM tree.
 *
 *   Element
 *      → Represents an HTML element.
 *
 *   Text Node
 *      → Represents text inside an element.
 *
 *   childNodes
 *      → Returns all child nodes.
 *
 *   children
 *      → Returns only child elements.
 *
 * ============================================================================
 * KEY IDEA
 * ============================================================================
 *
 * - The DOM is not made only of HTML elements.
 * - Elements, text, comments, and the document itself can all be nodes.
 *
 *   Document
 *      ↓
 *   Element
 *      ↓
 *   Text Node
 *
 * - Understanding the difference between Node and Element is essential
 *   for working with the DOM and navigating the document tree.
 *
 */

