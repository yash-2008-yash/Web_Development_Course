import fs from "fs"

fs.readFile("sample.txt", (error, data) => {
    console.log(`Error: ${error}`)
    console.log(`Data: ${data}`)

    console.log(data) // If you try this, you will get the data as buffer. You have to use toString().
    console.log(data.toString())
})

// readFile is an asynchronous Node.js function used to read the contents of a file without blocking the program.
// It returns the data via a callback or Promise.

// SYNTAX: fs.readFile(path, options?, callback)

// path	→ File name or file path
// options (Optional) → encoding, mode, flag
// callback	→ Runs after the file operation completes

// EXAMPLE:
// fs.readFile("sampl.txt", "utf8", (error, data) => {
//     if (error) {
//         console.error(error.message)
//         return;
//     }
//     console.log(data);
// })
