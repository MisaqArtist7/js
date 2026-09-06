// ==================== Unicode ====================

// Unicode → standard for representing characters
// JavaScript strings use UTF-16 internally


// ==================== Unicode Escape ====================

// \xXX → 2 hexadecimal digits
// → Supports codes from 00 to FF

"\x7A"; // "z"

// \uXXXX → exactly 4 hexadecimal digits

"\u0041"; // "A"
"\u00A9"; // "©"

// \u{...} → Unicode code point
// → Supports the full Unicode range

"\u{1F600}"; // 😀


// ==================== UTF-16 ====================

// JavaScript originally uses 16-bit code units
// → 2 bytes per code unit

// Most common characters → 1 code unit
// Rare characters → 2 code units


// ==================== Surrogate Pairs ====================

// Characters above U+FFFF need 2 UTF-16 code units

"😀".length; // 2

// One visible symbol
// → Two UTF-16 code units
// → Surrogate pair


// High surrogate → D800..DBFF
// Low surrogate  → DC00..DFFF

// Both parts together represent one Unicode code point


// ==================== charCodeAt ====================

// charCodeAt() → returns one UTF-16 code unit

"𝒳".charCodeAt(0).toString(16);
// "d835"

// Not surrogate-pair aware
// → May return only one half of a character


// ==================== codePointAt ====================

// codePointAt() → returns the full Unicode code point

"𝒳".codePointAt(0).toString(16);
// "1d4b3"

// Surrogate-pair aware


// ==================== fromCharCode ====================

// Creates characters from UTF-16 code units

String.fromCharCode(65);
// "A"


// ==================== fromCodePoint ====================

// Creates characters from Unicode code points

String.fromCodePoint(0x1F600);
// "😀"

// Better for full Unicode code points


// ==================== String Indexing ====================

// Be careful with direct indexing

"𝒳"[0];
"𝒳"[1];

// → Can return broken surrogate parts
// → Each part alone has no meaningful character


// ==================== String Length ====================

// length counts UTF-16 code units
// NOT visible characters

"hello".length; // 5
"😀".length;    // 2


// ==================== Splitting ====================

// Don't split a string at an arbitrary position

"hi 😂".slice(0, 4);

// → Can cut a surrogate pair in half
// → Result may contain a broken character


// ==================== Diacritical Marks ====================

// Unicode allows combining marks

"S\u0307";
// Ṡ

// Multiple marks can be combined

"S\u0307\u0323";
// Ṩ

// One visible character can contain multiple code points


// ==================== Different Representations ====================

// Two strings can look identical
// but contain different Unicode sequences

const s1 = "S\u0307\u0323";
const s2 = "S\u0323\u0307";

s1 === s2; // false


// ==================== normalize() ====================

// normalize() → converts Unicode strings
// into a normalized representation

s1.normalize() === s2.normalize();
// true

// Useful when visually identical strings
// may have different Unicode compositions


// ==================== Mental Model ====================

// Unicode
//   ↓
// Code Point
//   ↓
// UTF-16 Code Units
//   ↓
// JavaScript String


// ==================== Important Distinctions ====================

// Unicode code point
// → identifies a Unicode character/code point

// UTF-16 code unit
// → internal unit used by JavaScript strings

// Surrogate pair
// → two UTF-16 code units representing one code point

// Combining marks
// → additional code points that visually combine


// ==================== Summary ====================

// length → counts UTF-16 code units
// charCodeAt() → reads one UTF-16 code unit
// codePointAt() → reads a Unicode code point
// fromCharCode() → creates from UTF-16 units
// fromCodePoint() → creates from Unicode code points
// normalize() → normalizes Unicode composition

// Main warning:
// → A visible character is NOT always one UTF-16 unit
// → Don't assume string.length = visible character count