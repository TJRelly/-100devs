//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this._name = name
    }
    get name(){
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound.`)
    }
}

let ted = new Animal('Ted')
console.log(ted)
console.log(ted.name)
ted.speak()
ted.name = 'Max'
console.log(ted)

class Pig extends Animal {
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        console.log(`${this.name} the ${this.breed} says, 'Oink oink!'`)
    }
}

class Horse extends Pig{
    constructor(name, breed){
        super(name, breed)
    }
    speak(){
        console.log(`${this.name} the ${this.breed} says, 'Naaayyy!'`)
    }
}

let lester = new Pig('Lester', 'mulefoot')
console.log(lester)
console.log(lester.name)
console.log(lester.breed)
lester.speak()

let mrEd = new Horse('Mr. Ed', 'mustang')
console.log(mrEd)
console.log(mrEd.name)
console.log(mrEd.breed)
mrEd.speak()