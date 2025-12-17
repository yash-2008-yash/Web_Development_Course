// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(Cart) {
    let array = []

    for (let i = 0; i < Cart.length; i++) {
        array.push(Cart[i].price * Cart[i].quantity)
    }

    let total = array.reduce((a, b) => a + b, 0)

    console.log("\n----- YOUR CART -----")
    for (let i = 0; i < Cart.length; i++) {
        console.log(`${Cart[i].quantity} ${Cart[i].productName} -> ${Cart[i].quantity * Cart[i].price} INR`)
    }

    console.log(`\nYour total is ${total}\n`)
}

let myCart = [
    { productName: "Classmate Book", price: 100, quantity: 2 },
    { productName: "Shakti Chilli Powder", price: 20, quantity: 3 },
    { productName: "Nandini Milk 500ml", price: 30, quantity: 1 },
    { productName: "Eggs", price: 7, quantity: 12 },
    { productName: "Oreo Biscuits", price: 10, quantity: 3 }
]

calculateTotal(myCart)