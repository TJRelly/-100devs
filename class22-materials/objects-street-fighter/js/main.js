//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(speed, strength, armor) {
    this.speed = speed
    this.strength = strength
    this.armor = armor

    this.fight = () => "Begin"
    this.fatality = () => "Finish Him!"
}

StreetFighter.prototype.color = 'blue'

let Max = new StreetFighter(5, 10, true)

console.log(Max.fatality())

