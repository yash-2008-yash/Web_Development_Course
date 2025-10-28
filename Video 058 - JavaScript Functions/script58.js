// Function to evaluate a 3x3 determinant
function evaluateDeterminant(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    let result = a11 * ((a22 * a33) - (a32 * a23)) - a12 * ((a21 * a33) - (a31 * a23)) + a13 * ((a21 * a32) - (a31 * a22));
    console.log(`The determinant's value is ${result}`)
}

evaluateDeterminant(2, 7, 1, 1, 1, 1, 10, 8, 1) // Answer: 47
evaluateDeterminant(3, -4, 5, 1, 1, -2, 2, 3, 1) // Anwer: 46

// Functions helps us to write a block of code and make it work with just a line of code.
// We can use the function as many times as we want, which increases it's reusability factor.

// In declaration of the function, the values inside the bracket are called parameters.
// During the function call, when we pass the values, they are called arguments.