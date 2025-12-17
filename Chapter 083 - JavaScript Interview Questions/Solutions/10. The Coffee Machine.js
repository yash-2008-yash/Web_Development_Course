// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffeeType) {
    let randomDelay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
    
    console.log(`Making your ${coffeeType}...`)
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Here is your ${coffeeType}.`)
        }, randomDelay)
    })
}

brewCoffee("Cappuchino")
    .then(result =>
        console.log(result)
    )