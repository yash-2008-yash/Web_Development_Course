// filter() scans through an array and picks only the elements which satisfy the given condition

// In this case, we filter even numbers from 1 to 10
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using for loop

let even_numbers_1 = []
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        even_numbers_1.push(array[i])
    }
}
console.log(even_numbers_1) // [2, 4, 6, 8, 10]

// Using filter() method

let even_numbers_2 = array.filter(e => e % 2 == 0)
console.log(even_numbers_2) // [2, 4, 6, 8, 10]

// Both gave the same output
// But, with filter() method, we can code with lesser lines