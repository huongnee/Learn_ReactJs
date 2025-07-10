// 1. Hàm có khai báo kiểu tham số và kiểu trả về
function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  const msg = greet("Hee");
  console.log(msg); // Kết quả: Hello, Hee!
  
  // 2. Hàm không trả về gì (kiểu void)
  function logmsg(msg: string): void {
    console.log("Log:", msg);
  }
  logMessage("Đây là một thông báo!");
  
  // 3. Hàm trả về kiểu never
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  // throwError("Có lỗi xảy ra!"); // Bỏ comment dòng này để thử catch lỗi
  
  // 4. Arrow function
  const Tong = (a: number, b: number): number => a + b;
  
  // 5. Hàm có tham số tuỳ chọn và mặc định
  function greetWithTitle(name: string, title?: string): string {
    return `Hello ${title ?? ""} ${name}`;
  }
  function multiply(a: number, b: number = 2): number {
    return a * b;
  }
  
  // 6. Hàm sử dụng rest parameters
  function total(...numbers: number[]): number {
    return numbers.reduce((Tong, num) => Tong + num, 0);
  }
  
  console.log(Tong(3, 4)); // 7
  console.log(greetWithTitle("Hưởng")); // Hello  Hưởng
  console.log(greetWithTitle("Hưởng", "Mr.")); // Hello Mr. Hưởng
  console.log(multiply(5)); // 10
  console.log(total(1, 2, 3, 4)); // 10
  
  // 7. Hàm generic – kiểu dữ liệu động
  function identity<T>(arg: T): T {
    return arg;
  }
  let output1 = identity<string>("hello");
  let output2 = identity<number>(123);
  
  // 8. Ví dụ về function type và interface
  type MathFunc = (a: number, b: number) => number;
  const subtract: MathFunc = (x, y) => x - y;
  
  interface MathOp {
    (a: number, b: number): number;
  }
  
 