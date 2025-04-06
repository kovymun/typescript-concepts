/*
  TYPESCRIPT OPTIONAL PROPERTIES & PARAMETERS

  The concept of "optional types" in TypeScript is not a formal term, but it usually refers to:
  - Optional properties in object types
  - Optional function parameters
  - Union types that include `undefined`

  OPTIONAL PROPERTIES:

  1. You can mark a property in an object type as optional by adding a "?" after the key name.
     Syntax: keyName?: type

  2. This tells TypeScript that the property may or may not be present on the object.

  3. Example:
     type Profile = {
       username: string;
       bio?: string; // 'bio' is optional
     };

     let userA: Profile = { username: "dev101" }; // Valid: 'bio' is missing
     let userB: Profile = { username: "coderX", bio: "I love TypeScript" }; // Also valid

  OPTIONAL PARAMETERS:

  4. Function parameters can also be marked optional using "?".
     Syntax: functionName(param1: type, param2?: type) { ... }

  5. If the optional parameter is not provided when calling the function, its value will be `undefined`.

  6. Example:
     function greetUser(name: string, title?: string) {
       if (title) {
         console.log(`Hello, ${title} ${name}`);
       } else {
         console.log(`Hello, ${name}`);
       }
     }

     greetUser("Alice");          // Output: Hello, Alice
     greetUser("Bob", "Dr.");     // Output: Hello, Dr. Bob

  OPTIONAL-LIKE BEHAVIOR WITH UNION TYPES:

  7. You can explicitly allow a variable or property to be `undefined` using union types.
     Example:
     let statusMessage: string | undefined;

     statusMessage = "All systems operational"; // OK
     statusMessage = undefined;                // Also OK

  These features make TypeScript flexible and allow for optional data without losing type safety.
*/

// Examples

type Product = {
  name: string;
  description?: string; // Optional property
};

let item1: Product = { name: "Notebook" };
let item2: Product = { name: "Phone", description: "Latest model" };

console.log(item1);
console.log(item2);

function logActivity(activity: string, time?: string): void {
  if (time) {
    console.log(`You did "${activity}" at ${time}.`);
  } else {
    console.log(`You did "${activity}".`);
  }
}

logActivity("Exercise");
logActivity("Lunch", "1:00 PM");

let errorMessage: string | undefined;

errorMessage = "Something went wrong!";
console.log(errorMessage);

errorMessage = undefined; // Also allowed
console.log(errorMessage);
