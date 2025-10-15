//  JAVASCRIPT THIS & CONTEXT - FULL REFERENCE

console.log("=== Global Context ===")
// In global scope, `this` refers to:
// - Browser → Window
// - Node → global object
console.log(this)

console.log("=== Regular Function ===")
function regularFunction() {
    console.log(this)
}
regularFunction()
// In strict mode → undefined
// In non-strict → global object

console.log("=== Object Method ===")
const person = {
    name: "Alice",
    greet() {
        console.log("Hello,", this.name)
    }
}
person.greet() // `this` refers to the object itself

console.log("=== Nested Function Inside Object ===")
const person2 = {
    name: "Bob",
    greet() {
        function inner() {
            console.log(this)
        }
        inner()
    }
}
person2.greet()
// Regular nested function loses `this` → undefined (strict) or global

console.log("=== Fix Nested Function with Arrow Function ===")
const person3 = {
    name: "Charlie",
    greet() {
        const inner = () => console.log(this.name)
        inner()
    }
}
person3.greet()
// Arrow functions inherit `this` from enclosing scope → "Charlie"

console.log("=== Constructor Function ===")
function Person(name) {
    this.name = name
}
const p = new Person("Dave")
console.log(p.name)
// `this` points to the new object created by `new`

console.log("=== Class Context ===")
class Animal {
    constructor(type) {
        this.type = type
    }
    speak() {
        console.log("I am a", this.type)
    }
}
const cat = new Animal("cat")
cat.speak()
// `this` refers to the instance

console.log("=== Explicit Binding: call(), apply(), bind() ===")
function sayHello(age) {
    console.log(`${this.name} is ${age} years old`)
}
const user = { name: "Eve" }

sayHello.call(user, 25)       // call → arguments listed
sayHello.apply(user, [30])    // apply → arguments as array
const boundFunc = sayHello.bind(user, 35)
boundFunc()                    // bind → returns a new function with `this` bound

console.log("=== Arrow Function in Global Scope ===")
const arrowFunc = () => console.log(this)
arrowFunc()
// In global scope, arrow inherits `this` from surrounding scope (usually global)

console.log("=== Object with Arrow Method ===")
const obj = {
    value: 42,
    regular: function () { console.log(this.value) },
    arrow: () => console.log(this.value)
}

obj.regular() // 42, regular method → `this` is object
obj.arrow()   // undefined, arrow method → `this` is inherited (global)
