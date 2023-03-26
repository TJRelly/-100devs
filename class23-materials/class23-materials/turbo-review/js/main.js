// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "Hello World?"
if (sentence.includes('?')) console.log (sentence)
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiple = "Hello I'm TJ a jr. dev."
let replace = multiple.replaceAll('jr. dev', 'software engineer')
console.log(replace)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let rps = () => {
    let num = Math.floor(Math.random()*3)
    if (num === 0) return 'rock'
    else if(num === 1) return 'paper'
    else if(num === 2) return 'scissors'
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let choice = (choice) => {
    let cpuChoice = rps()
    console.log('cpu choice: ' + cpuChoice)
    console.log('player choice: ' + choice)
    if (cpuChoice === choice) return "It's a tie."
    else if (cpuChoice === 'rock' && choice === 'paper' 
    || cpuChoice === 'paper' && choice === 'scissors' 
    || cpuChoice === 'scissors' && choice === 'rock') return "You Won!"
    else return "You Lost."
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choices = ['rock', 'paper', 'scissors']

let play = (arr) => {
    arr.forEach(e => console.log(choice(e)) )
}

play(choices)