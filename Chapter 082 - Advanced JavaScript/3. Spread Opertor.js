// Spread operator in JavaScript is written as ...
// It's used to expand elements of an iterable (like an array, string, or object) into individual values.

// Spreading can be used in many useful ways:

// ---------- 1. In Arrays (to copy and merge safely) ----------

let a = [1, 2, 3]
let b = [...a]        // Makes a copy of 'a'
let c = [...a, 4, 5]  // Merges new elements

// This keeps the data immutable.

// ---------- 2. In Objects (to copy and update safely) ----------

let object = {
    name: "Yashwanth",
    age: 17
}

let object_copy = { ...object }                  // Makes a copy of 'object'
let updated_object = { ...object, age: 18 }  // Updates the value of 'age'

// This is commonly used in modern frameworks for updating without mutation.

// ---------- 3. Function arguments (to make flexible calls) ----------

function addFiveNumbers(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5
}

let array = [12, 23, 34, 45, 56, 67, 78, 89, 90]

console.log(addFiveNumbers(...array)) // 170

// We can pass arguments easily.
// This method is cleaner than manually passing the arguments.
// Plus, array had extra elements in it.
// Even then, the function took only the arguments it wanted.

// ---------- 4. Converting string into an array ----------

let word = "HELLO"

let word_array = [...word] // [ 'H', 'E', 'L', 'L', 'O' ]

// This feature might look not so useful, but it fucking is!
// This is the most commonly used technique to reverse a string.

function reverseString(str) {
    return [...str].reverse().join("")
}
console.log(reverseString(word)) // OLLEH

// --------------------------------------------------------
