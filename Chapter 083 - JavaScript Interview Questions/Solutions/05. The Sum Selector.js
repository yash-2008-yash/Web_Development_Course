// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function SumSelector(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i]
        } else {
            break
        }
    }

    console.log(`Sum is ${sum}`)
}

let myArray = [1, 2, 3, 4, 5, -9, 8, 3, 7]

SumSelector(myArray)