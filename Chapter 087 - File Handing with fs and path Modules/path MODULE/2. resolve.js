import path from "path"

console.log(`\nThe absolute path is ${path.resolve("sample.txt")}`)

// resolve() returns the absolute path (complete path) of a file.

// Here, I gave the file "sample.txt" as an argument.
// path.resolve() will return the whole path, starting from the root.
// /home/yashwanth-m/Files/Web Development Course/Chapter 087 - File Handing with fs and path Modules/sample.txt

// This is used in real-world projects because servers may start from different folders.
// Relative paths or hardcoded paths can break easily, but absolute paths don't.
// It's prouction safe because it always points to the correct file.