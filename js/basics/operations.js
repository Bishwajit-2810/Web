//  STRING CONCATENATION

// Declare two string variables
let a = 'hello'
let b = 'world'

// Use the + operator to join strings with a space in between
let c = a + " " + b
console.log(c) // Output: "hello world"


//  ARITHMETIC OPERATORS


let d, e
d = 5
e = 2

console.log(d + e)   // Addition: 5 + 2 = 7
console.log(d - e)   // Subtraction: 5 - 2 = 3
console.log(d * e)   // Multiplication: 5 * 2 = 10
console.log(d / e)   // Division: 5 / 2 = 2.5
console.log(d % e)   // Modulus: remainder of 5 ÷ 2 = 1
console.log(d ** 2)  // Exponentiation: 5² = 25
console.log(++d)     // Pre-increment: increases d to 6, then prints it


//  COMPARISON OPERATORS


// Reset variables for comparisons
a = 2
b = 3
c = 2
d = '2' // a string, not a number

// == compares values (does type conversion if needed)
console.log(a == b)   // false: 2 is not equal to 3
console.log(a != b)   // true: 2 is not equal to 3
console.log(a == c)   // true: both are 2
console.log(a == d)   // true: "2" (string) is converted to 2 (number)

// === compares both value AND type (strict comparison)
console.log(a === b)  // false: 2 is not equal to 3
console.log(a === d)  // false: number 2 is NOT the same type as string "2"


//  LOGICAL OPERATORS


// && (AND): returns the first falsy value, or the last if all are truthy
console.log(0 && 1) // 0 → because 0 is falsy, AND stops here

// || (OR): returns the first truthy value
console.log(0 || 1) // 1 → because 0 is falsy, so it returns 1

// ! (NOT): flips truthy/falsy values
console.log(!0)     // true → because 0 is falsy, so NOT 0 = true
