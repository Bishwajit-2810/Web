//  CONTROL FLOW IN JAVASCRIPT (FULL SET)

// 1. if statement
let age = 18
if (age >= 18) {
    console.log("You are an adult.")
}

// 2. if...else
let isRaining = true
if (isRaining) {
    console.log("Take an umbrella.")
} else {
    console.log("Enjoy the sunshine!")
}

// 3. if...else if...else
let score = 75
if (score >= 90) {
    console.log("Grade: A")
} else if (score >= 60) {
    console.log("Grade: B")
} else {
    console.log("Grade: C")
}

// 4. switch statement
let fruit = "apple"
switch (fruit) {
    case "apple":
        console.log("Apples are red or green.")
        break;
    case "banana":
        console.log("Bananas are yellow.")
        break;
    default:
        console.log("Unknown fruit.")
}

// 5. ternary operator (shorthand for if...else)
// Syntax: condition ? valueIfTrue : valueIfFalse
let marks = 50;
let result = (marks >= 40) ? "Pass" : "Fail"
console.log("Ternary result:", result)

// 6. for loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i)
}

// 7. while loop
let count = 1
while (count <= 3) {
    console.log("While loop count:", count)
    count++
}

// 8. do...while loop
let num = 0
do {
    console.log("Do...while executed once even if false:", num)
    num++
} while (num < 1)

// 9. for...in loop (iterate over object keys)
let person = { name: "Alice", age: 20, city: "Paris" }
for (let key in person) {
    console.log("Key:", key, "Value:", person[key])
}

// 10. for...of loop (iterate over iterable objects like arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color)
}

// 11. break (exit a loop early)
for (let i = 1; i <= 5; i++) {
    if (i === 3) break
    console.log("Break example, i =", i) // stops when i = 3
}

// 12. continue (skip current iteration)
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue
    console.log("Continue example, i =", i) // skips i = 3
}

// 13. try...catch...finally (exception handling)
try {
    let result = 10 / 0
    console.log("Result:", result)
    throw new Error("Custom error!"); // force an error
} catch (error) {
    console.log("Caught error:", error.message)
} finally {
    console.log("Finally block always runs.")
}

// 14. return (exit a function early)
function greet(name) {
    if (!name) {
        return "No name provided."
    }
    return "Hello, " + name
}
console.log(greet("Bishwajit"))
console.log(greet())

// 15. throw (manually throw an error)
function checkPositive(n) {
    if (n < 0) {
        throw new Error("Number must be positive!")
    }
    return n
}
try {
    console.log(checkPositive(-5))
} catch (err) {
    console.log("Error caught:", err.message)
}
