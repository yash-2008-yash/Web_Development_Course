// res.send() is used to send a response back to the client and finish the response.

import express from "express"

const app = express()
const port = 3000

// Sending text using res.send()
app.get('/text', (request, response) => {
    response.send('Hello, World!') // http://127.0.0.1:3000/text
})

// Sending HTML using res.send()
// No .html file is required
app.get('/html', (request, response) => {
    response.send('<h1>Hello, World!</h1>') // http://127.0.0.1:3000/html
})

// Sending JSON using res.send()
app.get('/json', (request, response) => {
    response.send({ a: 1, b: 2, c: 3 })
})
// This method isn't the best practice to send JSON.
// res.json() is used for sending JSON as response.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})