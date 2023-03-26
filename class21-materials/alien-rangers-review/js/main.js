//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Abbot Acadamy', 'Power Rangers', 'Thunder Cats']
tvShows.forEach(show => console.log(show))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [21, 56, 88, 24, 99, 710]
let evens = (arr) => arr.filter(num => num % 2 === 0)
console.log(evens(nums))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let lowHigh = (arr) => {
    arr.sort((a, b) => a - b)
    return arr[1] + arr.at(-2)
}

console.log(lowHigh(nums))