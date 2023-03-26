//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const findEvenNums = (arr) => {
    evenNums = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evenNums.push(arr[i])
    }
    console.log(evenNums)
}

const findEvenNums2 = (arr) => {
    evenNums = []
    arr.forEach(num => num % 2 ? '' : evenNums.push(num))
    console.log(evenNums)
}

const findEvenNums3 = arr => console.log(arr.filter(num => (num % 2) ? '' : num))

let nums = [1, 2, 3, 4, 5, 6]

findEvenNums(nums)
findEvenNums2(nums)
findEvenNums3(nums)