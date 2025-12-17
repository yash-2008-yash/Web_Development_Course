// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(productsList) {
    let array = []

    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].price <= 100) {
            array.push(productsList[i])
        }
    }

    console.log("\nProducts under 100INR:")
    console.log(array)
}

let products = [
    { name: "Mobile Phone", category: "Electronics", price: 13000 },
    { name: "Classmate Book", category: "Stationary", price: 100 },
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Sunscreen", category: "Skincare", price: 300 },
    { name: "Milk", category: "Food", price: 30 }
]

filterProducts(products)