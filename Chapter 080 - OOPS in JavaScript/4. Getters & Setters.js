// Setter is a special function that updates a property’s value with rules instead of letting anything be assigned.
// Getter is a special function that returns a property’s value safely instead of giving direct access.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    set firstName(newFirstName) {
        if (typeof (newFirstName) === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName
        } else {
            console.error("First name must be a non-empty string.")
        }
    }

    set lastName(newLastName) {
        if (typeof (newLastName) === "string" && newLastName.length > 0) {
            this._lastName = newLastName
        } else {
            console.error("Last name must be a non-empty string.")
        }
    }

    set age(newAge) {
        if (typeof (newAge) === "number" && newAge >= 0) {
            this._age = newAge
        } else {
            console.error("Age must be a non-negative number.")
        }
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get age() {
        return this._age
    }
}

let shinchan = new Person("Shinnosuke", "Nohara", 5)
// let shinchan = new Person(87, 54, "Hello")
// If we give invalid inputs like this, we'll get errors.

console.log(shinchan.firstName)
console.log(shinchan.lastName)
console.log(shinchan.age)