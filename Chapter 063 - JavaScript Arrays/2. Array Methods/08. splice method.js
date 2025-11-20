// splice() method slices a part of the array and remove it

let numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]
// INDEXING->   0   1   2   3   4   5   6   7   8

numbers.splice(1, 4) // Start at index 1, delete 4 elements
console.log(numbers) // [12, 67, 78, 89, 90]

// REPLACING ELEMENTS IN THE ARRAY USING splice()

let numbers_2 = [1, 3, 5, 7, 9, 11, 13, 15]
// INDEXING->    0  1  2  3  4   5   6   7

numbers_2.splice(0, 3, 11, 33, 55)
// Start at index 0, remove 3 elements and replace those 3 with 11, 33, 55

console.log(numbers_2) // [11, 33, 55, 7, 9, 11, 13, 15]

// ADDING ELEMENTS IN THE ARRAY USING splice()

let numbers_3 = [1, 2, 3, 5]
// INDEXING->    0  1  2  3

numbers_3.splice(3, 0, 4)
// Start at index 3, remove 0 elements and replace it with 4
// Here, no elements were removed, so 4 will be added, not replaced

console.log(numbers_3) // [1, 2, 3, 4, 5]

// REMOVING ELEMENTS FROM THE ARRAY USING splice()

let numbers_4 = [1, 2, 3, 4, 6, 5]
// INDEXING->    0  1  2  3  4  5

numbers_4.splice(4, 1)
// Start at index 4, remove 1 element

console.log(numbers_4)