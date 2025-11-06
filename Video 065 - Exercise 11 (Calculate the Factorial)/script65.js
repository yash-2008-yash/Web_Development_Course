// The number we are finding the factorial of
let number = 10

let factorial = 0
let array = []

// Storing 'n to 1' in the array
for (i = number; i > 0; i--) {
    array.push(i)
}

// reduce() to find the product of all elements of the array
factorial = array.reduce((a, b) => a * b)

console.log(`The factorial of ${number} is ${factorial}`)