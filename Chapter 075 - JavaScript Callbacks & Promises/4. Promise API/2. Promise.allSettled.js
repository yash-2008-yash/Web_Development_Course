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

// Promise.allSettled()
Promise.allSettled([walkDog(), cleanKitchen(), takeOutTrash()])
    .then(results => {
        console.log(results)
    })


// [
//  { status: 'fulfilled', value: '✅ You took the dog for a walk!' },
//  { status: 'rejected', reason: "❌ You didn't clean the kitchen!" },
//  { status: 'fulfilled', value: '✅ You took out the trash!' }
// ]

// Runs all promises, but never fails.
// It waits for all of them and tells us which succeeded/failed.