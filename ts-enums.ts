/* TypeScript Enums */

/**
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
 * By default, enums will initialize the first value to 0 and add 1 to each additional value.
 * Enums come in two options string and numeric.
 * SYNTAX:
   enum NAME {
	value1,
	value2,
	value3
}
 */

//Example: HTTP Status Codes

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound); // prints 404

console.log(StatusCodes.Success); // prints 200
