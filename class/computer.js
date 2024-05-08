class Computer {
    constructor(brand, os, type) {
        this.brand = brand
        this.os = os
        this.type = type
    }

    powerOn() {
        console.log(`${this.brand} ${this.type} powers on with ${this.os}`)
    }

    static powerOnAll(...computers) {
        computers.forEach(computer => {
            computer.powerOn()
        });
    }
}
let newComputer = new Computer('HP', 'Windows', 'laptop')
let oldComputer = new Computer('Dell', 'Windows', 'desktop')
let computers = [newComputer, oldComputer]

console.log(Computer.powerOnAll(...computers))
