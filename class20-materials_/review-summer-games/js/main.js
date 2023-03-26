//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

const multi = (arr) => {
    let product = 1
    arr.forEach(num => product *= num)
    alert(product)
}

arr = [9, 8, 5]
multi(arr)



document.querySelector('img').addEventListener('click', () => {
    let product = (arr.reduce((acc, num) => acc * num))
    document.querySelector('h2').innerText = product
})
