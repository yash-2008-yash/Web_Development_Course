// readdir() reads the files inside a given folder.

import fs from "fs"

fs.readdir("fs MODULE",(error,files)=>{
    console.log(`Error: ${error}`)
    console.log(files)
})

// Error: null
// [
//   '1. writeFile.js',
//   '2. readFile.js',
//   '3. appendFile.js',
//   '4. exist.js',
//   '5. unlink.js',
//   '6. readdir.js',
//   'demo.txt',
//   'package.json',
//   'sample.txt'
// ]