// delete() method deletes an specific element from the array

let array = [1, 3, 5, 7, 9, 10, 11, 13, 15]

delete array[5] // Removes the element of index 5, which is 10
console.log(array) // [1, 3, 5, 7, 9, 11, 13, 15]

// Now, this is slightly different.
// When the array is printed, it'll show something like:
// [1, 3, 5, 7, 9, <1 empty item>, 11, 13, 15]
// When checked the length of array, it'll include the deleted element
// The memory taken by that deleted element stays

// If you try to access that element, it'll show 'undefined'
console.log(array[5]) // undefined