const express = require("express")
const { request } = require("node:http")
const router = express.Router()

// Define the home page route
router.get('/home', (request, response,) => {
    response.send("Company home page") // http://127.0.0.1:3000/company/home
})

// Define the about page route
router.get('/about', (request, response,) => {
    response.send("Company about page") // http://127.0.0.1:3000/company/about
})

module.exports = router