// Destructuring in JavaScript lets you extract values from arrays or objects into variables in a clean and readable way, without repetitive indexing or dot notation.

// --------------- ARRAY DESTRUCTURING ---------------

let colors = ["red", "green", "blue"]

let color1 = colors[0] // red
let color2 = colors[1] // green
let color3 = colors[2] // blue

// It looks easy, but what if there are more number of array elements?
// The code'll become repetitive and doesn't look very much good and readable.
// With destructuring, we can do this task easily.

let [color_1, color_2, color_3] = colors

// Done the job in one fucking line.

// You can also particular elements in variables, and store the rest of them into an array.

let array = [12, 23, 34, 45, 56, 67, 78, 89, 90]

// Now, I want to store first 3 elements into variables and rest of them in an array.

let [num1, num2, num3, ...rest] = array

console.log(num1, num2, num3)  // 12 23 34
console.log(rest)              // [ 45, 56, 67, 78, 89, 90 ]

// NOTE: We can name anything in the place of 'rest'.
// I kept it as 'rest' because it explains what it is.

// --------------- OBJECT DESTRUCTURING ---------------

let top3Movies = {
    TOP1: "The Shawshank Redemption",
    TOP2: "The Godfather",
    TOP3: "The Dark Knight"
}

let first = top3Movies.TOP1  // The Shawshank Redemption
let second = top3Movies.TOP2 // The Godfather
let third = top3Movies.TOP3  // The Dark Knight

// It looks easy, but what if there are more number of object keys?
// The code'll become repetitive and doesn't look very much good and readable.
// With destructuring, we can do this task easily.

let { TOP1, TOP2, TOP3 } = top3Movies

// Done the job in one fucking line.

// NOTE: You should name the variables after the key names itself, or else it'll show 'undefined'.
// That's because object destructuring matches by key names, not by position.
// You can rename by 'let { TOP1: movie1, TOP2: movie2, TOP3: movie3 } = top3Movies'.

// You can use ...rest on object destructuring too, just like array destructuring.

// Now, I want to store first key into a variable and rest of them in an object.

let { TOP1: movie1, ...remaining } = top3Movies

console.log(movie1)     // The Shawshank Redemption
console.log(remaining)  // { TOP2: 'The Godfather', TOP3: 'The Dark Knight' }
