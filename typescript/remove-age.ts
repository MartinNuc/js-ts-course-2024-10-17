type ObjectWithAge = {
  age: unknown;
  [key: string]: unknown;
}

function removeAge<T extends ObjectWithAge>(obj: T): Omit<T, 'age'> {
  const { age, ...duplicateWithoutAge} = obj;
  return duplicateWithoutAge;
}