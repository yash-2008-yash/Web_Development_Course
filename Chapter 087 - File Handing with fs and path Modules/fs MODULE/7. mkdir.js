// mkdir() creates a new folder using the given arguments.

import fs from "fs"

fs.mkdir("Demo Folder/Demo Sub Folder", { recursive: true }, () => {
    console.log("Folder created successfully!")
})

// If {recursive:true}, it'll create the folders automatically. No errors if the folder already exists.
// If {recursive:false}, parent folder must already exist. If it doesn't, an error will be thrown.