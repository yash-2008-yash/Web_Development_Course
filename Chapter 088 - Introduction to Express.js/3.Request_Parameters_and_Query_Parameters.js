const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello, World!')
})

app.get('/about', (request, response) => {
    response.send('Welcome to the about page!')
})
// If you visit http://127.0.0.1:3000/about, it'll take you to a page which says "Welcome to the about page!"

app.get('/contact', (request, response) => {
    response.send('Welcome to the contact page!')
})
// If you visit http://127.0.0.1:3000/contact, it'll take you to a page which says "Welcome to the contact page!"

app.get('/courses', (request, response) => {
    response.send('Welcome to the Courses!')
})
// If you visit http://127.0.0.1:3000/courses, it'll take you to a page which says "Welcome to the Courses!"

app.get('/courses/python-course', (request, response) => {
    response.send('Welcome to the Python Course!')
})
// If you visit http://127.0.0.1:3000/courses/python-course, it'll take you to a page which says "Welcome to the Python Course!"

app.get('/courses/javascript-course', (request, response) => {
    response.send('Welcome to the JavaScript Course!')
})
// If you visit http://127.0.0.1:3000/courses/javascript-course, it'll take you to a page which says "Welcome to the JavaScript Course!"

// We can't type this again and again, right?
// Express JS helps us to do this easily without repetitive code.

app.get('/courses/:branch', (request, response) => {
    // For http://127.0.0.1:3000/courses/JavaScript%20Course?mode=dark&region=india
    console.log(request.params) // { branch: 'JavaScript Course' }
    console.log(request.query) // { mode: 'dark', region: 'india' }

    // When I added branch, mode, region, it got updated in the request object.
    // Those 'mode' and 'region' are query parameters. We can create as much as we want.
    
    response.send(`Welcome to the ${request.params.branch}!`)
})
// Now, you can visit http://127.0.0.1:3000/course/ and type anything after course/, it'll get displayed.
// That 'branch' was a request parameter. We can create as much as we want.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})