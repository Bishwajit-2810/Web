function Person(name) {
    this.name = name
}

Person.prototype.greet = function () {
    console.log(`hello ${this.name}`)
}

let me = new Person("Bishwajit")
me.greet()