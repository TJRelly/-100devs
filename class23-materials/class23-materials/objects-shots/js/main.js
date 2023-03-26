//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', findDrink)
document.querySelector('.carousel-control-prev-icon').addEventListener('click', findPrevDrink)
document.querySelector('.carousel-control-next-icon').addEventListener('click', findNextDrink)


function findDrink() {
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks)
            console.log(data.drinks[0].strDrink)
            console.log(data.drinks[0].strDrinkThumb)
            console.log(data.drinks[0].strInstructions)
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
        })
        .catch(err => console.log(`error ${err}`))
}

function findNextDrink() {
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
           console.log(data.drinks[strDrinkThumb])

           console.log(Array.prototype.indexOf.call(data.drinks, document.querySelector('img')))
        })
        .catch(err => console.log(`error ${err}`))
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.drinks)
    //         console.log(data.drinks[1].strDrink)
    //         console.log(data.drinks[1].strDrinkThumb)
    //         console.log(data.drinks[1].strInstructions)

    //         data.drinks.map(drink => {
    //             document.querySelector('h2').innerText = drink.strDrink
    //             document.querySelector('h3').innerText = drink.strInstructions
    //             document.querySelector('img').src = drink.strDrinkThumb
    //         })


    //     })
    //     .catch(err => console.log(`error ${err}`))
}

function findPrevDrink() {
    // let drink = document.querySelector('input').value
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.drinks)
    //         console.log(data.drinks[1].strDrink)
    //         console.log(data.drinks[1].strDrinkThumb)
    //         console.log(data.drinks[1].strInstructions)

    //         data.drinks.forEach(drink => {
    //             document.querySelector('h2').innerText = drink.strDrink
    //             document.querySelector('h3').innerText = drink.strInstructions
    //             document.querySelector('img').src = drink.strDrinkThumb
    //         })


    //     })
    //     .catch(err => console.log(`error ${err}`))
}        