//Create a dog object that has four properties and three methods
function makePizza (cheese, topping, crust, sauce) {
    this.cheese = cheese
    this.topping = topping
    this.crust = crust
    this.sauce = sauce

    this.estimateDeliveryTime = () => console.log('Calculating...')
    this.isGood = (cheeseType) => pizza.cheese === 'mozzarella' ? "This pizza is good!" : "I don't like this"
}


// pizza.cheese = 'mozzarella'
// pizza.topping = ['pepporini', 'pineapple', 'sausage']
// pizza.crust = 'thin'
// pizza.sauce = 'white'

let pizza = new makePizza('mozzarella', 'pepperoni', 'thin', 'white')

console.log(pizza.isGood(pizza.cheese))

console.log(pizza.size)

makePizza.prototype.size  = 'medium'

console.log(pizza.size)

pizza.estimateDeliveryTime()





