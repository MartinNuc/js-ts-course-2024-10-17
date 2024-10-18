function removeKey<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K> {
  const duplicate = { ...obj };
  delete duplicate[key];
  return duplicate;
}

const result = removeKey(
  {
    id: 1,
    name: "Martin",
    height: 170,
  },
  "height"
);

type ObjectWithAge = {
  age: unknown;
  [key: string]: unknown;
}

function removeAge<T extends ObjectWithAge>(obj: T): Omit<T, 'age'> {
  const { age, ...duplicateWithoutAge} = obj;
  return duplicateWithoutAge;
}
