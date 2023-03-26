// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = '    strawberry milkshake  '
console.log(drink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = 'I love apples'
console.log(str.includes('apple'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let rockPaperScissors = () => {
    let random = Math.floor(Math.random() * 3)
    if (random === 0) { return 'rock' }
    else if (random === 1) { return 'paper' }
    else if (random === 2) { return 'scissors' }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let checkWin = (choice) => {
    let cpuChoice = rockPaperScissors()
    if (choice === cpuChoice) console.log("It's a tie.")
    else if ((choice === 'rock' && cpuChoice === 'scissors')
        || (choice === 'paper' && cpuChoice === 'rock')
        || (choice === 'scissors' && cpuChoice === 'paper')) { console.log('You Won!') }
    else { console.log('You Lost!') }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choices = ['rock', 'paper', 'scissors']

let play = (arr) => {
    arr.forEach(choice => checkWin(choice))
}

play(choices)