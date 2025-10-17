// 1. selecting parent element
let test = document.querySelector(".hel_4")
console.log(test)
console.log(test.parentNode)
console.log(test.parentElement)

// 2. Selecting child element
let test2 = document.querySelector(".container")
console.log(test2)
console.log(test2.childElementCount)
console.log(test2.childNodes)
console.log(test2.children)
console.log(test2.firstChild)
console.log(test2.lastChild)
console.log(test2.firstElementChild)

// 3. Selecting Sibling elements
let test3 = document.querySelector(".hel_2")
console.log(test3)
console.log(test3.previousElementSibling)
console.log(test3.nextElementSibling)