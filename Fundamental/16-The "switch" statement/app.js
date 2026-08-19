/**
 * ============================================================================
 * SWITCH STATEMENT
 * ============================================================================
 *
 * The switch statement is used to compare one value
 * with multiple possible values.
 *
 * It can be used instead of multiple if...else if checks.
 *
 *
 * Syntax:
 *
 *    switch (expression) {
 *
 *       case value1:
 *          // code
 *          break;
 *
 *       case value2:
 *          // code
 *          break;
 *
 *       default:
 *          // code
 *    }
 *
 * ============================================================================
 * HOW SWITCH WORKS
 * ============================================================================
 *
 * The switch statement compares the given value
 * with each case using strict equality (===).
 *
 *
 * Example:
 *
 *    let a = 2;
 *
 *    switch (a) {
 *
 *       case 1:
 *          console.log("One");
 *          break;
 *
 *       case 2:
 *          console.log("Two");
 *          break;
 *
 *       case 3:
 *          console.log("Three");
 *          break;
 *    }
 *
 *
 * JavaScript checks:
 *
 *    a === 1  -> false
 *    a === 2  -> true
 *
 *
 * So the code inside case 2 is executed.
 *
 * Output:
 *
 *    Two
 *
 * ============================================================================
 * BREAK
 * ============================================================================
 *
 * The break statement stops the switch immediately.
 *
 *
 * Example:
 *
 *    let a = 2;
 *
 *    switch (a) {
 *
 *       case 1:
 *          console.log("One");
 *          break;
 *
 *       case 2:
 *          console.log("Two");
 *          break;
 *
 *       case 3:
 *          console.log("Three");
 *          break;
 *    }
 *
 *
 * When case 2 matches,
 * "Two" is printed and break stops the switch.
 *
 *
 * Without break, JavaScript continues executing
 * the following cases.
 *
 * ============================================================================
 * SWITCH WITHOUT BREAK
 * ============================================================================
 *
 * Example:
 *
 *    let a = 2;
 *
 *    switch (a) {
 *
 *       case 1:
 *          console.log("One");
 *
 *       case 2:
 *          console.log("Two");
 *
 *       case 3:
 *          console.log("Three");
 *    }
 *
 *
 * Output:
 *
 *    Two
 *    Three
 *
 *
 * Why?
 *
 *    case 2 matches.
 *
 *    There is no break,
 *    so execution continues into case 3.
 *
 *
 * Important:
 *
 *    break stops the execution of the switch.
 *
 * ============================================================================
 * DEFAULT
 * ============================================================================
 *
 * The default case runs when none of the cases match.
 *
 *
 * Example:
 *
 *    let a = 10;
 *
 *    switch (a) {
 *
 *       case 1:
 *          console.log("One");
 *          break;
 *
 *       case 2:
 *          console.log("Two");
 *          break;
 *
 *       default:
 *          console.log("Unknown value");
 *    }
 *
 *
 * Since 10 doesn't match any case,
 * the default block is executed.
 *
 *
 * default is similar to the final else
 * in an if...else statement.
 *
 * ============================================================================
 * GROUPING CASES
 * ============================================================================
 *
 * Multiple cases can share the same code.
 *
 *
 * Example:
 *
 *    let browser = "Chrome";
 *
 *    switch (browser) {
 *
 *       case "Chrome":
 *       case "Firefox":
 *       case "Safari":
 *          console.log("Supported browser");
 *          break;
 *
 *       default:
 *          console.log("Unknown browser");
 *    }
 *
 *
 * Chrome, Firefox and Safari
 * all execute the same code.
 *
 *
 * This works because there is no break
 * between the cases.
 *
 *
 * It is similar to:
 *
 *    if (
 *       browser === "Chrome" ||
 *       browser === "Firefox" ||
 *       browser === "Safari"
 *    ) {
 *       console.log("Supported browser");
 *    }
 *
 * ============================================================================
 * STRICT EQUALITY
 * ============================================================================
 *
 * switch uses strict equality (===).
 *
 * The value and type must both match.
 *
 *
 * Example:
 *
 *    let value = "3";
 *
 *    switch (value) {
 *
 *       case 3:
 *          console.log("Number 3");
 *          break;
 *
 *       case "3":
 *          console.log("String 3");
 *          break;
 *    }
 *
 *
 * Output:
 *
 *    String 3
 *
 *
 * Because:
 *
 *    3 === "3"     -> false
 *
 *    "3" === "3"   -> true
 *
 *
 * So case 3 does NOT match "3".
 *
 * ============================================================================
 * EXPRESSIONS IN SWITCH AND CASE
 * ============================================================================
 *
 * Both switch and case can contain expressions.
 *
 *
 * Example:
 *
 *    let a = "1";
 *    let b = 0;
 *
 *    switch (+a) {
 *
 *       case b + 1:
 *          console.log("Matched!");
 *          break;
 *
 *       default:
 *          console.log("No match");
 *    }
 *
 *
 * Here:
 *
 *    +a       -> 1
 *    b + 1    -> 1
 *
 *
 * So:
 *
 *    1 === 1  -> true
 *
 *
 * Therefore, the case is executed.
 *
 * ============================================================================
 * SWITCH VS IF...ELSE
 * ============================================================================
 *
 * switch is useful when one value
 * needs to be compared with multiple exact values.
 *
 *
 * Example with if:
 *
 *    if (browser === "Chrome") {
 *       console.log("Chrome");
 *
 *    } else if (browser === "Firefox") {
 *       console.log("Firefox");
 *
 *    } else if (browser === "Safari") {
 *       console.log("Safari");
 *    }
 *
 *
 * The same logic with switch:
 *
 *    switch (browser) {
 *
 *       case "Chrome":
 *          console.log("Chrome");
 *          break;
 *
 *       case "Firefox":
 *          console.log("Firefox");
 *          break;
 *
 *       case "Safari":
 *          console.log("Safari");
 *          break;
 *    }
 *
 *
 * switch can make multiple exact-value comparisons
 * easier to read.
 *
 * ============================================================================
 * SWITCH WITH MULTIPLE VALUES
 * ============================================================================
 *
 * Example:
 *
 *    let a = 3;
 *
 *    switch (a) {
 *
 *       case 1:
 *          console.log("One");
 *          break;
 *
 *       case 2:
 *       case 3:
 *          console.log("Two or Three");
 *          break;
 *
 *       default:
 *          console.log("Other");
 *    }
 *
 *
 * If a is 2 or 3,
 * the same code is executed.
 *
 * ============================================================================
 * SWITCH AND PROMPT
 * ============================================================================
 *
 * Remember that prompt() returns a string.
 *
 *
 * Example:
 *
 *    let value = prompt("Enter a value:");
 *
 *    switch (value) {
 *
 *       case 3:
 *          console.log("Number 3");
 *          break;
 *
 *       case "3":
 *          console.log("String 3");
 *          break;
 *    }
 *
 *
 * If the user enters 3,
 * prompt() returns:
 *
 *    "3"
 *
 *
 * Therefore:
 *
 *    case 3       -> does not match
 *
 *    case "3"     -> matches
 *
 *
 * To convert the input to a number,
 * we can use the unary plus operator:
 *
 *    let value = +prompt("Enter a value:");
 *
 *
 * Now the result is a number.
 *
 * ============================================================================
 * REWRITING IF AS SWITCH
 * ============================================================================
 *
 * Example:
 *
 *    let a = +prompt("a?", "");
 *
 *    if (a == 0) {
 *       alert(0);
 *    }
 *
 *    if (a == 1) {
 *       alert(1);
 *    }
 *
 *    if (a == 2 || a == 3) {
 *       alert("2,3");
 *    }
 *
 *
 * The same logic can be written with switch:
 *
 *    let a = +prompt("a?", "");
 *
 *    switch (a) {
 *
 *       case 0:
 *          alert(0);
 *          break;
 *
 *       case 1:
 *          alert(1);
 *          break;
 *
 *       case 2:
 *       case 3:
 *          alert("2,3");
 *          break;
 *    }
 *
 *
 * Here case 2 and case 3 are grouped
 * because they share the same code.
 *
 * ============================================================================
 * QUICK REVIEW
 * ============================================================================
 *
 * switch:
 *
 *    Compares one value with multiple cases.
 *
 *
 * case:
 *
 *    Defines a possible value.
 *
 *
 * break:
 *
 *    Stops the switch immediately.
 *
 *
 * default:
 *
 *    Runs when no case matches.
 *
 *
 * Comparison:
 *
 *    switch uses strict equality (===).
 *
 *
 * Grouped cases:
 *
 *    Multiple cases can share the same code.
 *
 *
 * Example:
 *
 *    case 2:
 *    case 3:
 *       // same code
 *       break;
 *
 *
 * Main idea:
 *
 *    switch is useful when
 *    one value needs to be compared
 *    with several exact values.
 *
 * ============================================================================
 */