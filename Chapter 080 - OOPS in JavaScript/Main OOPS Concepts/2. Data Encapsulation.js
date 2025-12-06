// Data Encapsulation means protecting our data from unauthorized entries.

class GOT {
    #NedStarkSecret = "Jon is a Targaryen."

    revealSecret(person) {
        if (person === "Ned Stark") {
            return this.#NedStarkSecret
        } else {
            return "You have no right to know the secret."
        }
    }
}

let object = new GOT()

console.log(object.revealSecret("Robert Baratheon"))
// It'll show "You have no right to know the secret."