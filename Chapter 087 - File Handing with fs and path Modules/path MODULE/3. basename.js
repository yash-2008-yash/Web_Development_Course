import path from "path"

console.log(path.basename("Songs/TheWeeknd/AfterHours/BlindingLights.mp3"))
// This'll print "BlindingLights.mp3" in the console.

// I don't know whether you are getting a question in your mind or no.
// But I got a question when I was learning "path.basename()".
// "What the fuck is the point of using basename() if you already know the file name?"
// After some research, I got the answer, finally.

// The thing is, we don't always use hardcoded paths like shown here.
// User inputs a file and we get the file and it's path.
// But, if we are designing a perfect UI, we might only need the file name.
// If we don't use basename(), it'll show whole path to the user, which is a bad UI design.
// So, we use basename() to remove the unnecessary details and show only the necessary ones.