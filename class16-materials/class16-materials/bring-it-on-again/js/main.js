// // *Variables*
// // Declare a variable, assign it a value, and alert the value
// let num = 10
// alert(num)
// // Create a variable, divide it by 10, and console log the value
// let num2 = 20
// num2 /= 10
// console.log(num2)
// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// const multThree = (num1, num2, num3) => alert(num1 * num2 * num3)
// multThree(1, 2, 3)
// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// const addSub = (num1, num2, num3, num4) => console.log(num1 + num2 - num3 - num4)
// addSub(1, 2, 3, 4)
// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// const calculate = (num1, num2, num3) => (100 + num1 - num2) / num3 > 20 ? console.log("WE HAVE A WINNNA") : ''
// calculate(1000, 500, 2)
// // Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// const isWeekend = (day) => day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday' ? alert('weekend') : alert('weekday')
// isWeekend('Saturday')
// isWeekend('Monday')
// isWeekend('sunday')
// //*Loops*
// //Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
const byThree = (num) => {
    for (let i = 3; i < num; i += 3) {
        console.log(i)
    }
}

byThree(50)

const fizzBuzz = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) console.log('fizzbuzz')
        else if (i % 3 === 0) console.log('fizz')
        else if (i % 5 === 0) console.log('buzz')
        else console.log(i)
    }
}

fizzBuzz()