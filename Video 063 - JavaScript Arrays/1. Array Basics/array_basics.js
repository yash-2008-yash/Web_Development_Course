let array = [12, 23, 34, 45, 56, "Hello", 4.33]
// We can store multiple data types in an array

console.log(array)
// This prints all the array elements

console.log(`The length of the array is ${array.length}`)
// This prints the length of the array

// The indexing of the elements starts from 0.
// So, array = [12, 23, 34, 45, 56, "Hello", 4.33]
// Indexing ->   0   1   2   3   4       5      6

// We can access elements and update them by their indexes

console.log(array[3])
// This will print the element of index 3, which is 45

array[6] = 3.142
console.log(array) // Array: [12, 23, 34, 45, 56, "Hello", 3.142]
// Now that that value is updated, the array will be updated