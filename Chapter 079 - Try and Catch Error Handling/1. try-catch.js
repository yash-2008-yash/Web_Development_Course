// let number1 = 10
// function divide(a, b) {
//     return a / b
// }
// console.log(`Result: ${divide(number1, number2)}`)
// console.log("THANK YOU FOR VISITING")

// Here, the code will crash because number2 isn't defined
// ReferenceError: number2 is not defined at Object.<anonymous>
// The "THANK YOU FOR VISITING" willn't even get executed because of the crash

// But with try-catch-finally block, we can handle this error without crashing the code

let number1 = 10
function divide(a, b) {
    return a / b
}

try {
    console.log(`Result: ${divide(number1, number2)}`)
} catch (error) {
    console.log(`Error: ${error}`)
} finally {
    console.log("THANK YOU FOR VISITING")
}

// Now, the code will not crash like before
// It'll handle the error and move on running the code

// 'try' will try the block of code inside it.
// 'catch' will run its block of code when an error occurs in try block.
// 'finally' will run its block of code irrespective of the success/failure.

// NOTE: Why 'finally' is important?
// Because, in functions, after 'return' statement, nothing will run.
// But with finally clause, we can make code run even if it's after return statement.