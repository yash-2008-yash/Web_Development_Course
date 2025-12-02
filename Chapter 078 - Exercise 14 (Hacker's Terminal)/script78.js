let message1 = document.getElementById("message1")
let message2 = document.getElementById("message2")
let message3 = document.getElementById("message3")
let message4 = document.getElementById("message4")
let message5 = document.getElementById("message5")
let result = document.getElementById("result")

let delay1 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
let delay2 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
let delay3 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
let delay4 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
let delay5 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000

function Blink(element, text, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            setTimeout(() => {
                element.textContent = `${text}`
            }, 100);

            setTimeout(() => {
                element.textContent = `${text}.`
            }, 300);

            setTimeout(() => {
                element.textContent = `${text}..`
            }, 600);

            setTimeout(() => {
                element.textContent = `${text}...`
                resolve()
            }, 900);
        }, delay);
    })
}

function endMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result.innerHTML = "HACKING COMPLETE."
            resolve()
        }, 500);
    })
}

async function HackingSimulation() {
    try {
        await Blink(message1, "Initializing Hacking", delay1)
        await Blink(message2, "Reading all the files", delay2)
        await Blink(message3, "Password encryption cracked", delay3)
        await Blink(message4, "Sending all your files to the server", delay4)
        await Blink(message5, "Cleaning up", delay5)
        await endMessage()
    }
    catch (error) {
        console.log(error)
    }
}

HackingSimulation()