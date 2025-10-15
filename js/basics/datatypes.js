// --- Primitive Data Types ---

// 1. String: Represents textual data.
let strLet = 'Hello, world!';
var strVar = "JavaScript";
console.log('--- String ---');
console.log(`strLet: ${strLet} (type: ${typeof strLet})`);
console.log(`strVar: ${strVar} (type: ${typeof strVar})`);
console.log('\n'); // Adds a new line for better formatting

// 2. Number: Represents numeric data, including integers and floats.
let numLet = 42;
var numVar = 3.14159;
console.log('--- Number ---');
console.log(`numLet: ${numLet} (type: ${typeof numLet})`);
console.log(`numVar: ${numVar} (type: ${typeof numVar})`);
console.log('\n');

// 3. Boolean: Represents a logical entity with a value of true or false.
let boolLet = true;
var boolVar = false;
console.log('--- Boolean ---');
console.log(`boolLet: ${boolLet} (type: ${typeof boolLet})`);
console.log(`boolVar: ${boolVar} (type: ${typeof boolVar})`);
console.log('\n');

// 4. BigInt: Represents integers of arbitrary precision.
const bigInt1 = 12345678901234567890n;
const bigInt2 = BigInt(500);
console.log('--- BigInt ---');
console.log(`bigInt1: ${bigInt1} (type: ${typeof bigInt1})`);
console.log(`bigInt2: ${bigInt2} (type: ${typeof bigInt2})`);
console.log('\n');

// 5. Undefined: A variable that has been declared but not assigned a value.
let undefinedLet;
var undefinedVar;
console.log('--- Undefined ---');
console.log(`undefinedLet: ${undefinedLet} (type: ${typeof undefinedLet})`);
console.log(`undefinedVar: ${undefinedVar} (type: ${typeof undefinedVar})`);
console.log('\n');

// 6. Null: A special value that represents the intentional absence of any object value.
let nullLet = null;
var nullVar = null;
console.log('--- Null ---');
console.log(`nullLet: ${nullLet} (type: ${typeof nullLet})`); // Note: typeof null is 'object'
console.log(`nullVar: ${nullVar} (type: ${typeof nullVar})`);
console.log('\n');

// 7. Symbol: Represents a unique and immutable identifier.
const mySymbol1 = Symbol('id');
const mySymbol2 = Symbol('id');
console.log('--- Symbol ---');
console.log(`mySymbol1: ${String(mySymbol1)} (type: ${typeof mySymbol1})`); // Convert to string for display
console.log(`mySymbol2: ${String(mySymbol2)} (type: ${typeof mySymbol2})`);
console.log(`Are mySymbol1 and mySymbol2 equal? ${mySymbol1 === mySymbol2}`);
console.log('\n');

// --- Object Data Type ---

// 8. Object: The most complex data type, used to store collections of data.
// This includes arrays, which are a special type of object.
let arrObj = ["apple", "banana", "cherry"];
let obj = {
    'name': "bishwajit",
    'age': 22,
    'ca': "Dhaka"
};
console.log('--- Object ---');
console.log(`Array: ${arrObj} (type: ${typeof arrObj})`);
console.log(`Object: `, obj, `(type: ${typeof obj})`);