// Inheritance means a class inheriting the properties of another class.

// 'Extends' is a keyword in JavaScript for using the 'Inheritance' concept.
// In this case, we make a child class called 'Hostel_Student'.
// It'll have the properties of class 'Student', and have it's own properties too.

class Student {
    constructor(student_name, roll_number) {
        this.student_name = student_name
        this.roll_number = roll_number
    }
}

class Hostel_Student extends Student {
    constructor(student_name, roll_number, room_number) {
        super(student_name, roll_number)
        this.room_number = room_number
    }
}

let stud = new Hostel_Student("Pradeeshwaran", "20251BCI0283", "341")
console.log(stud.roll_number)

// See, 'Hostel_Student' doesn't have the properties 'student_name' and 'roll_number'.
// But still we are able to access it. All because of Inheritance.
// super() calls the constructor of the parent class (Student) so that the inherited properties (student_name and roll_number) are properly initialized before the child class (Hostel_Student) adds its own properties.