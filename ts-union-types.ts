/* TypeScript: Union Types */
/**
 * TypeScript introduces the concept of Union Types to allow a variable, function parameter, or return value to accept multiple types.
 * This enhances flexibility while maintaining type safety in your code.
 * A Union Type in TypeScript enables a value to be one of several specified types. It is defined using the | (pipe) symbol.
 * SYNTAX EXAMPLE: let value: string | number;
 */

//Example 1: Assigning Different Values

// Declaring a variable 'data' that can hold either a string or a number. String value to 'data'.
let data: string | number = "11";

// Reassigning 'data' to a number (also valid because variable data can hold either a string or number DT)
data = 11;

console.log(data); // Output: 11

//Example 2: Using Union Types in Functions
function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}

printId(123); // Valid and Output: Your ID is: 123
printId("XYABC123"); // Valid and Output: Your ID is: XYABC123
