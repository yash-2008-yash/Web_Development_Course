import express from "express"
import appRoutes from "./routes/app.js"

const app = express()
const port = 3000

app.use("/app", appRoutes)

app.get("/", (request, response) => {
  response.send("Welcome!") // http://127.0.0.1:3000/
})

app.get("/app", (request, response) => {
  response.send("Welcome to the app!") // http://127.0.0.1:3000/app/
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
