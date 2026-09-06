// ==================== Iterables ====================

// Iterable یعنی مقداری که می‌توان روی آن با for...of پیمایش کرد.
// نمونه‌های معروف: Array, String, Map, Set

const arr = [10, 20, 30];

for (const value of arr) {
console.log(value);
}

// for...of در پشت صحنه از Symbol.iterator استفاده می‌کند.
// Symbol.iterator باید یک Iterator برگرداند.

    const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        let current = this.from;

        // Iterator باید متد next() داشته باشد.
        return {
        next() {
            if (current <= range.to) {
            return {
                value: current++,
                done: false
            };
            }

            // done: true یعنی پیمایش تمام شده است.
            return {
            done: true
            };
        }
        };
    }
    };

    for (const num of range) {
    console.log(num);
    }

// خروجی:
// 1
// 2
// 3
// 4
// 5


// Iterable و Iterator یکی نیستند:
//
// Iterable → دارای Symbol.iterator است.
// Iterator → دارای next() است.
//
// Iterable
//    ↓
// Symbol.iterator()
//    ↓
// Iterator
//    ↓
// next()
//    ↓
// { value, done }


// Array-like با Iterable فرق دارد.
// Array-like معمولاً index و length دارد، اما لزوماً iterable نیست.

const arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};


// Array.from() یک Iterable یا Array-like را به Array تبدیل می‌کند.

const str = "Hello";

const letters = Array.from(str);

console.log(letters);
// ["H", "e", "l", "l", "o"]