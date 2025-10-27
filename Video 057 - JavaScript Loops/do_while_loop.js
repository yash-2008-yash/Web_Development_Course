let i = 10

do {
    console.log(i)
} while (i > 100);

// Here, first the loop runs and then the condition is checked
// In this case, the condition is false, because 10 is not greater than 100
// Even then, the loop runs. That's 'do-while' loop
// This is used when we need the loop to run atleast once

// Understand the difference between 'while' and 'do-while' loop
// Let's see the same code in 'while' loop
// Here, the condition is checked first, so the code will not run

let j=10

while (j>100) {
    console.log(j)
}