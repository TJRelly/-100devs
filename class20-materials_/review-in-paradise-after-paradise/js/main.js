// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
const closed = (arr) => {
    if (arr[0] < arr.at(-1)) alert('Hi')
    else if (arr[0] > arr.at(-1)) alert('Bye')
    else alert('We close in an hour')
}

arr1 = [1, 2, 3]
arr2 = [3, 2, 1]
arr3 = [3, 75, 3]

closed(arr1)
closed(arr2)
closed(arr3)