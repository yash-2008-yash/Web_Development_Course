function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true

            if (dogWalked) {
                resolve("✅ You took the dog for a walk!")
            } else {
                reject("❌ You didn't take the dog for a walk!")
            }
        }, 4000)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true
            if (kitchenCleaned) {
                resolve("✅ You cleaned the kitchen!")
            } else {
                reject("❌ You didn't clean the kitchen!")
            }
        }, 3000)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false

            if (trashTakenOut) {
                resolve("✅ You took out the trash!")
            } else {
                reject("❌ You didn't take the trash out!")
            }
        }, 500)
    })
}

// Promise.any()
Promise.any([walkDog(), cleanKitchen(), takeOutTrash()])
    .then(value => {
        console.log("First successful task: ", value)
    })
    .catch(error => {
        console.log("All tasks failed: ", error)
    })


// Promise.any() returns the first successful promise and ignores the failures.
// It fails only if all the promises fail.

// Now, we know that takeOutTrash() is the first task to be completed, so let's make it false
// So, now the first successful task is cleanKitchen(), so the output will be:

// First successful task:  ✅ You cleaned the kitchen!

// IF ALL THE PROMISES WERE REJECTED:
// All tasks failed: [AggregateError: All promises were rejected] {
//   [errors]: [
//     "❌ You didn't take the dog for a walk!",
//     "❌ You didn't clean the kitchen!",
//     "❌ You didn't take the trash out!"
//   ]
// }