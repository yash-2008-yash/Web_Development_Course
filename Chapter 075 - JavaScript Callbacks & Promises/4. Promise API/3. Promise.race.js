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

// Promise.race()
Promise.race([walkDog(), cleanKitchen(), takeOutTrash()])
    .then(value => {
        console.log("🏁 First task finished:", value)
    })
    .catch(error => {
        console.log("🏁 First task failed:", error)
    })

// 🏁 First task finished: ✅ You took out the trash!

// It showed takeOutTrash(), but didn't show the failed cleanKitchen() task
// It's because Promise.race() doesn't care who succeeds or fails.
// It only cares who finishes first.