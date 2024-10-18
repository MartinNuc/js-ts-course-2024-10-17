"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.sumOfNumbersInArray = sumOfNumbersInArray;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function sumOfNumbersInArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
