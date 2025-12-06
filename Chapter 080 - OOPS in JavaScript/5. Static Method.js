class YASH_Bank {
    constructor(name) {
        this.name = name
        this.account_number = YASH_Bank.generateBankAccountNumber()
    }

    static generateBankAccountNumber() {
        let number = Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000
        return number
    }
}

let customer = new YASH_Bank("Yashwanth")

console.log(customer.account_number)
// You can see your account number. Simple as that.

console.log(customer.generateBankAccountNumber)
// But, you can't access the generateBankAccountNumber().
// It's because when it's statically defined, objects can't access it.
// It can be accesses only by the class itself.

console.log(YASH_Bank.generateBankAccountNumber())
// Now, this'll work because the class can access the static method.