const express = require('express')
const company = require("./routes/company")
const { request } = require('node:http')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/company", company) // This connects 'company.js'

app.get('/', (request, response) => {
    response.send('Hello, World!')
})

app.post('/', (request, response) => {
    response.send("This is a POST request!")
})

app.put('/', (request, response) => {
    response.send("This is a PUT request!")
})

// These 'get','post' and 'put' can be written together using a concept called "Request Chaining"

// app.get('/', (request, response) => {
//     response.send('Hello, World!')
// }).post('/', (request, response) => {
//     response.send("This is a POST request!")
// }).put('/', (request, response) => {
//     response.send("This is a PUT request!")
// })

app.get("/demo", (request, response) => {
    // response.send("This is a GET request!")
    // response.sendFile("templates/demo.html") This will give "TypeError: path must be absolute"
    // response.sendFile("templates/demo.html", { root: __dirname }) // HELLO, WORLD! This is a demo page!
    // response.sendFile("public/javascript_logo.jpg",{root: __dirname})    
    response.download("public/javascript_logo.jpg",{root: __dirname})    
})

app.get("/old-page", (req, res) => {
  res.redirect("/new-page");
});


app.get("/api", (request, response) => {
    response.json({ a: 1, b: 2, c: 3 }) // This will display a JSON if you visit http://127.0.0.1:3000/api
})

// It becomes a clutter if you keep all items in one file.
// So, Routing can help us to make our code more maintainable.
// I linked company.js to main.js in a separate code.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})