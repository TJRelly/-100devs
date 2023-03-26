// *Variables*
// Create a variable and console log the value
let pizza = "Dominoes"
console.log(pizza)
// Create a variable, add 10 to it, and alert the value
let num = 15
alert(num + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subtract = (d, c, b, a) => alert(d - c - b - a)
subtract(100, 50, 25, 12.5)
// Create a function that divides one number by another and returns the remainder
const divide = (b, a) => b / a
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const add = (a, b) => {
    if (a + b > 50) {
        alert('Jumanji')
    } else {
        console.log(a + b)
    }
}
add(5, 3)
add(50, 2)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multiply = (a, b, c) => {
    let product = a * b * c
    if (product % 3 === 0) {
        alert('Zebra')
    } else {
        console.log(`${product} is not divisible by 3.`)
    }
}
multiply(2, 7, 5)
multiply(3, 6, 9)