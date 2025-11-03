// ARRAY LOOPS

let a = [12, 23, 34, 45, 56, 67]

// This 'for' loop will print all of the elements one-by-one
for (let i = 0; i < a.length; i++) {
    const element = a[i]
    console.log(element)
}

// This 'for-each' loop will print value, index and whole array, for each element
a.forEach((value, index, full_array) => {
    console.log(value, index, full_array)
})

let b = [1, 2, 3, 4, 5, 6]

// map() performs a specific task on every element of the array
// In this case, we are squaring every element of the array
let squares
squares = b.map((e) => {
    console.log(`The square of ${e} is ${e ** 2}`)
})
// We can use 'for' loop for this case, but map() reduces our work
// for (let i = 0; i < b.length; i++) {
//     console.log(`The square of ${b[i]} is ${b[i] * b[i]}`)
// }

// filter() scans through an array and picks only the elements which satisfy the given condition
let even_numbers = b.filter(n => n % 2 == 0)
// This selects only the even numbers based on the logic
console.log(even_numbers) // Array: [2, 4, 6]

// reduce() processes all the elements and combines them into one single value
const add = (num1, num2) => {
    return num1 + num2
}
console.log(b.reduce(add)) // 1 + 2 + 3 + 4 + 5 + 6 = 21
// It adds 1 and 2, and adds the result with 3, and so on...
// We can use 'for' loop for this case, but reduce() gives clean code
// let sum = 0
// for (let n of b) {
//     sum = sum + n
// }
// console.log(sum)

// Array.from(object)
// Used to create an array from any other object
console.log(Array.from("Yashwanth")) // ['Y','a','s','h','w','a','n','t','h']