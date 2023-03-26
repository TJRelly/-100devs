//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawk(gender, wheels, board, sneakers){
    this.gender = gender
    this.wheels = wheels
    this.board = board
    this.sneakers = sneakers

    this.kickFlip = () => console.log('woooo')
    this.coast = () => console.log('coasting')
    this.goFast = () => console.log('speeding up')
}

let player1 = new TonyHawk('male', 'blue', 'black', 'white')
console.log(player1)
player1.kickFlip()
player1.coast()
player1.goFast()