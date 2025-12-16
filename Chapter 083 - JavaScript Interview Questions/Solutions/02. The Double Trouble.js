// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function DoubleTrouble(array) {
    let doubled = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            doubled.push(array[i])
        } else {
            doubled.push(array[i] * 2)
        }
    }

    console.log(`Inputted Array: ${array}`)
    console.log(`Doubled Array: ${doubled}`)
}

let myArray = [2, 2, 3, 4, 4, 5, 6]

DoubleTrouble(myArray)