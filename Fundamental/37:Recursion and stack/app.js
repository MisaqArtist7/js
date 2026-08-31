// ==================== Recursion ====================

// Recursion یعنی یک function خودش را صدا بزند.
// هر recursion معمولاً دو بخش دارد:
// 1. Base case → شرط توقف
// 2. Recursive step → صدا زدن دوباره‌ی function با مسئله‌ی ساده‌تر


// مثال ساده

function countDown(n) {
  if (n === 0) {
    return; // Base case
  }

  console.log(n);

  countDown(n - 1); // Recursive step
}

countDown(3);


// مثال محاسبه‌ی توان

function pow(x, n) {
  if (n === 1) {
    return x; // Base case
  }

  return x * pow(x, n - 1);
}

console.log(pow(2, 4));
// 16


// هر recursive call یک execution context ایجاد می‌کند
// و contextهای فعال در Call Stack نگه‌داری می‌شوند.
//
// pow(2, 3)
//   → pow(2, 2)
//      → pow(2, 1)
//         → Base case
//
// سپس نتیجه‌ها از داخل Stack به بیرون برمی‌گردند.


// Recursion برای ساختارهای تودرتو بسیار مناسب است.
// مثال: محاسبه‌ی مجموع salary در یک ساختار department.

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );
  }

  let sum = 0;

  for (const subDepartment of Object.values(department)) {
    sum += sumSalaries(subDepartment);
  }

  return sum;
}


// Recursion می‌تواند برای Tree، HTML structure و
// سایر Recursive Data Structures استفاده شود.


// خلاصه:
//
// Recursion → function خودش را صدا می‌زند.
// Base case → شرط توقف.
// Recursive step → call ساده‌تر.
// Call Stack → نگه‌داری execution contextها.
// Recursion Depth → بیشترین تعداد callهای تو در تو.
//
// هر recursion را می‌توان به loop تبدیل کرد،
// اما برای ساختارهای تودرتو recursion معمولاً خواناتر است.

