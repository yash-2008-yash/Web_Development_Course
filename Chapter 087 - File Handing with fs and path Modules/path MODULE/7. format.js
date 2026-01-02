// format() combines the object from 'parse' into a path.

import path from "path"

let obj = {
    root: '',
    dir: 'path MODULE',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
}

console.log(path.format(obj))