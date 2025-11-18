// The number we are finding the factorial of
let number = 5

let array = []
let factorial = 0

if (number == 0) {
    console.log(`The factorial of 0 is 1`)
}

else {
    // Storing 'n to 1' in the array
    for (i = number; i > 0; i--) {
        array.push(i)
    }

    // reduce() to find the product of all elements of the array
    factorial = array.reduce((a, b) => a * b)

    console.log(`The factorial of ${number} is ${factorial}`)
}