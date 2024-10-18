export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function sumOfNumbersInArray(array: Array<number>): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}
