
type Storage<T> = {
  [key: string]: T
}
// same as:
// interface Storage<T> {
//   [key: string]: T
// }

export class Map<T> {
  storage: Storage<T> = {};

  set(key: string, item: T) {
    this.storage[key] = item;
  }
  get(key: string): T | undefined {
    return this.storage[key];
  }
  has(key: string): boolean {
    return key in this.storage;
  }
  entities(): T[] {
    return Object.values(this.storage);
  }
  print(): void {
    console.log(this.storage);
  }
}