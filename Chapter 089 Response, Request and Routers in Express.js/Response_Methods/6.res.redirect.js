// res.redirect() tells the browser to go to a different URL.

import express from "express"

const app = express()
const port = 3000

app.get('/old-page', (request, response) => {
    response.redirect("/new-page")
    // When client visits http://127.0.0.1:3000/old-page, they are redirected to http://127.0.0.1:3000/new-page
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})