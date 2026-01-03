// res.json() is used to send a JSON response back to the client and finish the response.

import express from "express"

const app = express()
const port = 3000

// Sending JSON using res.json()
app.get('/api', (request, response) => {
    response.send({ a: 1, b: 2, c: 3 }) // http://127.0.0.1:3000/api
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})