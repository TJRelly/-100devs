//---Easy
//create a function that subtracts two numbers and alerts the difference
const subtract = (a, b) => alert(a - b)
subtract(10, 5)
//create a function that divides three numbers and console logs the quotient
const divide = (a, b, c) => console.log(a / b / c)
divide(10, 5, 2)
//create a function that multiplys three numbers and returns the product
const multiply = (a, b, c) => a * b * c
multiply(5, 5, 5)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const calculate = (a, b, c) => (a + b) % c
calculate(10, 5, 5)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const calculate2 = (a, b, c, d) => {
    let product = a * b
    if (product > 100) console.log(c + d)
    else if (product < 100) console.log(c - d)
    else alert((a * b * c) % d)
}

calculate2(10, 10, 10, 10)
calculate2(10, 8, 10, 8)
calculate2(10, 12, 10, 12)
