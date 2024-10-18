
function findUniqueCharacter(text) {
  if (typeof text !== 'string') {
    throw new Error('Pass a string');
  }

  const characters = text.split('');

  const occurences = characters.reduce((acc, curr) => {
    if (typeof acc[curr] === 'number') {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  for(let character in occurences) {
    if (occurences[character] === 1) {
      return character;
    }
  }

  return null;
}

console.log(findUniqueCharacter('Hello'));