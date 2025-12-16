// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function multiplyNumbers(array) {
    let promises = array.map(number => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(number * 2)
            }, 500)
        })
    })

    let result = await Promise.all(promises)
    return result
}

multiplyNumbers([2, 3, 4, 5])
    .then(result =>
        console.log(result)
    )