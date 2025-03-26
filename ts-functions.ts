/*
 * TYPESCRIPT FUNCTIONS
 *
 * A FUNCTION in programming is a small, reusable piece of code that performs a specific task.
 * Functions help organize code, making it more concise, readable, and reducing repetition.
 *
 * When defining TypeScript functions, we need to consider two key parts:
 * 1. The input parameters and their type annotations.
 * 2. The return value type.
 *
 * --------------------------------------------
 * JavaScript Function Example (No Type Safety)
 * --------------------------------------------
 *
 * function addNum(a, b) {
 *    return a + b;
 * }
 *
 * When we call this function, we can pass in arguments of any type, and if there are any bugs
 * or errors (e.g., passing a string instead of a number), they will only be detected at runtime.
 * TypeScript provides a way to prevent such issues by enforcing **static typing**.
 *
 * --------------------------
 * TypeScript Function Syntax
 * --------------------------
 * function functionName(parameterName: dataType, parameterName: dataType): returnType {
 *    return value;
 * }
 */

// Example 1: A simple TypeScript function with type annotations
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Calling the function
console.log(addNumbers(5, 10)); // Output: 15
