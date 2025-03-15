// Basic Type Annotations in TypeScript

//Syntax
// identifier: type = value;

// String Type
let firstName: string = "James";

// Number Type
let age: number = 25;

// Boolean Type
let isActive: boolean = true;

// Undefined Type
let noValue: undefined = undefined;

// Null Type
let nothing: null = null;

// Any Type (can be any type)
let randomValue: any = 42;
randomValue = "Hello, world!"; // Can change type

// Void Type (typically used for functions that do not return anything)
function sayHello(): void {
  console.log("Hello, world!");
}
