import path from "path"

let uploadedFile = "sample.txt"

if (path.extname(uploadedFile) !== ".pdf") {
    console.error("Only PDFs allowed")
}