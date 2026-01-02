// parse() takes a file path and breaks it into an useful object.

import path from "path"

console.log(path.parse("path MODULE/file.txt"))

// {
//   root: '',
//   dir: 'path MODULE',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// root - The Starting point of the file path
// dir - folder containing the file
// base - full file name
// ext - extension of the file
// name - file name without the extension

// Real-world usage: To create a duplicate file with same name with slight changes.

const file = "document.pdf"
const { name, ext } = path.parse(file)
const newFile = `${name}(1)${ext}`

console.log(newFile) // document(1).pdf