// reduce() processes all the elements and combines them into one single value

// In this case, we have to find the sum of the elements of an array
let array = [10, 20, 30, 40]

// Using for loop

let sum_1 = 0
for (let i = 0; i < array.length; i++) {
    sum_1 += array[i]
}
console.log(sum_1) // 100

// Using reduce() method

let sum_2 = array.reduce((a, b) => a + b, 0)
console.log(sum_2) // 100

// Both gave the same output
// But, with reduce() method, we can code with lesser lines