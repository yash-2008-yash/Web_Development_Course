// copyFile() copies an original file and makes a copy of it.

import fs from "fs"

fs.copyFile("fs MODULE/sample.txt", "fs MODULE/sample_copy.txt", () => {
    console.log("File copied successfully!")
})