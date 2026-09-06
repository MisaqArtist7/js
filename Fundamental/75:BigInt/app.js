// ==================== BigInt ====================

// BigInt → represents integers of arbitrary size

const bigNumber = 123456789012345678901234567890n;

// Add "n" at the end
// → Creates a BigInt


// ==================== Creating BigInt ====================

// Using n

const a = 123n;

// Using BigInt()

const b = BigInt(123);


// ==================== BigInt Arithmetic ====================

// BigInt supports normal integer operations

10n + 5n; // 15n
10n - 5n; // 5n
10n * 5n; // 50n
10n ** 2n; // 100n


// ==================== Division ====================

// BigInt division removes the fractional part

5n / 2n; // 2n

// No decimal result


// ==================== Number vs BigInt ====================

// Cannot mix Number and BigInt in arithmetic

10n + 5;
// TypeError

// Convert explicitly

10n + BigInt(5); // 15n
Number(10n) + 5; // 15


// ==================== Precision ====================

// BigInt is useful for very large integers

const huge = 9007199254740993n;

// Number cannot safely represent all integers
// beyond Number.MAX_SAFE_INTEGER


// ==================== Conversion ====================

// BigInt → Number

Number(100n); // 100

// Number → BigInt

BigInt(100); // 100n

// Be careful:
// Number conversion can lose precision for huge values


// ==================== Comparison ====================

// BigInt and Number can be compared

5n > 3; // true
5n < 10; // true

// Loose equality

1n == 1; // true

// Strict equality

1n === 1; // false

// Different types:
// BigInt vs Number


// ==================== Boolean ====================

// 0n → falsy

Boolean(0n); // false

// Other BigInts → truthy

Boolean(10n); // true


// ==================== Logical Operators ====================

// BigInt works with logical operators

0n || 10n; // 10n
10n || 20n; // 10n

0n && 10n; // 0n
10n && 20n; // 20n


// ==================== Unary + ====================

// Unary + is NOT supported for BigInt

+10n;
// TypeError


// ==================== Important Rules ====================

// BigInt → integer only
// BigInt → arbitrary-size integers
// BigInt literal → ends with n
// BigInt + Number → TypeError
// BigInt / BigInt → integer result
// 0n → falsy
// Other BigInts → truthy


// ==================== Main Idea ====================

// Number
// → Normal JavaScript numbers
// → Limited integer precision

// BigInt
// → Very large integers
// → Use "n" suffix

const id = 12345678901234567890n;