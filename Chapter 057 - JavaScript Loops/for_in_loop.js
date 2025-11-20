// This is an object with some keys and values
let obj = {
    "Name": "Yashwanth",
    "Age": "17",
    "Degree": "BCA AI/ML"
}

// for-in loop is used to print the keys and values in an object

// This prints all the keys in the object
console.log("\nKEYS OF THE OBJECT")
for (const key in obj) {
    console.log(key)
}

// This prints all the values in the object
console.log("\nVALUES OF THE OBJECT")
for (const key in obj) {
    const element = obj[key];
    console.log(element)
}