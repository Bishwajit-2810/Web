// JavaScript Arrays - Full Reference

// 1. Creating arrays
let numbers = [1, 2, 3, 4, 5]           // common way
let fruits = ['apple', 'banana', 'mango']
let empty = new Array(3)                // [ <3 empty items> ]
let fromString = Array.from('hello')    // ['h','e','l','l','o']
let fromValues = Array.of(10, 20, 30)   // [10, 20, 30]

console.log(numbers, fruits, empty, fromString, fromValues)


// 2. Access and modify
console.log(numbers[0])                  // first element
numbers[1] = 99
console.log(numbers)


// 3. Length
console.log(numbers.length)


// 4. Add / Remove
numbers.push(6)                          // add at end
numbers.pop()                            // remove last
numbers.unshift(0)                       // add at start
numbers.shift()                          // remove first
console.log(numbers)


// 5. Concatenate
let combined = numbers.concat(fruits)
console.log(combined)


// 6. Spread operator
let spreaded = [...numbers, ...fruits]
console.log(spreaded)


// 7. Slice vs Splice
let sliced = numbers.slice(1, 3)         // copy part (non-destructive)
console.log(sliced)

let spliced = numbers.splice(1, 2, 100, 200)  // remove + replace
console.log(spliced, numbers)


// 8. Search
console.log(fruits.indexOf('banana'))    // index
console.log(fruits.includes('apple'))    // true/false


// 9. forEach (looping)
fruits.forEach((item, index) => {
    console.log(index, item)
})


// 10. *** IMPORTANT: map, filter, reduce ***
let mapped = numbers.map(x => x * 2)     // transform each element
console.log(mapped)

let filtered = numbers.filter(x => x > 50) // keep only matching
console.log(filtered)

let reduced = numbers.reduce((sum, val) => sum + val, 0) // accumulate
console.log(reduced)


// 11. Some / Every
console.log(numbers.some(x => x > 50))   // true if any match
console.log(numbers.every(x => x > 0))   // true if all match


// 12. Find / FindIndex
console.log(numbers.find(x => x > 50))   // first match
console.log(numbers.findIndex(x => x > 50))


// 13. *** IMPORTANT: sort & reverse ***
let nums = [5, 3, 9, 1, 8]
nums.sort()                              // lexicographic (string sort!)
console.log(nums)

nums.sort((a, b) => a - b)               // numeric ascending
console.log(nums)

nums.sort((a, b) => b - a)               // numeric descending
console.log(nums)

nums.reverse()                           // reverse order
console.log(nums)


// 14. flat / flatMap
let nested = [1, [2, [3, 4]]]
console.log(nested.flat(2))              // flatten 2 levels

let doubled = [1, 2, 3].flatMap(x => [x, x * 2])
console.log(doubled)


// 15. Join / toString
console.log(fruits.join('-'))            // apple-banana-mango
console.log(fruits.toString())           // apple,banana,mango


// 16. CopyWithin / Fill
let arr = [1, 2, 3, 4, 5]
arr.copyWithin(0, 3)                     // copy inside itself
console.log(arr)

arr.fill(0, 1, 4)                        // fill with 0
console.log(arr)


// 17. Destructuring
let [first, second, ...rest] = fruits
console.log(first, second, rest)


// 18. Multidimensional
let matrix = [[1, 2], [3, 4], [5, 6]]
console.log(matrix[1][0])                // 3


// 19. Array.isArray
console.log(Array.isArray(fruits))       // true
console.log(Array.isArray('hello'))      // false


// 20. Keys, Values, Entries
for (let key of fruits.keys()) console.log('Key:', key)
for (let val of fruits.values()) console.log('Value:', val)
for (let [i, v] of fruits.entries()) console.log(`Index ${i} = ${v}`)


// 21. at()
console.log(fruits.at(-1))               // last element




// Array Methods Cheat Sheet

// *** Creation ***
// Array(), Array.of(), Array.from()
// 
// *** Adding / Removing ***
// push(), pop(), shift(), unshift(), splice()
// 
// *** Copying / Joining ***
// concat(), slice(), spread [...arr], join(), toString()
// 
// *** Searching ***
// indexOf(), lastIndexOf(), includes(), find(), findIndex()
// 
// *** Iteration / Testing ***
// forEach(), map(), filter(), reduce(), reduceRight()
// some(), every()
// 
// *** Sorting ***
// sort(), reverse()
// 
// *** Flattening ***
// flat(), flatMap()
// 
// *** Modification ***
// copyWithin(), fill()
// 
// *** Inspection ***
// length, isArray(), keys(), values(), entries(), at()
// 
// *** Other ***
// destructuring, multidimensional arrays
