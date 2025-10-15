// Prototype-based OOP in JavaScript

// Constructor Function → Acts like a "Class"
function Person(name, age) {
    this.name = name
    this.age = age
}

// Prototype Method (shared by all instances of Person)
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
}

// Static-like Method (attached to constructor, not instance)
Person.describe = function () {
    return "A Person has a name and an age."
}

// Encapsulation with Closures (simulate private property)
function BankAccount(owner, initialBalance) {
    this.owner = owner
    let balance = initialBalance  // private variable (not accessible directly)

    this.getBalance = function () {
        return balance
    }

    this.deposit = function (amount) {
        if (amount > 0) balance += amount
        return balance
    }

    this.withdraw = function (amount) {
        if (amount <= balance) balance -= amount
        return balance
    }
}

// Inheritance with Prototype
function Student(name, age, grade) {
    Person.call(this, name, age) // call parent constructor
    this.grade = grade
}

// Inherit prototype from Person
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

// Overriding Method (Polymorphism)
Student.prototype.greet = function () {
    return `Hi, I'm ${this.name}, a student in grade ${this.grade}.`
}

// Another Subclass
function Teacher(name, age, subject) {
    Person.call(this, name, age)
    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher

// Polymorphism → Different greet implementations
Teacher.prototype.greet = function () {
    return `Good day, I'm ${this.name}, and I teach ${this.subject}.`
}

// ==============================
// Usage / Demonstration
// ==============================

// Creating instances
const p1 = new Person("Alice", 30)
const s1 = new Student("Bob", 16, 10)
const t1 = new Teacher("Carol", 40, "Mathematics")

console.log("--- Prototypal OOP Demo ---")
console.log(p1.greet())   // Parent method
console.log(s1.greet())   // Overridden (Student version)
console.log(t1.greet())   // Overridden (Teacher version)

console.log(Person.describe()) // Static-like method

// Encapsulation demo
const acc1 = new BankAccount("Alice", 1000)
console.log("Initial Balance:", acc1.getBalance())
acc1.deposit(500)
console.log("After Deposit:", acc1.getBalance())
acc1.withdraw(300)
console.log("After Withdraw:", acc1.getBalance())
// console.log(acc1.balance) // ❌ undefined (private)

// Prototype chain check
console.log(s1 instanceof Student) // true
console.log(s1 instanceof Person)  // true (inherited)
console.log(t1 instanceof Teacher) // true
console.log(t1 instanceof Person)  // true

// ==============================
// Key Notes:
// 1. Person, Student, Teacher are created using constructor functions
// 2. Shared methods are on prototypes → memory efficient
// 3. Inheritance is achieved via Object.create(Person.prototype)
// 4. Polymorphism → greet() behaves differently in Student/Teacher
// 5. Encapsulation simulated via closures (BankAccount)
// 6. Static methods are attached directly to constructor
// ==============================
