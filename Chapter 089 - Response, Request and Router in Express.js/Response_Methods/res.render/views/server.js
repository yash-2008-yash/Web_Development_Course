import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const port = 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.set("views", __dirname) // Tells Express.js where is 'views' folder
app.set("view engine", "ejs") // Tells Express.js to use EJS

app.get("/profile", (request, response) => {
    response.render("profile", {
        username: "Yashwanth",
        age: 17
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});