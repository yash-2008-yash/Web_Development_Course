import fs from "fs"

fs.stat("fs MODULE/sample.txt", (error, stat) => {
    if(error){
        console.log("File not found, bitch!")
        return;
    }

    console.log(`Size of the file is ${stat.size} bytes`) // stat.size returns the size of the file in bytes
    console.log(`File was created on ${stat.birthtime}`) // stat.birthtime returns the date of creation
    console.log(`File was last modified on ${stat.mtime}`) // stat.mtime returns the date of last modification
})