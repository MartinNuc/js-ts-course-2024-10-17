
function lengthOfShortestWord(text) {
  return text
    .split(' ')
    .map(word => word.length)
    .reduce((acc, curr) => {
      if (curr < acc) {
        return curr;
      } else {
        return acc;
      }
    });
}

console.log(lengthOfShortestWord('Hi my name is Martin'));