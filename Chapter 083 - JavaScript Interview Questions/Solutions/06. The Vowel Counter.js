// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function VowelCounter(string) {
    let stringArray = [...string]

    let vowelCount = 0

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o' || stringArray[i] === 'u' || stringArray[i] === 'A' || stringArray[i] === 'E' || stringArray[i] === 'I' || stringArray[i] === 'O' || stringArray[i] === 'U') {
            vowelCount++
        }
    }

    console.log(`Number of vowels in '${string}' is ${vowelCount}`)
}

VowelCounter("Yashwanth")