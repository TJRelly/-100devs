//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [10, 20, 30, 40]
console.log(nums.reduce((a, c) => a + c))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squared = (arr) => arr.map(e => Math.pow(e, 2))
console.log(squared(nums))
//Create a function that takes string
//Print the reverse of that string to the console
let reverse = (str) => (str.split('').reverse().join(''))
console.log(reverse("Hello World!"))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindrome = (str) => str === reverse(str)

console.log(palindrome('racecar'))
console.log(palindrome('hello'))

let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('fizzBuzz')
        else if (i % 3 === 0) console.log('fizz')
        else if (i % 5 === 0) console.log('buzz')
        else console.log(i)
    }
}

fizzBuzz(30)