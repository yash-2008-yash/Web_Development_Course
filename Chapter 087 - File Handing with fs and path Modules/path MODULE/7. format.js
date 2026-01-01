// format() combines the object from 'parse' into a path.

import path from "path"

let obj = {
    root: '',
    dir: 'path MODULE',
    base: '6. parse.js',
    ext: '.js',
    name: '6. parse'
}

console.log(path.format(obj))