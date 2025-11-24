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
            const kitchenCleaned = false
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
            const trashTakenOut = true

            if (trashTakenOut) {
                resolve("✅ You took out the trash!")
            } else {
                reject("❌ You didn't take the trash out!")
            }
        }, 500)
    })
}

// Promise.all()
Promise.all([walkDog(), cleanKitchen(), takeOutTrash()])
    .then(values => {
        console.log(values)
        console.log("You finished all the tasks!")
    })
    .catch(error => {
        console.log("One of the tasks failed: ", error)
    })

// Runs all promises and returns only if all succeed.
// If any one fails, the whole thing fails.