// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    let randomDelay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
    
    console.log("Processing your order...")
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your order was placed successfully!")
        }, randomDelay)
    })
}

placeOrder()
    .then(result =>
        console.log(result)
    )