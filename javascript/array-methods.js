
function countOfPositiveNumbers(array) {
  const arrayOfPositiveNumbers = array.filter((n) => n > 0);
  return arrayOfPositiveNumbers.length;
}

function sumOfPositiveNumbers(array) {
  return array
    .filter((n) => n > 0) // keep only positive values
    .reduce((acc, curr) => acc + curr, 0); // sum
}

console.log(countOfPositiveNumbers([1,-4,7,12])); // 3
console.log(sumOfPositiveNumbers([1,-4,7,12])); // 20