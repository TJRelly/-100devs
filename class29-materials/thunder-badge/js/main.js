//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class Pokemon {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log('hi')
    }
}

let charizard = new Pokemon('charizard')
console.log(charizard.name)
charizard.speak()
console.log(charizard)