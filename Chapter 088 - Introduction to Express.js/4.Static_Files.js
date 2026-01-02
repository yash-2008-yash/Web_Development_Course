const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// This line makes the folder called 'public' serve static files.

// In this case, I added public.txt inside the public folder so users can access it.
// With http://127.0.0.1:3000/public.txt users can see public.txt

// But, users can't access other files.
// If user tries http://127.0.0.1:3000/package.json user will get a message 'Cannot GET /package.json'
// That's because I didn't add package.json to the public folder.
// Why the fuck would I let users see my backend code, right?

// All this is Express JS power.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})