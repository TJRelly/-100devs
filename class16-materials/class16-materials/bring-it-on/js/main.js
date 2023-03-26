// *Variables*
// Create a variable and console log the value
let num = 5
console.log(num)
// Create a variable, add 10 to it, and alert the value
let num2 = 10
num2 += 10
alert(num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subtract = (a, b, c, d) => alert(a - b - c - d)
// Create a function that divides one number by another and returns the remainder
const remainder = (a, b) => a % b
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const addGreatOrLess = (a, b) => (a + b) > 50 ? alert('Jumanji') : ''
addGreatOrLess(50, 5)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multiply = (a, b, c) => (a * b * c) % 3 === 0 ? alert('Zebra') : ''
multiply(3, 3, 3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
const wordNum = (word, num) => {
    for (let i = 0; i < num; i++) console.log(word)
}

wordNum('Hi!', 30)