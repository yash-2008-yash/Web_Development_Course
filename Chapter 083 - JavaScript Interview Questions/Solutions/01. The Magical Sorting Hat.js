// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function WizardHouses(student_array) {
    let Gryffindor = []
    let Hufflepuff = []
    let Ravenclaw = []
    let Slytherin = []

    for (let student of student_array) {
        if (student.length < 6) {
            Gryffindor.push(student)
        } else if (student.length < 8) {
            Hufflepuff.push(student)
        } else if (student.length < 12) {
            Ravenclaw.push(student)
        } else {
            Slytherin.push(student)
        }
    }

    console.log(`Students of Gryffindor: ${Gryffindor}`)
    console.log(`Students of Hufflepuff: ${Hufflepuff}`)
    console.log(`Students of Ravenclaw: ${Ravenclaw}`)
    console.log(`Students of Slytherin: ${Slytherin}`)
}

let array = ['Yashwanth', 'Bharath', 'Roopesh', 'Lokanatha', 'Pradeeshwaran', 'Bhuvan', 'Mudassir', 'Tharun', 'Faraz', 'Sanjay', 'Sumanth']

WizardHouses(array)