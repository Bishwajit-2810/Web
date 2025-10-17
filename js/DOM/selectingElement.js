// 1. getElementById()
let msg = document.getElementById("message") //if multiple element has same element then give the first one
console.log(msg)

// 2. getElementsByName()
let lang = document.getElementsByName("language")
console.log(lang)

// 3. getElementsByTagName()
let hel = document.getElementsByTagName("h1")
console.log(hel)
console.log(hel[2])

// 4. getElementsByClassName()
let claHel = document.getElementsByClassName("hel 2")
console.log(claHel)
let box = document.getElementsByClassName("container")
console.log(box)
let ida = document.getElementById("container")
let cla = ida.getElementsByClassName("hel 1")
console.log(cla)

// 5. querySelector() and querySelectorAll()
let hello = document.querySelector("h1")
console.log(hello)
let helloAll = document.querySelectorAll("h1")
console.log(helloAll)
helloAll = document.querySelectorAll("h1 , div")
console.log(helloAll)
