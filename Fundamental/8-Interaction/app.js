/**
 * ============================================================================
 * INTERACTION: ALERT, PROMPT, CONFIRM
 * ============================================================================
 *
 * Browser-specific functions for interacting with the user.
 *
 * All three functions are MODAL:
 * - They pause script execution.
 * - The user cannot interact with the rest of the page until the dialog
 *   is dismissed.
 *
 * ----------------------------------------------------------------------------
 * ALERT
 * ----------------------------------------------------------------------------
 * - Displays a message and waits for the user to press "OK".
 *
 *   alert("Hello");
 *
 * ----------------------------------------------------------------------------
 * PROMPT
 * ----------------------------------------------------------------------------
 * - Displays a message, an input field, and OK/Cancel buttons.
 *
 *   prompt(title, [default]);
 *
 * - The second argument is optional.
 * - It specifies the initial value of the input field.
 *
 *   let age = prompt("How old are you?", 100);
 *
 * - Returns:
 *   - The entered text as a String when OK is pressed.
 *   - null when Cancel or Esc is pressed.
 *
 * IMPORTANT:
 * - prompt() returns user input as a STRING.
 * - Even if the user enters 25, the result is "25", not 25.
 *
 * ----------------------------------------------------------------------------
 * CONFIRM
 * ----------------------------------------------------------------------------
 * - Displays a question with OK and Cancel buttons.
 *
 *   let isBoss = confirm("Are you the boss?");
 *
 * - Returns:
 *   - true  → OK
 *   - false → Cancel or Esc
 *
 * ----------------------------------------------------------------------------
 * QUICK REVIEW
 * ----------------------------------------------------------------------------
 *
 *   alert("Hello");
 *   // Shows a message.
 *
 *   prompt("Your name?", "");
 *   // Returns String or null.
 *
 *   confirm("Are you sure?");
 *   // Returns true or false.
 *
 * RETURN VALUES:
 *
 *   alert()   → displays a message
 *   prompt()  → String | null
 *   confirm() → Boolean
 *
 * LIMITATIONS:
 * - These dialogs are controlled by the browser.
 * - Their exact position cannot be controlled.
 * - Their appearance cannot be customized.
 * - They are simple and useful when rich/custom UI is not required.
 */