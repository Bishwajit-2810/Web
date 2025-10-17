console.log("=== JavaScript Events Full Demo ===")

// 1. What is an Event
console.log("\n1. What is an Event")
// An event is something that happens in the browser like click, hover, keypress, etc.

// 2. Event Bubbling & Event Capturing
console.log("\n2. Event Bubbling & Capturing")
let parent = document.getElementById("parent")
let child = document.getElementById("child")

// Capturing phase
parent.addEventListener("click", () => console.log("Parent clicked - capturing"), true)
child.addEventListener("click", () => console.log("Child clicked - capturing"), true)

// Bubbling phase
parent.addEventListener("click", () => console.log("Parent clicked - bubbling"), false)
child.addEventListener("click", () => console.log("Child clicked - bubbling"), false)

// 3. Event Handler in HTML Attributes
console.log("\n3. HTML onclick attribute")
function htmlClick() {
    console.log("Button clicked using HTML onclick attribute")
}

// 4. DOM Level 0 event handlers
console.log("\n4. DOM0 onclick handler")
let btnDOM0 = document.getElementById("btnDOM0")
btnDOM0.onclick = function () {
    console.log("Button clicked using DOM0 onclick")
}

// 5. addEventListener()
console.log("\n5. addEventListener()")
let btnAddRemove = document.getElementById("btnAddRemove")
function listenerFunc() {
    console.log("Button clicked using addEventListener")
}
btnAddRemove.addEventListener("click", listenerFunc)

// 6. removeEventListener()
console.log("\n6. removeEventListener()")
// Remove listener after 5 seconds
setTimeout(() => {
    btnAddRemove.removeEventListener("click", listenerFunc)
    console.log("Removed addEventListener from btnAddRemove")
}, 5000)

// 7. Event Objects (Expanded)
console.log("\n7. Event Objects (Expanded)")

child.addEventListener("mouseover", (event) => {
    console.log("Mouseover event object:", event)
    console.log("Event type:", event.type)
    console.log("Target element:", event.target)
    console.log("Current target:", event.currentTarget)
    console.log("Mouse coordinates (clientX, clientY):", event.clientX, event.clientY)
    console.log("Mouse coordinates (offsetX, offsetY):", event.offsetX, event.offsetY)
    console.log("Modifier keys pressed? Alt:", event.altKey, "Ctrl:", event.ctrlKey, "Shift:", event.shiftKey)
    console.log("Is the event trusted (user-generated)?", event.isTrusted)
})

// Click event with preventDefault
child.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Clicked child div. Default action prevented!")
    console.log("Event target text:", event.target.textContent)
})

// Stop propagation example
child.addEventListener("dblclick", (event) => {
    event.stopPropagation()
    console.log("Double-clicked child div. Bubbling stopped.")
})

// Keyboard event example
let inputField = document.getElementById("inputField")
inputField.addEventListener("keydown", (event) => {
    console.log(`Key down: ${event.key}, code: ${event.code}`)
    console.log(`Alt: ${event.altKey}, Ctrl: ${event.ctrlKey}, Shift: ${event.shiftKey}`)
})
inputField.addEventListener("keyup", (event) => console.log(`Key up: ${event.key}`))
inputField.addEventListener("focus", () => console.log("Input focused"))
inputField.addEventListener("blur", () => console.log("Input blurred"))

// 8. Different Types of Event (Form submit)
let form = document.getElementById("demoForm")
form.addEventListener("submit", (event) => {
    event.preventDefault() // Stop form from submitting
    console.log("Form submitted! Default prevented.")
})
