import fs from "fs"

fs.writeFile("sample.txt", "I am a text file.", () => {
    console.log("done!")
})

// writeFile is an asynchronous Node.js function used to create or overwrite a file with specified data without blocking the execution of the program.
// If the file does not exist → it is created.
// If the file already exists → its contents are overwritten by the new content.

// SYNTAX: fs.writeFile(path, data, options?, callback)

// path	→ File name or file path
// data	→ Content to be written
// options (Optional) → encoding, mode, flag
// callback	→ Runs after the file operation completes

// EXAMPLE: 
// fs.writeFile("sample.txt", "This is a text file with UTF-8 encoding", { encoding: "utf8" }, () => {
//     console.log("Done");
// })