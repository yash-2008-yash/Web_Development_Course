// There are three types to declare a variable - var, let, const

// var (used to declare global varibales)
var number_1 = 5; // This can be used throughout the program

// let (used to declare local variables)
let number_2 = 10; // This can be only used in that block of code

// const (used to declare constants which value can't be changed)
const pi = 3.142; // This value can be used, but can't be changed
// pi = pi + 1; This will give an error because constants can't be modified

let a = 32;
let b = "Hello";
console.log(typeof a) // Displays the data type of a (number)
console.log(typeof b) // Displays the data type of b (string)

// Rules for naming the variables

// 1. Variables should only contain alphabets, numbers, underscores, $ sign.
// 2. Variabes name can be started with alphabets, $, underscore, but not a number.
// 3. Variables can't be named after a JavaScript keyword.
// 4. JS is a case-sensitive language, so a and A are considered as different variables.
// 5. Variables name shouldn't contain blankspaces.

// Data Types - There are 7 primitive data types in JavaScript
// Number, String, Boolean, BigInt, Symbol, Undefined, Null

// Object is an user-defined data type based on the primitive data types

let obj = {
    "name": "Yashwanth",
    "age": 17,
    "is_dumb": false
}
console.log(obj)

const password = Symbol('id');
const user = {
    name: "Yashwanth",
    [password]: 2008 // Imagine this is my bank PIN
};

// console.log(user.password); // Password can't be accessed like this
console.log(user[password]); // It's using Symbol, so the password can be accessed