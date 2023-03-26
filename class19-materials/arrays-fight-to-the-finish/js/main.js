//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Shrek', 'Shrek 2', 'Shrek 3']
let titles = movies.forEach(e => console.log(e))
let h2 = document.querySelector('h2')

for (let i = 0; i < movies.length; i++) {
        h2.innerText += ` ${movies[i]}` 
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [0, 1, 2, 3]
let numsPlusThree = nums.map(num => num + 3)
console.log(numsPlusThree)
let sum = numsPlusThree.reduce((a, c) => a + c)

//Find the average of all the numbers from question three
console.log(sum / nums.length)