import fs from "fs"
import path from "path"

const directory = "/home/yashwanth-m/Files/Web Development Course/Chapter 091 - Exercise 15 (Clear the Clutter)"

fs.readdir(directory, (error, files) => {
    if (error) {
        console.log(`${error}`)
        return;
    }

    files.forEach(file => {
        const extension = path.extname(file)

        if (!extension) {
            return;
        }

        const folderName = extension.slice(1)
        const folderPath = path.join(directory, folderName)

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
        }

        const source = path.join(directory, file)
        const destination = path.join(folderPath, file)

        fs.rename(source, destination, error => {
            if (error) {
                console.error(`${error}`)
            }
        })
    })
})
