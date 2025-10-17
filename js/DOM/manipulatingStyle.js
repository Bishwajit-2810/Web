// DOM Style Manipulation Demo
let box = document.getElementById("myBox")
console.log("Original box element:", box)

// 1. style property
console.log("\n1. style property")
box.style.backgroundColor = "lightgreen"
box.style.width = "200px"
box.style.height = "100px"
console.log("Applied inline styles (backgroundColor, width, height):", box.style.cssText)

// 2. cssText
console.log("\n2. cssText")
box.style.cssText += "background-color: pink; border: 5px solid purple; padding: 10px"  //to maintain previous style
box.style.cssText = "background-color: pink; border: 5px solid purple; padding: 10px"
console.log("Replaced all inline styles using cssText:", box.style.cssText)

// 3. getComputedStyle()
console.log("\n3. getComputedStyle()")
let computedStyles = getComputedStyle(box)
console.log("Computed background-color:", computedStyles.backgroundColor)
console.log("Computed border width:", computedStyles.borderWidth)
console.log("Computed padding:", computedStyles.padding)

// 4. className property
console.log("\n4. className property")
box.className = "highlight"
console.log("Changed className to 'highlight'. Current className:", box.className)

// 5. classList property
console.log("\n5. classList property")
box.classList.add("rounded")
console.log("Added 'rounded' class. Current classList:", box.classList)

box.classList.remove("highlight")
console.log("Removed 'highlight'. Current classList:", box.classList)

box.classList.toggle("highlight")
console.log("Toggled 'highlight'. Current classList:", box.classList)

console.log("Does box contain 'rounded'? ->", box.classList.contains("rounded"))
