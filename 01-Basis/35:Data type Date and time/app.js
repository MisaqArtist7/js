// ==================== Date ====================

// Date برای کار با تاریخ و زمان استفاده می‌شود.

// تاریخ و زمان فعلی
const now = new Date();

console.log(now);


// ساخت Date با timestamp
// timestamp = milliseconds از 1 January 1970 UTC

const date = new Date(0);

console.log(date);


// ساخت Date با String

const dateFromString = new Date("2026-08-30T13:30:00");

console.log(dateFromString);


// ساخت Date با اجزای تاریخ
// نکته: month از 0 شروع می‌شود.

const dateFromParts = new Date(
  2026, // year
  7,    // month → August
  30,   // day
  13,   // hour
  30    // minute
);


// گرفتن اجزای Date

console.log(now.getFullYear());     // year
console.log(now.getMonth());        // month: 0 - 11
console.log(now.getDate());         // day of month
console.log(now.getDay());          // day of week: 0 - 6
console.log(now.getHours());        // hours
console.log(now.getMinutes());      // minutes
console.log(now.getSeconds());      // seconds
console.log(now.getMilliseconds()); // milliseconds

// getDate() → روز ماه
// getDay()  → روز هفته


// UTC methods برای دریافت زمان بر اساس UTC

console.log(now.getUTCFullYear());
console.log(now.getUTCMonth());
console.log(now.getUTCHours());


// getTime() → timestamp بر حسب milliseconds

console.log(now.getTime());


// تغییر اجزای Date

now.setFullYear(2030);
now.setMonth(5);
now.setDate(15);
now.setHours(10);


// Date به صورت خودکار مقادیر خارج از محدوده را اصلاح می‌کند.

const autoCorrect = new Date(2026, 0, 32);

console.log(autoCorrect);


// می‌توان دو Date را از هم کم کرد.
// نتیجه بر حسب milliseconds است.

const start = new Date();

// some work

const end = new Date();

console.log(end - start);


// Date.now() مستقیماً timestamp فعلی را برمی‌گرداند.

const timestamp = Date.now();

console.log(timestamp);


// Date.parse() → تبدیل String تاریخ به timestamp

const parsedDate = Date.parse("2026-08-30T13:30:00");

console.log(parsedDate);


// خلاصه:
//
// new Date()       → current date/time
// get...()         → دریافت اجزای تاریخ
// set...()         → تغییر اجزای تاریخ
// getTime()        → timestamp
// Date.now()       → timestamp فعلی
// Date.parse()     → string → timestamp
//
// نکته مهم:
// month از 0 شروع می‌شود.
// timestamp در JavaScript بر حسب milliseconds است.

