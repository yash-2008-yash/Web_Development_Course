let House_Stark = {
    words: "\"Winter is Coming.\"",
    kingdom: "Winterfell"
}

let Ned_Stark = {
    sword_name: "Ice"
}

console.log(Ned_Stark.sword_name) // Ice
console.log(Ned_Stark.words) // undefined
console.log(Ned_Stark.kingdom) // undefined

// It'll show 'undefined' because 'Ned_Stark' object doesn't have the key 'words' and 'kingdom'.
// When it doesn't even exist, how can we access it?
// We can copy paste it from the 'House_Stark' object, but what if there are many keys?
// What if you update something in 'House_Stark' and you want that in 'Ned_Stark' too?
// Instead of copy-pasting bullshit, we can use [[prototype]] in JavaScript

Object.setPrototypeOf(Ned_Stark, House_Stark)

// We made 'House_Stark' as a prototype of 'Ned_Stark'.
// If JavaScript can't find the key we gave in 'Ned_Stark', it'll move to the prototype, which is 'House_Stark' in this case.
// Then it searches for the key we gave. Here, it finds the 'words' and 'kingdom' key in the prototype, so it'll return it to us.
// If we add new keys in 'House_Stark', we can still access those new keys through 'Ned_Stark'.
// It's because they both are interconnected via 'Prototype Chain'.

console.log(Ned_Stark.words)   // "Winter is Coming."
console.log(Ned_Stark.kingdom) // Winterfell

// Now, JS willn't say 'undefined', because it found the 'words' and 'kingdom' in it's prototype.
// JavaScript uses prototype-based inheritance, not class-based inheritance like Java or C++.