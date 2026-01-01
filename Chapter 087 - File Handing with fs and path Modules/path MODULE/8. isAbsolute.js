// isAbsolute() tells whether a path is absolute or not.

import path from "path"

let absolutePath = "/home/yashwanth-m/Files/Web Development Course/Chapter 087 - File Handing with fs and path Modules/sample.txt"
let relativePath = "Chapter 087 - File Handing with fs and path Modules/sample.txt"

console.log(path.isAbsolute(absolutePath)) // true
console.log(path.isAbsolute(relativePath)) // false