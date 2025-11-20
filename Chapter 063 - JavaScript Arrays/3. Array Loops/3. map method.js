// map() performs a specific task on every element of the array

// In this case, we are squaring every element of the array
let array = [1, 2, 3, 4, 5, 6]

// Using for loop

let squares_1 = []
for (let i = 0; i < array.length; i++) {
    squares_1.push(array[i] ** 2)
}
console.log(squares_1) // [1, 4, 9, 16, 25, 36]

// Using map() method

let squares_2 = array.map(e => e ** 2)
console.log(squares_2) // [1, 4, 9, 16, 25, 36]

// Both gave the same output
// But, with map() method, we can code with lesser lines