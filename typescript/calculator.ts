interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  PI: 3.14;
}

let calculator: Calculator = {
  add,
  subtract,
  PI: 3.14,
}

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function sumOfNumbersInArray(array: Array<number>): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}
