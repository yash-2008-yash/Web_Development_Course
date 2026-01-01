import fs from "fs"

fs.rename("fs MODULE/package.json", "fs MODULE/Package.json", () => {
    console.log("Renamed successfully!")
})