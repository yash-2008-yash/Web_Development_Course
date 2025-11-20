// sort() method sorts the elements

let alphabets = ['b', 'd', 'a', 'c']

// Sorts the element in alpabetical order
console.log(alphabets.sort()) // ['a', 'b', 'c', 'd']

// With letters, we don't see any problem, but it gets weird with numbers

let numbers = [5, 100, 2]
console.log(numbers.sort())
// It should give us [2, 5, 100], but it gives [100, 2, 5]
// sort() uses lexicograph order to sort elements, so it sees the first digit
// It saw 100 as 1, so it kept 100 at the first

// sort() accepts an optional argument called 'comparison function' to solve this problem

// Ascending order
console.log(numbers.sort((a, b) => a - b)) // [2, 5, 100]

// Descending order
console.log(numbers.sort((a, b) => b - a)) // [100, 5, 2]