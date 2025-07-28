var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseArray(arr) {
    return __spreadArray([], arr, true).reverse();
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
var num = [1, 2, 3, 4, 5];
var reversedNum = reverseArray(num);
console.log(reversedNum);
