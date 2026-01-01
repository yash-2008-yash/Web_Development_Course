// parse() takes a file path and breaks it into an useful object.

import path from "path"

console.log(path.parse("path MODULE/6. parse.js"))

// {
//   root: '',
//   dir: 'path MODULE',
//   base: '6. parse.js',
//   ext: '.js',
//   name: '6. parse'
// }

// root - The Starting point of the file path
// dir - folder containing the file
// base - full file name
// ext - extension of the file
// name - file name without the extension

// Real-world usage: To create a duplicate file with same name with slight changes.

const file = "document.pdf"
const { dir, name, ext } = path.parse(file)
const newFile = `${name}(1)${ext}`

console.log(newFile)