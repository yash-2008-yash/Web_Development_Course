// let student1 = {
//     student_name: "Yashwanth",
//     roll_number: "20251BCI0011"
// }

// let student2 = {
//     student_name: "Pradeeshwaran",
//     roll_number: "20251BCI0283"
// }

// If we use manual method, it's time consuming.
// Just imagine you have to create 1000 students objects. HELL!
// But with 'Classes & Objects OOPS', it becomes easier.
// You have to create a blueprint of objects, which is called 'class'.
// Then you can easily create an object in one fucking line.

class Student {
    constructor(student_name, roll_number) {
        this.student_name = student_name
        this.roll_number = roll_number
    }
}

let student1 = new Student("Yashwanth", "20251BCI0011")
let student2 = new Student("Pradeeshwaran", "20251BCI0283")

// Constructor is a special method in JS which automatically runs when you create an object.
// It's used to set the initial values of the objects created.