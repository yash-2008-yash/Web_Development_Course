// This gives the user an alert message when they open this webpage
alert("Welcome to the page!");

// This displays the message in the console
console.log("This is JavaScript.")

// This will ask the user to input a number, and it gets displayed in the console
var number = prompt("Enter a number : ")
console.log("You entered " + number)

// This will ask the user about leaving the page
// If the user presses "OK", if block code will run
// If the user pressed "Cancel", else block code will run
var exit = confirm("Are you sure about leaving this page?\nBecause your computer is gonna blast if you leave!")
if (exit) {
    alert("Your computer will blast soon.")
}
else {
    alert("Your computer is safe... for now.")
}