// Callback chaining is when we have to do many tasks, so we chain the callbacks

function hello(callback) {
    console.log("Hello")
    callback()
}

function how_are_you(callback) {
    setTimeout(() => {
        console.log("How are you?")
        callback()
    }, 5000)
}

function goodbye() {
    setTimeout(() => {
        console.log("Goodbye")
    }, 3000);
}

hello(() => how_are_you(goodbye));

// This "chaining" is good, but it becomes a hell when many chainings are there
// It becomes such a hell that the developers called it "Callback Hell" or "Pyramid of Doom"