// res.sendStatus() is used to send HTTP status code as text to the client and finish the response.

import express from "express"

const app = express()
const port = 3000

// Sending HTTP status code using res.sendStatus()
app.get('/status', (request, response) => {
    
    // http://127.0.0.1:3000/status
    
    response.sendStatus(401) // Unauthorized
    response.sendStatus(404) // Not Found
    response.sendStatus(501) // Bad Gateway
    response.sendStatus(301) // Moved Permanently
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})