import express from "express"
const router = express.Router()

router.get("/", (request, response) => {
  response.send("Welcome to the dashboard!") // http://127.0.0.1:3000/app/dashboard/
})

router.get("/navbar", (request, res) => {
  res.send("Welcome to the navigation bar!") // http://127.0.0.1:3000/app/dashboard/navbar
})

export default router
