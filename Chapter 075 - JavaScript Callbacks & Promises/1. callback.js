function hello(callback) {
    setTimeout(() => {
        console.log("Hello!");
        callback()
    }, 5000);
}

function goodbye() {
    console.log("Goodbye!");
}

hello(goodbye)

// If we wrote: 

// function hello() {
//     setTimeout(() => {
//         console.log("Hello!")
//     }, 5000)
// }

// function goodbye() {
//     console.log("Goodbye!")
// }

// hello()
// goodbye()

// JS will run goodbye() first, and after 5s, it'll run hello()
// It's because JS doesn't wait for slow tasks, it moves on with the next task
// But, if we use callback method, we can make JS to get our desired outputs