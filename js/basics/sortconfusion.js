let nums = [1, 2, 15, 30, 100, 9]

// Default sort → treats numbers like strings
console.log(nums.sort())
// Output: [1, 100, 15, 2, 30, 9]
// WHY? Because "100" < "15" (string comparison)

// Fix: Provide a compare function
console.log(nums.sort((a, b) => a - b))
// Output: [1, 2, 9, 15, 30, 100]

// Descending order
console.log(nums.sort((a, b) => b - a))
// Output: [100, 30, 15, 9, 2, 1]

let fruits = ["banana", "Apple", "cherry"]

// Default → Unicode order (uppercase before lowercase)
console.log(fruits.sort())
// Output: ["Apple", "banana", "cherry"]

// Case-insensitive sort
console.log(fruits.sort((a, b) => a.localeCompare(b)))
// Output: ["Apple", "banana", "cherry"]

// Reverse alphabetical
console.log(fruits.sort((a, b) => b.localeCompare(a)))
// Output: ["cherry", "banana", "Apple"]
