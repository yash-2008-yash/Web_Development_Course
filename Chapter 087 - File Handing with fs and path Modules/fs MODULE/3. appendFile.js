import fs from "fs"

fs.appendFile("sample.txt", "\nI am used for file handling.", () => {
    console.log("Done!")
})

// appendFile is an asynchronous Node.js function used to add new data to the end of a file without deleting existing content.
// If the file exists → data is added at the end.
// If the file does not exist → a new file is created.

// NOTE: This is different than writeFile.
// In writeFile, old content is deleted (overwritten) and then the new content is added.
// In appendFile, old content stays. The new content is added with the old content.

// SYNTAX: fs.appendFile(path, data, options?, callback)

// path	→ File name or file path
// data	→ Content to be written
// options (Optional) → encoding, mode, flag
// callback	→ Runs after the file operation completes

// EXAMPLE:
// fs.appendFile("sample.txt", "\nAnother line of text.", { encoding: "utf8" }, () => {
//     console.log("Done!")
// })