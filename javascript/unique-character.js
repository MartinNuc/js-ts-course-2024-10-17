
function findUniqueCharacter(text) {
  if (typeof text !== 'string') {
    throw new Error('Pass a string');
  }

  const occurences = {};
  text.split('').forEach(character => {
    if (typeof occurences[character] === 'number') {
      occurences[character]++;
    } else {
      occurences[character] = 1;
    }
  })

  console.log(occurences);
  for(let character in occurences) {
    if (occurences[character] === 1) {
      return character;
    }
  }

  return null;
}

console.log(findUniqueCharacter('Hello'));