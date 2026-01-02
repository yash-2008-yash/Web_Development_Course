import fs from "fs"

fs.readFile("fs MODULE/sample.txt", "utf-8", (error, data) => {
    if (error) {
        console.error(`${error}`)
        return;
    }
    console.log(data)
})

// readFile is an asynchronous Node.js function used to read the contents of a file without blocking the execution of the program.
// It returns the data via a callback or Promise.

// SYNTAX: fs.readFile(path, options?, callback)

// path	→ File name or file path
// options (Optional) → encoding, mode, flag
// callback	→ Runs after the file operation completes

// EXAMPLE:
// fs.readFile("fs MODULE/sample.txt", "utf8", (error, data) => {
//     if (error) {
//         console.error(error.message)
//         return;
//     }
//     console.log(data);
// })
