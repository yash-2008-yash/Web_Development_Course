let boxes = document.getElementsByClassName("box")

let boxes_array = Array.from(boxes) // Converted 'boxes' into an array

// RGB Color has three values (x, y, z)
// I am gonna generate three random numbers for x, y, z
// NOTE: RGB Values stay in the range of 0 to 255

function randomColor() {
    let rgb_value_1 = Math.floor(Math.random() * 255) + 1
    let rgb_value_2 = Math.floor(Math.random() * 255) + 1
    let rgb_value_3 = Math.floor(Math.random() * 255) + 1
    return `rgb(${rgb_value_1}, ${rgb_value_2}, ${rgb_value_3})`
}

// Iterating through all boxes to give each a random color
boxes_array.forEach(element => {
    element.style.backgroundColor = randomColor()
});