// Imagine I want to read file.txt from here.

// import fs from "fs"
// fs.readFile("path MODULE/file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.error(`${error}`)
//         return;
//     }
//     console.log(data.toString())
// })

// Here I used "path MODULE/file.txt" because JS willn't know if you just give "file.txt"
// JS will check the Chapter-087 folder for file.txt, where it isn't.

// So, we can use dirname() to get the parent folder of a file.
// dirname() returns the folder in which a given file exists.
// We can use that parent folder to load another file.

import path from "path"

const fileLocation = "Web Development Course/Chapter 087 - File Handing with fs and path Modules/path MODULE/file.txt"
const folder = path.dirname(fileLocation)
console.log(folder)

// Now, JS knows the folder where file.txt exist.
// We can access files from that folder easily now.