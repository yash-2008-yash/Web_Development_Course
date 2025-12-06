// Data abstraction means exposing only the required methods and hiding the internal working logic.

class Car {
    start() {
        console.log("Car started... VROOM, VROOM!")
    }

    stop() {
        console.log("Car stopped.")
    }

    #showEngineMechanism() {
        console.log("WORKING MECHANISM OF ENGINE...")
    }
}

const Yashwanth_BMW = new Car()

Yashwanth_BMW.start()
// You can use 'start()' and 'stop()'. No problem in that.

// But you can't access 'showEngineMechansim()'
// Because you don't have to. That is how Data Abstraction works.
// It shows only the necessary things to the user, and it hides the remaining things.
// The reason you bought a car is to drive, right?
// So, shut the fuck up and drive, don't think about how the engine works, where petrol burns,