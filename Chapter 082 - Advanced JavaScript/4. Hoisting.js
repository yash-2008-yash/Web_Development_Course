// Hoisting is JavaScript’s behavior of allocating memory for variables and functions before code execution.
// Only declarations are hoisted, not initializations.

console.log(a) // undefined
var a = 10

// In var, it says undefined because internally JS reads it as:

var a = undefined
console.log(a) // undefined
a = 10

// In JS, accessing a variable which is decalared, but not initialized, is valid.
// But, accessing a variable before declaration itself is a fucking error.

console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 20

// That's because let is differently treated than var.
// JS internally reads let like:

// TDZ Starts

// console.log(b)

// let b = 20
// TDZ Ends

// Accessing variables inside Temporal Dead Zone is strictly forbidden in JS.
// That is why JS throws an error instead of 'undefined'.
// Same thing happens with const.

// But in fucntions:

sayHI()

function sayHI() {
    console.log("Hello, World!")
}

// Even if you call the function before it's declartion, it'll work.
// That's because JS moves the function declaration + body to the top, internally, before the execution.

// This is what we call 'Hoisting' in JavaScript.