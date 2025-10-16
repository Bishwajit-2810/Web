const person = {
    name: "Bishwajit",
    greet() {
        console.log(`hello ${this.name}`)
    }
}

person.greet()
const getFunction = person.greet
getFunction()

const boundGreet = person.greet.bind({ name: "Raj" })
boundGreet()

person.greet.call({ name: "Digu" })
person.greet.apply({ name: "Saif" });



// bind():

//  Returns a new function with a bound this context.

//  The function is invoked later, not immediately.

// call():

//  Immediately invokes the function with a specified this context.

//  Arguments are passed individually after the this context.

// apply():

//  Immediately invokes the function with a specified this context.

//  Arguments are passed as an array or array - like object.