// Array.from(object) creates an array from any other object

let my_name = "Yashwanth"
console.log(Array.from(my_namename)) // ['Y','a','s','h','w','a','n','t','h']

let array = Array.from([1, 2, 3], x => x ** 2)
console.log(array) // [1, 4, 9]