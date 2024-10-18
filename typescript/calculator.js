"use strict";
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function sumOfNumbersInArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfNumbersInArray([1, 2, 3, 4, 5]));
