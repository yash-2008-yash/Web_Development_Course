// IIFE is a type of function which gets executed immediately after it's defined.
// No need of naming the function, no need to call the fucntion later.

// Normal function
function HelloWorld() {
    console.log("Hello, World!")
}
HelloWorld();

// IIFE function
(function () {
    console.log("Hello, World!")
})()

// Both do the same work, but IIFE is faster and efficient when we don't want to name the function.

// We don't need to use IIFE in our code because it's outdated.
// But, we should still understand it because old legacy codes still contain IIFE.
// As a developer, we don't just write new code, we also read old code, maintain it, extend it with new features.
// So, if we don't learn the basics of pre-ES6 features, we are cooked.

// NOTE: ES6, aka ECMAScript 2015, was a major upgrade that made JS cleaner, faster, and more powerful than before.
// Before ES6, JavaScript was messy and limited, but when ES6 was introduced, new features changed everything.
// let & const were introduced which gave us better variable declarations and scope-control.
// Arrow functions were introduced which gave us shorter and cleaner functions.
// Template literals were introduced which is super useful in strings with variables.
// Classes were introduced which added OOP concepts to JavaScript.
// Modules were introduced to import/export code in our project.
// Destructuring was introduced which extracts values from arrays/objects easily.
// Promises were intoduced which made handling async tasks easier.
// Default parameters were introduced which lets us set function defaults.
// Many more features were added, these are just the core updates.