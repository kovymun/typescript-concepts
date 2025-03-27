/* TypeScript Interfaces */
/**
 * Interfaces define the structure of an object by specifying its properties and types.
 * They enforce type safety, ensuring objects adhere to a specific shape.
 */

// Basic Interface Example
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Implementing the Interface
const person: Person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hello, my name is ${this.name}.`;
  },
};

console.log(person.greet()); // Output: Hello, my name is Alice.
