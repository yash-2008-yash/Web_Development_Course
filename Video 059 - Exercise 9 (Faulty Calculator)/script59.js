// Inputs from the user
let a = Number(prompt("Enter 1st number : "))
let b = Number(prompt("Enter 2nd number : "))
let operation = prompt("Operation (+ - * /) : ")

let result = 0

// The 10% part
number = Math.random()
// This prints a random number between 0 and 1
// There is 10% that it prints a number less than 0.1
// So, I am using it to make the faulty calculator only 10% of the time

if (number < 0.1) {
    switch (operation) {
        case "+":
            result = a - b
            console.log(`Result : ${result}`)
            break;

        case "-":
            result = a / b
            console.log(`Result : ${result}`)
            break;

        case "*":
            result = a + b
            console.log(`Result : ${result}`)
            break;

        case "/":
            result = a ** b
            console.log(`Result : ${result}`)
            break;

        default:
            console.log("Invalid operation.")
            break;
    }
}

else {
    switch (operation) {
        case "+":
            result = a + b
            console.log(`Result : ${result}`)
            break;

        case "-":
            result = a - b
            console.log(`Result : ${result}`)
            break;

        case "*":
            result = a * b
            console.log(`Result : ${result}`)
            break;

        case "/":
            result = a / b
            console.log(`Result : ${result}`)
            break;

        default:
            console.log("Invalid operation.")
            break;
    }
}