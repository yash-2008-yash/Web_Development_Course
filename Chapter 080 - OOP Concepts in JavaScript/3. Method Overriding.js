class Student {
    info() {
        return "I am a normal student."
    }
}

class Hostel_Student extends Student {
    info() { // Same method name as the parent class
        return "I am a hostel student."
    }
}

let yashwanth = new Student()
let pradeeshwaran = new Hostel_Student()

console.log(yashwanth.info())     // I am a normal student.
console.log(pradeeshwaran.info()) // I am a hostel student.

// Here, the child class overrides the info() method with its own properties.
// This is called 'Method Overriding'.