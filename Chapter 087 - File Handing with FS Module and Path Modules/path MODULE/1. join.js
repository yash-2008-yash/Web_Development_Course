import fs from "fs";
import path from "path";

const files = fs.readdirSync("fs MODULE");

console.log("\n")

files.forEach(file => {
    const fullPath = path.join("fs MODULE", file);
    console.log(fullPath);
});

// Why path matters

// file comes from filesystem

// Could be anything: spaces, weird names

// Manual "Songs/" + file WILL break someday