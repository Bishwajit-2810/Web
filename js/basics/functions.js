//   FUNCTIONS IN JAVASCRIPT 

/** 1. Function Declaration (hoisted) */
function sayHello() {
    console.log("Hello from a function declaration!")
}
sayHello()

/** 2. Function Expression (not hoisted) */
const greet = function (name) {
    console.log("Hello,", name)
}
greet("Alice")

/** 3. Arrow Function (ES6, concise syntax) */
const add = (a, b) => a + b
console.log("Add result:", add(5, 3))

/** 4. Arrow Function (with block body) */
const multiply = (a, b) => {
    let result = a * b
    return result
}
console.log("Multiply result:", multiply(4, 6))

/** 5. Anonymous Function (used immediately) */
setTimeout(function () {
    console.log("This runs after 1 second (anonymous function).")
}, 1000)

    /** 6. Immediately Invoked Function Expression (IIFE) */
    ; (function () {
        console.log("IIFE executed immediately!")
    })()

/** 7. Function with Parameters and Default Values */
function greetUser(name = "Guest") {
    console.log("Welcome,", name)
}
greetUser("Bishwajit")
greetUser()

/** 8. Function Returning a Value */
function square(x) {
    return x * x
}
console.log("Square of 5:", square(5))

/** 9. Higher-Order Function (takes another function as argument) */
function doMath(a, b, operation) {
    return operation(a, b)
}
console.log("Higher-order add:", doMath(10, 5, add))
console.log("Higher-order multiply:", doMath(10, 5, multiply))

/** 10. Callback Function (passed into another function) */
function processUserInput(callback) {
    let name = "Charlie"
    callback(name)
}
processUserInput(function (user) {
    console.log("Callback says hello to", user)
})

/** 11. Recursive Function */
function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}
console.log("Factorial of 5:", factorial(5))

/** 12. Function Constructor (rarely used) */
const sum = new Function("a", "b", "return a + b")
console.log("Function constructor:", sum(4, 7))

/** 13. Generator Function (function*) */
function* numberGenerator() {
    yield 1
    yield 2
    yield 3
}
const gen = numberGenerator()
console.log("Generator next:", gen.next().value) // 1
console.log("Generator next:", gen.next().value) // 2
console.log("Generator next:", gen.next().value) // 3

/** 14. Async Function (returns a promise) */
async function fetchData() {
    return "Data fetched!"
}
fetchData().then(result => console.log(result))

/** 15. Function with Rest Parameters */
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5))

/** 16. Function with Spread Operator (passing array as args) */
const nums = [4, 9, 16]
console.log("Max with spread:", Math.max(...nums))
