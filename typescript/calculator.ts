function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sumOfNumbersInArray(array: Array<number>): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfNumbersInArray([1, 2, 3, 4, 5]));
