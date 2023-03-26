// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'cheese'
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'TJ'
alert(str[1])
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const divTwoMultLast = (a, b, c) => (a / b) * c
alert(divTwoMultLast(3, 2, 12))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubed = (a) => Math.cbrt(a).toFixed(4)
console.log(cubed(9))

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const season = (month) => {
    const summer = ['june', 'july', 'august']
    summer.includes(month.toLowerCase())
        ? alert('Yay')
        : alert('Boooo')
}

season('June')
season('May')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const skipFives = (num) => {
    for (let i = 1; i <= num; i++)
        i % 5 ? console.log(i) : ''
}

skipFives(20)