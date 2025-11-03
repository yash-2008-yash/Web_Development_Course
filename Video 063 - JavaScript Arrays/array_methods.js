// ARRAY METHODS

let array = [1, 3, 5, 7, 9]

// toString() method
// It converts the array into an string
console.log(array.toString())

// join() method
// It joins the elements with a word we use
console.log(array.join(" and "))
// Output will look like: 1 and 3 and 5 and 7 and 9

// pop() method
// It'll pop out the last element and alter the array
array.pop() // Last element (9) is removed
console.log(array) // Array: 1, 3, 5, 7

// push() method
// It'll push the given element to the end of the array
array.push(11) // 11 is added as the last element
console.log(array) // Array: 1, 3, 5, 7, 11

// shift() method
// It'll pop out the first element and alter the array
array.shift() // First element (1) is removed
console.log(array)

// unshift() method
// It'll push the given element to the beginning of the array
array.unshift(0) // 0 is added as the first element
console.log(array) // Array: 0, 3, 5, 7, 11

// delete() method
// It'll delete an specific element from the array
delete array[2] // Removes the element of index 2, which is 5
console.log(array)
// Now, this is slightly different.
// When the array is printed, it'll be [0, 3, <1 empty item>, 7, 11]
// When checked the length of array, it'll include the deleted element
// So, it doesn't alter the array
// The memory taken by that deleted element stays
// If you try to access that element, it'll show 'undefined'

// concat() method
// It'll concatenate two or more arrays into one array
let combined = [1, 2, 3]
let first = [4, 5, 6]
let second = [7, 8, 9]
console.log(combined.concat(first, second)) // Array: 1, 2, 3, 4, 5, 6, 7, 8, 9

// sort() method
// It'll sort the elements
let alphabets = ['b', 'd', 'a', 'c']
console.log(alphabets.sort()) // Sorts the element in alpabetical order
// With letters, we don't see any problem, but it gets weird with numbers
let new_array = [5, 100, 2]
console.log(new_array.sort())
// It should give us [2, 5, 100], but it gives [100, 2, 5]
// sort() accepts an optional argument called 'comparison function' to solve this problem
console.log(new_array.sort((a, b) => a - b)) // This'll give [2, 5, 100]

// splice() method
// It'll slice a part of the array and remove it
let numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]
// INDEXING->   0   1   2   3   4   5   6   7   8
numbers.splice(1, 4) // This'll slice out the elements from index 1 to 4
console.log(numbers) // Array: [12, 67, 78, 89, 90]
// We can also add elements into the array using splice()
let numbers_2 = [1, 3, 5, 7, 9, 11, 13, 15]
// INDEXING->    0  1  2  3  4   5   6   7
numbers_2.splice(0, 3, 11, 33, 55)
// 0,3 means elements from 0 to 2 (excluding 3) will be replaced by the given 11, 33, 55
console.log(numbers_2) // Array: [11, 33, 55, 7, 9, 11, 13, 15]

// slice() method
// It'll slice a part of the array and return it
let numbers_3 = [12, 23, 34, 45, 56, 67, 78, 89]
// INDEXING->     0   1   2   3   4   5   6   7
console.log(numbers_3.slice(0, 4)) // Array: [12, 23, 34, 45]
// It'll slice the elements from 0 to 3 (4 not included)
console.log(numbers_3.slice(2)) // Array: [34, 45, 56, 67, 78, 89]
// It'll slice the elements from 2 to end of the array

// reverse() method
// It'll reverse the elements of the array
let numbers_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers_4.reverse()) // Array: [10, 9, 8, 7, 6, 5, 4, 3, 2 , 1]