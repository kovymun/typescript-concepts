/* TypeScript Generics */
/**
 * Generics allow you to create reusable and flexible code components.
 * They enable types to be defined later, making functions, classes, and interfaces more adaptable.
 * Think of them as placeholders for types, similar to variables but for types.
 */

// Basic Generic Function Example
function identity<T>(value: T): T {
  return value;
}

// Using the Generic Function
const numberValue = identity<number>(42); // T is number
const stringValue = identity<string>("hello"); // T is string

console.log(numberValue); // Output: 42
console.log(stringValue); // Output: hello

/**
 * Why Use Generics?
 * Without generics, you'd have to write multiple versions of the same function for different types.
 * Generics help avoid redundancy and improve code maintainability.
 */

// Generic Interface Example
interface Box<T> {
  content: T;
}

// Using the Generic Interface
const stringBox: Box<string> = { content: "TypeScript" };
const numberBox: Box<number> = { content: 100 };

console.log(stringBox.content); // Output: TypeScript
console.log(numberBox.content); // Output: 100

/**
 * How is this useful?
 * Generics are especially useful when working with collections, reusable components, or utility functions.
 * They let you write functions or types that work with any data type, while still maintaining type safety.
 */

// Generic Class Example
class DataHolder<T> {
  private data: T;

  constructor(initialData: T) {
    this.data = initialData;
  }

  getData(): T {
    return this.data;
  }

  setData(newData: T): void {
    this.data = newData;
  }
}

const numberHolder = new DataHolder<number>(123);
console.log(numberHolder.getData()); // Output: 123

const stringHolder = new DataHolder<string>("Generics are cool!");
console.log(stringHolder.getData()); // Output: Generics are cool!
