// foreach, filter, reducer, map, set


const arr = [1, 2, 3, 7, 8, 4, 6, 5]

//sorting array
console.log(arr.sort((a, b) => b - a))
console.log(arr.sort((a, b) => a - b))
console.log(arr.sort())



// foreach
let sum = 0
arr.forEach(element => {
    sum += element
});
console.log(sum);

arr.forEach((element, index) => {
    console.log(index + " " + element)
});

arr.forEach((element, index, arr) => {
    console.log(index + " " + element + " " + (arr[index] == element))

});

// filter
let arr2 = arr.filter((number) => number > 5)
console.log(arr2)

// array_map
let arr3 = arr2.map((number) => number * 2)
console.log(arr3)

// reduce
let arr4 = arr.reduce((accumulator, currentValue) => { return accumulator += currentValue }, 5)
console.log(arr4)

let arr5 = arr.reduce((accumulator, currentValue) => accumulator += currentValue)
console.log(arr5)


// Set
let arr6 = [1, 2, 5, 6, 7, 8, 1, 2, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 8]
const set1 = new Set(arr6)
console.log(set1)
set1.add(11)
set1.delete(2)
console.log(set1)
console.log(set1.has(1))

// Map
const map = new Map([
    ['hello', 40],
    ['hlo', 41],
    ['ho', 42],
    ['elo', 43],
    ['he', 44]
])

console.log(map)
console.log(map.get('hlo'))
console.log(map.has('hlo'))
map.clear()
console.log(map);
