// Strings and it's operations

// LENGTH OF THE STRING
let name = "Yashwanth"
console.log(name.length) // This prints the number of characters in the string

// ACCESSING CHARACTERS OF A STRING BY ITS INDEX
let word = "Peace"
console.log(word[0]) // This prints the first character of the string
console.log(word[1]) // This prints the second character of the string
console.log(word[2]) // This prints the third character of the string
console.log(word[3]) // This prints the fourth character of the string
console.log(word[3]) // This prints the fifth character of the string

// STRINGS AND VARIABLES MANIPULATION
let tv_show = "Game of Thrones"
console.log(name + "'s favorite TV Show is " + tv_show) // String Concatenation Method
console.log(`${name}'s favorite TV Show is ${tv_show}`) // Template Literal Method / String Interpolation
// Template Literal Method is the highly recommended one due to its readable syntax

// ESCAPE SEQUENCE CHARACETRS
// let dialogue = ""Did you put your name into the Goblet of Fire, Harry?" Dumbledore said calmly.";
// This above statement will give an error because the compiler can't understand the quoting.
let dialogue = "\"Did you put your name into the Goblet of Fire, Harry?\" Dumbledore said calmly."
console.log(dialogue) // Now, it will run becaue we used the \ which is a escape sequence character


// UPPERCASING AND LOWERCASING
let movie = "Interstellar"
console.log(movie.toUpperCase()) // This will make all the characters upper-case
console.log(movie.toLowerCase()) // This will make all the characters lower-case

// SLICING
let character = "Batman"
// Slicing is accessing a part of a string
console.log(character.slice(0, 5)) // This will print 'Batma' because 5 willn't be included
console.log(character.slice(0)) // This will print 0 to end, so 'Batman'
console.log(character.slice(-1, -6)) // This is negative slicing, here last number will be included

// REPLACE
let king = "Aegon V Targaryen"
console.log(king.replace("V", "VI")) // Replaces the first occurence of "V" with "VI"
// If want to replace all occurences, replace("/old/g","new")

// CONCATENATION
let hero = "Jon Snow & "
let heroine = "Daenerys Targaryen"
console.log(hero.concat(heroine)) // This will concatenate the both strings

// TRIMMING
let season = "         Winter"
// trim() removes the whitespaces
console.log(season.trim())

// IMPoRTANT NOTE
// Strings in JS are immutable. 
// Whatever function we use on them, concat(), replace(), whatever, they can't change the string values.