//Create an array of movies with at least three movies.
const movies = ['Black Panther', 'Iron Man', 'Thor']
console.log(movies)
//Using the array from above, store the first movie in a variable
const firstMovie = movies[0]
console.log(firstMovie)
//Get the length of the original array and store it in a new variable
let movieLen = movies.length
console.log(movieLen)
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movies.at(-1)
console.log(lastMovie)