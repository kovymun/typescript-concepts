/*
  TYPESCRIPT OBJECT LITERALS

  The information below explains how to define and use object literals in TypeScript.

  OBJECT LITERALS IN TYPESCRIPT:

  1. Object literals are used to define objects with specific property names and types.

  2. Syntax for defining an object with typed properties:
     let variableName: { key1: type1; key2: type2 } = { key1: value1, key2: value2 };

  3. TypeScript ensures that the object has all required properties and that each property 
     has the correct type.

  4. If a required property is missing or if a property has the wrong type, 
     TypeScript will throw a compile-time error.

  5. Example:
     let userProfile: { username: string; points: number } = {
       username: "gamer123",
       points: 1500
     };

  6. Optional properties can be marked with a `?` after the key name.
     Example:
     let deviceInfo: { brand: string; model?: string } = {
       brand: "Samsung"
     };

  7. Use `readonly` to make a property immutable.
     Example:
     let settings: { readonly theme: string } = {
       theme: "dark"
     };

  8. Instead of repeating object structures, we can define a custom type or interface.
     Example using type:
     type Course = { title: string; duration: number };
     let courseInfo: Course = { title: "TypeScript Basics", duration: 4 };

  Object literals help define clear data structures, making your code easier to understand
  and less prone to bugs.
*/

// Examples

let userProfile: { username: string; points: number } = {
  username: "gamer123",
  points: 1500,
};
console.log(userProfile);

let deviceInfo: { brand: string; model?: string } = {
  brand: "Samsung",
};
console.log(deviceInfo);

type Course = {
  title: string;
  duration: number; // duration in hours
};

let courseInfo: Course = {
  title: "TypeScript Basics",
  duration: 4,
};
console.log(courseInfo);
