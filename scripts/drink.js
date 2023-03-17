import {getDrinks, setDrink} from './database.js'

const dranks = getDrinks()
const yourDrinks = []

document.addEventListener(
  "change",
  (event) => {
      if (event.target.name === "drinkNum") {
        let drinkNum = parseInt(event.target.value)

        for (const drink of dranks) { // iterate through database.drinks
          if (drink.id === drinkNum) { // check to see if the change event value is equal to database.drinks.id
            addToDrankOrder(drink.name) // add drink name to yourDrinks array, which updates the drankOrder
            break; // stop iterating after finding a matching drink
          }
        }

        setDrink(drinkNum)
      }
  }
)

const addToDrankOrder = (selectedDrink) => {
  yourDrinks.push(selectedDrink)
  const drinksInOrder = "Your Drinks: " + yourDrinks.join(', ')
  drankOrder = drinksInOrder
}

export const drinkOptions = () => {
  let html = '<select name="drinkNum">'

  // Use .map() for converting objects to <li> elements
  const drinkList = dranks.map(drink => {
      return `<option value="${drink.id}">
        ${drink.name}
        </option>`
  })

  html += drinkList.join("")
  console.log(html);
  html += '</select>'

  return html
}

export let drankOrder = ''