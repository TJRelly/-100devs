//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
const print21 = () => { for (let i = 0; i < 21; i++) console.log(21) }

print21()

document.querySelector('img').addEventListener('click', () => {
    for (let i = 0; i < 21; i++) {
        document.querySelector('#savageSays').innerText += ' 21'
    }
})
