//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    console.log('working')
    //get temp
    let temp = document.querySelector('#temp').value
    //convert temp
    let conversion = temp * 9 / 5 + 32
    //show temp
    document.querySelector('#show').innerText = conversion
}
