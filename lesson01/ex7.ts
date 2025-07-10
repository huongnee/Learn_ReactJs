// 1. Hàm có khai báo kiểu tham số và kiểu trả về
function greet1(name: string): string {
    return `Hello, ${name}!`;
  }
  const message = greet1("Chung");
  console.log(message); // Kết quả: Hello, Chung!
  
  // 2. Hàm không trả về gì (kiểu void)
  function logMessage(message: string): void {
    console.log("Log:", message);
  }
  logMessage("Đây là một thông báo!");
  
  // 3. Hàm trả về kiểu never
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  // throwError("Có lỗi xảy ra!"); // Bỏ comment dòng này để thử catch lỗi

// Arrow function
const sum = (a: number, b: number): number => a + b;

// Hàm có tham số tuỳ chọn và mặc định
function greet(name: string, title?: string): string {
  return `Hello ${title ?? ""} ${name}`;
}
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Hàm sử dụng rest parameters
function total(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum(3, 4)); // 7
console.log(greet("Hưởng")); // Hello  Hưởng
console.log(greet("Hưởng", "Mr.")); // Hello Mr. Hưởng
console.log(multiply(5)); // 10
console.log(total(1, 2, 3, 4)); // 10
