import fs from "fs"
import path from "path"

const baseDir = "/home/yashwanth-m/Files/Web Development Course/Chapter 091 - Exercise 15 (Clear the Clutter)"

fs.readdir(baseDir, (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    files.forEach(file => {
        const ext = path.extname(file)
        if (!ext) return   // skip files without extension

        const folderName = ext.slice(1)
        const folderPath = path.join(baseDir, folderName)

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
        }

        const source = path.join(baseDir, file)
        const destination = path.join(folderPath, file)

        fs.rename(source, destination, err => {
            if (err) console.error(err)
        })
    })
})
