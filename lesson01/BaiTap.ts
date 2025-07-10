// 1. Hàm tính chu vi và diện tích hình chữ nhật
function rectanglePerimeter(length: number, width: number): number {
    return 2 * (length + width);
  }
  
  function rectangleArea(length: number, width: number): number {
    return length * width;
  }
  
  // 2. Hàm nhận một mảng số và trả về giá trị lớn nhất
  function maxOfArray(numbers: number[]): number {
    return Math.max(...numbers);
  }
  
  // 3. Hàm Greetne với tham số name và title? (title là tùy chọn)
  function Greetne(name: string, title?: string): string {
    return `Chào mừng ${title ? title + " " : ""}${name}!`;
  }
  
  // 4. Generic function đảo ngược mảng bất kỳ
  function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
  }
  
  console.log("Chu vi:", rectanglePerimeter(5, 3)); 
  console.log("Diện tích:", rectangleArea(5, 3));  
  
  console.log("Số lớn nhất:", maxOfArray([1, 7, 3, 9, 2])); 
  
  console.log(Greetne("Hưởng"));           
  console.log(Greetne("Hưởng", "Mr."));   
  
  console.log(reverseArray([1, 2, 3]));         
  console.log(reverseArray(["a", "b", "c"]));   
  