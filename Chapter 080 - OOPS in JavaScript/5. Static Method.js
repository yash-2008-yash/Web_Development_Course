class YASH_Bank {
    constructor(name) {
        this.name = name
    }

    static generateBankAccountNumber() {
        return Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000
    }
}

let customer = new YASH_Bank("Yashwanth")

console.log(YASH_Bank.generateBankAccountNumber())
// This'll work because the class can access the static method.

console.log(customer.generateBankAccountNumber)
// This'll throw an error because objects can't access static methods.

// Static methods can be accessed only by the class itself.