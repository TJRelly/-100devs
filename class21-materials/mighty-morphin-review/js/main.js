// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'christmas'
console.log(holiday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Hello, World!"
console.log(str.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
let subtractAbsVal = (a, b, c, d, e) => Math.abs(100 - (a + b + c + d + e))
console.log(subtractAbsVal(500, 1, 2, 3, 4))
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
let lowHigh = (a, b, c) => {
    let arr = [a, b, c]
    let low = Math.min(...arr)
    let high = Math.max(...arr)
    console.log(`Lowest: ${low}\nHighest: ${high}`)
} 

lowHigh(5, 36, 3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
let coinFilp = () => Math.floor(Math.random() * 2) === 0 ? console.log('Heads') : console.log('Tails')

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
let coinFilpX = (x) => {
    for (let i = 0; i < x; i++){
        coinFilp()
    }  
}

coinFilpX(10)