// Logical Operations
// Performs AND, OR, NOT operations

let number1 = 10
let number2 = 2

// Logical AND
console.log(number1 > number2 && number2 < number1)
// AND returns 'true' only if both conditions are true
// In this case, both conditions are true, so it returns 'true'

// Logical OR
console.log(number1>number2 || number2>number1)
// OR returns 'true' even if only one condition is true
// In this case, only first condition is true, but it still returns 'true'

// Logical NOT
console.log(!false)
// NOT reverses the output, that's all
// If it's 'true', it'll print 'false', and vice-verca