import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (request, response) => {
    response.send('Hello, World!')
})

app.post('/', (request, response) => {
    response.send("This is a POST request!") // Will be seen in the console
})

app.put('/', (request, response) => {
    response.send("This is a PUT request!") // Will be seen in the console
})

// These 'get','post' and 'put' can be written together using a concept called "Request Chaining"

// app.get('/', (request, response) => {
//     response.send('Hello, World!')
// }).post('/', (request, response) => {
//     response.send("This is a POST request!")
// }).put('/', (request, response) => {
//     response.send("This is a PUT request!")
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})