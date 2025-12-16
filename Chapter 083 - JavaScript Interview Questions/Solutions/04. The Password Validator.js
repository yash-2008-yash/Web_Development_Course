// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function PasswordValidator(password) {
    let passwordArray = [...password]

    let numbersArray = []
    let lowercaseArray = []
    let uppercaseArray = []

    for (let i = 0; i < passwordArray.length; i++) {
        if (passwordArray[i] === '0' || passwordArray[i] === '1' || passwordArray[i] === '2' || passwordArray[i] === '3' || passwordArray[i] === '4' || passwordArray[i] === '5' || passwordArray[i] === '6' || passwordArray[i] === '7' || passwordArray[i] === '8' || passwordArray[i] === '9') {
            numbersArray.push(parseInt(passwordArray[i]))
        }

        if (passwordArray[i] >= 'a' && passwordArray[i] <= 'z') {
            lowercaseArray.push(passwordArray[i])
        }

        if (passwordArray[i] >= 'A' && passwordArray[i] <= 'Z') {
            uppercaseArray.push(passwordArray[i])
        }
    }

    if (passwordArray.length < 8) {
        console.log("Password should contain minimum 8 characters.")
    }
    else if (numbersArray.length === 0) {
        console.log("Password should contain atleast one digit.")
    }
    else if (lowercaseArray.length === 0) {
        console.log("Password should contain atleast one lowercase alphabet.")
    }
    else if (uppercaseArray.length === 0) {
        console.log("Password should contain atleast one uppercase alphabet.")
    }
    else {
        console.log("Password set.")
    }
}

PasswordValidator("helloiamY123")