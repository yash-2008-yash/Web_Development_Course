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

// Variable declarations for result statement
let first_word;
let second_word;
let third_word;

// Condition for selecting one of the adjectives
if (random_number_1 == 1) {
    first_word = adjectives[1]
}
else if (random_number_1 == 2) {
    first_word = adjectives[2]
}
else {
    first_word = adjectives[3]
}

// Condition for selecting one of the shop names
if (random_number_2 == 1) {
    second_word = shop_names[1]
}
else if (random_number_2 == 2) {
    second_word = shop_names[2]
}
else {
    second_word = shop_names[3]
}

// Condition for selecting one of the another words
if (random_number_3 == 1) {
    third_word = another_word[1]
}
else if (random_number_3 == 2) {
    third_word = another_word[2]
}
else {
    third_word = another_word[3]
}

// Final result
console.log(`Company name : ${first_word} ${second_word} ${third_word}`)