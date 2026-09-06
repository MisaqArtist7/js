/*
 * ============================================================================
 * 🚀 OBJECT TO PRIMITIVE CONVERSION
 * ============================================================================
 *
 * When JavaScript needs a primitive value but gets an object,
 * it automatically converts the object into a primitive.
 *
 * JavaScript uses three conversion hints:
 *
 *     "string"
 *     "number"
 *     "default"
 *
 */


/* ============================================================================
 * 1. SYMBOL.TOPRIMITIVE
 * ============================================================================
 */

// `Symbol.toPrimitive` is the first method JavaScript checks
// when converting an object to a primitive.
//
// It receives a hint that tells us what kind of conversion is expected.

let user = {

    name: "Ali",
    money: 1000,

    [Symbol.toPrimitive](hint) {

        if (hint === "string") {
            return this.name;
        }

        return this.money;
    }
};

console.log(String(user)); // Ali
console.log(+user);        // 1000
console.log(user + 500);   // 1500



/* ============================================================================
 * 2. TO STRING() AND VALUE OF()
 * ============================================================================
 */

// If `Symbol.toPrimitive` doesn't exist,
// JavaScript falls back to `toString()` and `valueOf()`.
//
// "string" hint:
//
//     toString()
//     valueOf()
//
// "number" / "default" hint:
//
//     valueOf()
//     toString()

let person = {

    name: "Ali",
    money: 1000,

    toString() {
        return this.name;
    },

    valueOf() {
        return this.money;
    }
};

console.log(String(person)); // Ali
console.log(+person);        // 1000
console.log(person + 500);   // 1500



/* ============================================================================
 * 3. THE "+" OPERATOR
 * ============================================================================
 */

// `+` can perform numeric addition OR string concatenation.
//
// It depends on the primitive value produced during conversion.

let example = {

    toString() {
        return "2";
    }
};

console.log(example * 2); // 4
console.log(example + 2); // "22"


// `*` converts "2" to the number 2:
//
//     "2" * 2 → 4
//
// `+` sees a string:
//
//     "2" + 2 → "22"



/* ============================================================================
 * 4. RETURN VALUE MUST BE A PRIMITIVE
 * ============================================================================
 */

// `Symbol.toPrimitive`, `valueOf()` and `toString()`
// must eventually return a primitive value.
//
// Returning an object causes a TypeError.
//
// Valid:
//
//     string
//     number
//     boolean
//     bigint
//     symbol
//     null
//     undefined



/* ============================================================================
 * SUMMARY
 * ============================================================================
 *
 * - Objects are automatically converted to primitives when needed.
 *
 * - There are three hints:
 *
 *     "string"
 *     "number"
 *     "default"
 *
 * - `Symbol.toPrimitive` has the highest priority.
 *
 * - If it doesn't exist, JavaScript uses `valueOf()` and `toString()`.
 *
 * - "string":
 *
 *     toString() → valueOf()
 *
 * - "number" / "default":
 *
 *     valueOf() → toString()
 *
 * - Conversion methods must return a primitive.
 *
 * - `+` can result in either addition or string concatenation.
 *
 * ============================================================================
 */

