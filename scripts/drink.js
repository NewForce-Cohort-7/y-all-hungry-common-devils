import {getDrinks, setDrink} from './database.js'

const dranks = getDrinks() // initializing the dranks variable with the function call getDrinks()
const yourDrinks = [] // an array that stores every drink selection from the user

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

const addToDrankOrder = (selectedDrink) => { // this function builds the yourDrinks array and places the values into drankOrder to be desplayed under the index.html Orders h2 element
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
  html += '</select>'

  return html
}

export let drankOrder = ''