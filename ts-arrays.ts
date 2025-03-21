/*
  TYPESCRIPT ARRAY TYPES

  The information below refers to the syntax used when defining a variable 
  that holds an array and an object.

  ARRAYS IN TYPESCRIPT:

  1. The syntax used to define a variable holding an array of elements is:
     let variableIdentifier: type[] = [array elements];

  2. The square brackets "[]" tell the TypeScript compiler that this variable 
     holds an ARRAY.

  3. Adding the "type" annotation tells TypeScript what data types the array should hold.
     If we declare an array as type "string[]", TypeScript ensures that 
     all elements in the array must be of type "string". If we try to include numbers 
     or other types in the array, a compile-time error will occur.

  4. Example using Arrays – an array of string elements:
     let hobbies: string[] = ["soccer", "tennis", "painting"];

  5. The square brackets next to the TYPE ANNOTATION indicate that we want to 
     have an array of strings assigned to the "hobbies" variable.

  6. Alternative Syntax: 
     TypeScript also allows the "generic" array type notation using the Array<T> syntax.
     Example:
     let hobbies: Array<string> = ["soccer", "tennis", "painting"];
     This is functionally equivalent to "string[]" but can be useful in certain scenarios,
     such as when working with generics.
*/

// Example
let hobbies: string[] = ["hockey", "painting", "scrabble"];
console.log(hobbies);

let numbers: number[] = [10, 20, 30];
console.log(numbers);
