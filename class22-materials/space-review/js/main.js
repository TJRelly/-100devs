//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4]
console.log(nums.reduce((a, c) => a + c))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squared = (arr) => arr.map(num => Math.pow(num, 2))
console.log(squared(nums))
//Create a function that takes string
//Print the reverse of that string to the console
let reverse = (str) => str.split('').reverse().join('')
console.log(reverse('happy birthday'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindrome = (str) => str === reverse(str)
console.log(palindrome('racecar'))
console.log(palindrome('happy'))
