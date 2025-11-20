let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
};

let shop_names = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};

let another_word = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

// Random numbers between 1 to 3
let random_number_1 = Math.floor(Math.random() * 3) + 1
let random_number_2 = Math.floor(Math.random() * 3) + 1
let random_number_3 = Math.floor(Math.random() * 3) + 1

// Variables to store the words
let first_word = adjectives[random_number_1]
let second_word = shop_names[random_number_2]
let third_word = another_word[random_number_3]

// Final result
console.log(`Company name : ${first_word} ${second_word} ${third_word}`)