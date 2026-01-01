import path from 'path'

console.log(path.join("Assets", "Images", "background.jpg"))

// join() combines the strings into one clean and valid path.

// In Windows, paths are written like "Assets\Images\background.jpg"
// In Linux, paths are written like "Assets/Images/background.jpg"
// In macOS, paths are written like "Assets/Images/background.jpg"

// If we use hardcoded paths like "Assets/Images/background.jpg", it'll work on Linux and macOS.
// But, it'll crash in Windows OS because Windows use \ for paths.
// We can't think that every user uses the same OS as you do.
// So, we have to make our code work in all OS, right?
// path.join() does the \ or / work automatically, based on the OS.