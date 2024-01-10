class Food {
    constructor (name, image, price) {
        this.name = name
        this.inage = image
        this.price = price
    }
}

const renderMenuForm = (rootElement, menu) => {
    let form = document.createElement('form')

    // HW2: Add fieldset for food section
    let foodFieldset = document.createElement('fieldset')
    foodFieldset.innerHTML = "<legend>Food</legend>"
    
    menu.food.forEach(foodData => {
        let label = document.createElement('label')
        let input = document.createElement('input')
        input.setAttribute("type", "checkbox")
        let labelText = document.createTextNode(`${foodData.name} ${foodData.price}`)

        label.appendChild(input)
        label.appendChild(labelText)

        foodFieldset.appendChild(label)
    })

    // HW1: Add fieldset for drinks section
    let drinksFieldset = document.createElement('fieldset')
    drinksFieldset.innerHTML = "<legend>Drinks</legend>"

    menu.drinks.forEach(drinkData => {
        let label = document.createElement('label')
        let input = document.createElement('input')
        input.setAttribute("type", "checkbox")
        let labelText = document.createTextNode(`${drinkData.name} ${drinkData.price}`)

        label.appendChild(input)
        label.appendChild(labelText)

        drinksFieldset.appendChild(label)
    })

    form.appendChild(foodFieldset)
    form.appendChild(drinksFieldset)

    rootElement.appendChild(form)
}


let data = {
    menu: {
        food: [
            new Food("Pizza", "images/Pizza.jpeg", 100),
            new Food("Salad", "images/Salad.jpeg", 50),
            new Food("Soup", "images/Soup.jpeg", 25),
        ],
        drinks: [
            // HW1: do the same for drinks
            new Food("Cola", "images/Cola.jpeg", 20),
            new Food("Water", "images/Water.jpeg", 10),
            new Food("Coffee", "images/Coffee.jpeg", 30),
        ]
    }
}

const contentSection = document.getElementById("content") //HW2: use another way

renderMenuForm(contentSection, data.menu)