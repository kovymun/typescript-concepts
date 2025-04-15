/*
  TYPESCRIPT TUPLES

  The information below refers to the syntax used when defining a variable 
  that holds a tuple—a fixed-length array where each element can have a different type.

  WHAT IS A TUPLE?

  1. A tuple is a special type of array used in TypeScript where:
     - The number of elements is fixed.
     - The type of each element is known and declared in advance.

  2. The syntax used to define a tuple is:
     let variableIdentifier: [type1, type2, type3] = [value1, value2, value3];

  3. Each position in the tuple corresponds to a specific type.
     TypeScript enforces both the length of the tuple and the type at each index.

  4. Example using Tuples – a tuple with a string and a number:
     let person: [string, number] = ["Alice", 30];

  5. You cannot add extra items to a tuple without getting a compile-time error:
     person.push(true); // Error in strict mode (with tuple length enforcement)

  6. Why Use Tuples?
     Tuples are useful when working with:
     - Fixed data structures like coordinates ([x, y]),
     - Return values from functions (e.g. [data, error]),
     - Pairs of key-value elements,
     - Destructuring patterns.

  7. Important:
     - Tuples are still arrays, so array methods like `push`, `pop`, and `slice` can still be called.
     - However, using these can sometimes undermine the fixed-length idea if not careful.

*/

// Example
let userInfo: [string, number] = ["John", 25];
console.log(userInfo); // Output: ["John", 25]

let coordinates: [number, number] = [34.0522, -118.2437];
console.log(coordinates); // Output: [34.0522, -118.2437]

// Destructuring a tuple
let [fName, age]: [string, number] = userInfo;
console.log(`Name: ${fName}, Age: ${age}`);
