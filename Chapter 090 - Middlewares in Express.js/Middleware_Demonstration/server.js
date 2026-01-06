import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public"))) // To give users the access to use index.html

// This is a middleware
function checkLogin(req, res, next) {
    const loggedIn = false

    if (!loggedIn) {
        return res.sendFile(path.join(__dirname, "noLogin.html"))
    }
    // else {
    //     return res.sendFile(path.join(__dirname, "profilePage.html"))
    // }

    next() // This allows the request to continue
}

// PUBLIC ROUTE (no middleware)
// app.get("/", (req, res) => {
//     res.send("HOME PAGE") // anyone can see this page
// })
// This is commented out because HTML serves the home page http://localhost:3000/

// PRIVATE ROUTE (uses middleware)
app.get("/profile", checkLogin, (req, res) => {
    res.sendFile(path.join(__dirname, "profilePage.html")) // only logged-in users can see this page
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})