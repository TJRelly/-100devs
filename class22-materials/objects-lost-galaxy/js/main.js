//Create a mouse object that has four properties and three methods
// let mouse = {}

// mouse.legs = 4
// mouse.color = ['blue', 'black', 'grey']
// mouse.size = ['small', 'medium', 'large']
// mouse.speed = ['fast', 'slow'] 

// mouse.run = () => console.log('running')
// mouse.eat = () => console.log('Mmmh cheesy!')
// mouse.sleep = () => console.log("It's time for bed")

//creating a constructor
function Mouse(legs, color, size, speed) {
    this.legs = legs
    this.color = color
    this.size = size
    this.speed = speed

    this.run = () => console.log(`I'm running on all ${legs} of my legs.`)
    this.eat = () => console.log('Mmmh cheesy!')
    this.sleep = () => console.log("It's time for bed")
}

let mouse = new Mouse(4, 'black', 'medium', 'fast')
console.table(mouse)
mouse.run()
let mouse2 = new Mouse(3, 'grey', 'small', 'slow')
console.table(mouse2)
mouse2.run()
