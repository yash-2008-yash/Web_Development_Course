// Data abstraction means exposing only the required methods and hiding the internal working logic.

class Car {
    start() {
        console.log("Car started... VROOM, VROOM!")
    }

    #EngineMechanism() {
        console.log("SPARK PLUG STARTED...")
        console.log("FUEL IGNITION STARTED...")
        console.log("ENGINE STARTED...")
    }

    stop() {
        console.log("Car stopped.")
    }
}

new Car().start()
new Car().stop()
// You can use 'start()' and 'stop()'. No problem in that.

// But you can't access 'EngineMechansim()'
// Because you don't have to. That is how Data Abstraction works.
// It shows only the necessary things to the user, and it hides the remaining things.
// The reason you buy a car is to drive, right?
// So, shut the fuck up and drive, don't think about how the engine works, where petrol burns, etc.