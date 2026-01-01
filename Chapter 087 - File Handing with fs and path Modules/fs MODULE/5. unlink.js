// unlink() deletes the given file.
// It also accepts a callback function to do after the deletion.

import fs from "fs"

fs.unlink("fs MODULE/demo.txt",()=>{
    console.log("Deletion complete!")
})

// When the code runs, demo.txt gets deleted.