// Polymorphism means different objects can respond to the same method name in different ways.
// This is mostly done by 'Method Overriding'.

// Let's take an example of 'Game of Thrones'.
// Imagine if there's a battle, and every house has to attack.
// But every house use their own attack method, right? That's Polymorphism.
// Every house is attacking, yes, but in their own different ways.

class Noble_House {
    attack() {
        console.log("The house attacks!");
    }
}

class Stark extends Noble_House {
    attack() {
        console.log("Starks fight with honor and wolves!")
    }
}

class Lannister extends Noble_House {
    attack() {
        console.log("Lannisters attack by backstabbing!")
    }
}

class Targaryen extends Noble_House {
    attack() {
        console.log("Targaryens attack with their dragons!")
    }
}

new Stark().attack()
new Lannister().attack()
new Targaryen().attack()

// Every house has the method 'attack()', but each of them has different properties.
// This is how Polymorphism works in JavaScript.