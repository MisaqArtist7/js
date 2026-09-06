'use strict'
/**
 * ============================================================================
 * STRICT MODE — "use strict"
 * ============================================================================
 *
 * - "use strict" enables JavaScript's strict mode.
 * - It was introduced with ECMAScript 5 (ES5) in 2009.
 * - Strict mode helps detect problematic code and disables some legacy
 *   JavaScript behaviors.
 *
 * ----------------------------------------------------------------------------
 * SYNTAX
 * ----------------------------------------------------------------------------
 *
 * "use strict";
 *
 * - For an entire script, "use strict" must appear at the top.
 * - Only comments may appear before it.
 *
 *   // comment
 *   "use strict";
 *
 * - Putting it after executable code does NOT enable strict mode for the
 *   entire script.
 *
 * ----------------------------------------------------------------------------
 * FUNCTION SCOPE
 * ----------------------------------------------------------------------------
 *
 * - "use strict" can also be placed at the beginning of a function.
 * - In that case, strict mode applies only to that function.
 *
 * ----------------------------------------------------------------------------
 * MODERN JAVASCRIPT
 * ----------------------------------------------------------------------------
 *
 * - JavaScript modules and classes automatically use strict mode.
 * - Therefore, "use strict" is usually unnecessary inside modules and classes.
 *
 * ----------------------------------------------------------------------------
 * BROWSER CONSOLE
 * ----------------------------------------------------------------------------
 *
 * - Developer consoles do not necessarily run code in strict mode by default.
 * - This can sometimes cause behavior to differ from a strict-mode script.
 *
 * QUICK REVIEW:
 * - "use strict" = enable strict mode.
 * - Put it at the top of a script.
 * - Strict mode catches more errors and removes problematic legacy behavior.
 * - Modules and classes are automatically strict.
 */