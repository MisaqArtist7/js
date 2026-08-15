/**
 * ============================================================================
 * CODE STRUCTURE
 * ============================================================================
 *
 * ----------------------------------------------------------------------------
 * STATEMENTS
 * ----------------------------------------------------------------------------
 * - A statement is a command or syntax construct that performs an action.
 * - Multiple statements can be separated by semicolons.
 *
 *   alert('Hello');
 *   alert('World');
 *
 * - Statements are usually written on separate lines for readability.
 *
 * ----------------------------------------------------------------------------
 * SEMICOLONS
 * ----------------------------------------------------------------------------
 * - Semicolons separate statements.
 * - JavaScript has Automatic Semicolon Insertion (ASI).
 * - In many cases, a line break is treated as an implicit semicolon.
 *
 *   alert('Hello')
 *   alert('World')
 *
 * - However, a newline does NOT always mean a semicolon.
 * - ASI can sometimes produce unexpected behavior.
 *
 * IMPORTANT:
 * - Prefer explicit semicolons, especially when learning JavaScript.
 *
 * ----------------------------------------------------------------------------
 * COMMENTS
 * ----------------------------------------------------------------------------
 * - Comments are ignored by the JavaScript engine.
 * - Single-line comments start with //.
 *
 *   // This is a comment
 *
 * - Multiline comments start with /* and end with *\/.
 *
 *   /*
 *     This is a multiline comment.
 *   *\/
 *
 * - Comments can also be used to temporarily disable code.
 *
 * ----------------------------------------------------------------------------
 * COMMENT RULES
 * ----------------------------------------------------------------------------
 * - Nested multiline comments are NOT supported.
 * - Good comments explain WHY something is done, not WHAT obvious code does.
 * - Comments are normally removed during production minification.
 *
 * QUICK REVIEW:
 * - Statement = an executable instruction.
 * - ; = statement separator.
 * - ASI = JavaScript can automatically insert semicolons.
 * - // = single-line comment.
 * - /* ... *\/ = multiline comment.
 * - Avoid relying on ASI; use explicit semicolons consistently.
 */