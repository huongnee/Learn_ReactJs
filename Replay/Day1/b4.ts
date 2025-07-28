function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
const num = [1, 2, 3, 4, 5];
const reversedNum = reverseArray(num);
console.log(reversedNum);