// readdir() reads the files inside a given folder.

import fs from "fs"

fs.readdir("fs MODULE",(error,files)=>{
    if(error){
        console.log(`${error}`)
        return;
    }
    console.log(files)
})

// [
//   '1. writeFile.js',  '10. rename.js',
//   '2. readFile.js',   '3. appendFile.js',
//   '4. existsSync.js', '5. unlink.js',
//   '6. readdir.js',    '7. mkdir.js',
//   '8. stat.js',       '9. copyFile.js',
//   'Package.json',     'demo.txt',
//   'sample.txt',       'sample_copy.txt'
// ]