let permission = "Y"

switch (permission) {
    case "Y":
        console.log("Agreed.")
        break;
    case "N":
        console.log("Not agreed.")
        break;
    default:
        console.log("Choose between Y or N")
}

// If the value is "Y", case "Y" block of code will run.
// If the value is "N", case "N" block of code will run.
// If the value is none of them, then the default block of code will run.