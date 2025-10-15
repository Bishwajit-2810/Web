
//   JAVASCRIPT OOP - COMPLETE EXAMPLE

/*************
 * CLASS & CONSTRUCTOR
 * Template for creating objects and initializing properties
 *************/
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }

    isAdult() {
        return this.age >= 18
    }
}

const person1 = new Person("Alice", 25)
person1.greet()
console.log("Is adult?", person1.isAdult())

/*************
 * INHERITANCE & METHOD OVERRIDING
 * Student inherits Person, can override methods
 *************/
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age) // inherit name and age
        this.grade = grade
    }

    // Method Overriding → Polymorphism
    greet() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, in grade ${this.grade}`)
    }

    study(subject) {
        console.log(`${this.name} is studying ${subject}`)
    }
}

/*************
 * Another subclass → Teacher
 * Inherits Person and overrides greet → Polymorphism
 *************/
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject
    }

    greet() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}`)
    }
}

const student1 = new Student("Charlie", 18, "12th")
const teacher1 = new Teacher("Emma", 30, "Physics")

student1.greet()   // Student's greet
teacher1.greet()   // Teacher's greet
student1.study("Math")
console.log("Is student adult?", student1.isAdult()) // inherited method

/*************
 * POLYMORPHISM
 * Same method name behaves differently in different subclasses
 *************/
const people = [student1, teacher1]
people.forEach(person => person.greet()) // dynamic polymorphism

/*************
 * ENCAPSULATION / PRIVATE FIELDS
 *************/
class BankAccount {
    #balance = 0 // private field

    constructor(owner) {
        this.owner = owner
    }

    deposit(amount) {
        this.#balance += amount
        console.log(`${this.owner} deposited $${amount}, new balance $${this.#balance}`)
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log(`Insufficient funds! Balance: $${this.#balance}`)
        } else {
            this.#balance -= amount
            console.log(`${this.owner} withdrew $${amount}, remaining balance $${this.#balance}`)
        }
    }

    getBalance() {
        return this.#balance
    }
}

const account = new BankAccount("David")
account.deposit(500)
account.withdraw(200)
console.log("Balance is:", account.getBalance())

/*************
 * STATIC METHODS
 * Methods that belong to the class, not instance
 *************/
class Calculator {
    static add(a, b) {
        return a + b
    }

    static multiply(a, b) {
        return a * b
    }
}

console.log("Static add:", Calculator.add(5, 10))
console.log("Static multiply:", Calculator.multiply(4, 6))

/*************
 * SUMMARY OF OOP PILLARS IN THIS FILE
 * Class → template for creating objects (Person, Student, BankAccount)
 * Constructor → initialize object properties
 * Inheritance → Student and Teacher extend Person
 * Method Overriding → subclass can redefine parent methods (greet)
 * Encapsulation / Private Fields → #balance
 * Static Methods → methods that belong to the class, not instance (Calculator.add)
 * Polymorphism → multiple subclasses have different greet() behavior
 *************/
