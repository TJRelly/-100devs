//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(color, model, size, brand, flavors){
        this.color = color
        this.model = model
        this.size = size
        this.brand = brand
        this.flavors = flavors
    }
    brew(){
        console.log(`Your ${this.color} ${this.brand} ${this.model} is starting.`)
    }
    chooseFlavor(){
        console.log(`You can make ${this.flavors} flavors on your ${this.model}. Choose your flavor.`)
    }
    alarm(){
        console.log(`Your ${this.size} espresso is done!`)
    }
}

let espresso = new EspressoMachine('silver', 'C380', 'medium', 'Curig', 38)
console.table(espresso)

let espresso2 = new EspressoMachine('black', 'C480', 'large', 'Curig2', 48)
console.table(espresso2)

