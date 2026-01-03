// res.sendFile() is used to send a file from your server to the client and finish the request.

import express from "express"
import path from "path"     
import { fileURLToPath } from "url"

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Sending an image using res.sendFile()
app.get('/file', (request, response) => {
    response.sendFile("public/javascript_logo.jpg", { root: __dirname }) // http://127.0.0.1:3000/file
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})