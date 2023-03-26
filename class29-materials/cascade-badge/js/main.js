//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemonParty = ['pikachu', 'eevee', 'charizard', 'snolax']
const reverseList = (arr) => console.log(arr.reverse())
reverseList(pokemonParty)
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [1, 2, 3]
let b = [1, 2, 3]

const sumOfSquaresAndCubes = (arr1, arr2) => {
    let sumOfSquares = arr1.reduce((a, c) => a + c ** 2, 0)
    let sumOfCubes = arr2.reduce((a, c) => a + c ** 3, 0)
    return sumOfSquares > sumOfCubes
}

console.log(sumOfSquaresAndCubes(a, b))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
const multipleOfIndex = (arr) => arr.filter((num, i) => (num % i === 0))

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
let strNum = [1, '2', 3, '4']

const total = (arr) => arr.reduce((a, c) => a + +c, 0)
console.log(total(strNum))