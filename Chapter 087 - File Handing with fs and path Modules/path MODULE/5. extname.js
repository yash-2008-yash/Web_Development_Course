// extname() returns the file extension of a file.
// For example, if we give extname("music.mp3"), it'll return ".mp3"

// In real-world, it is more useful than we think.
// It can be used for file input validations.

import path from "path"

let uploadedFile = "sample.pdf"

if (path.extname(uploadedFile) !== ".pdf") {
    console.error("Only PDFs allowed!")
} else {
    console.log("File uploaded successfully!")
}