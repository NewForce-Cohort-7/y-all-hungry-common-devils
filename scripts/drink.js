import {getDrinks, setDrink, getDrinkLocations, transientState} from './database.js'

const dranks = getDrinks() // initializing the dranks variable with the function call getDrinks()
const drankLocation = getDrinkLocations()

// const yourDrinks = [] // an array that stores every drink selection from the user

document.addEventListener(
  "change",
  (event) => {
      if (event.target.name === "drinkNum") {
        let drinkNum = parseInt(event.target.value)
        const selectedDrink = dranks.find(drink => drink.id === parseInt(event.target.value));
        drankOrder = `<img src="${selectedDrink.image}" alt="${selectedDrink.description}" class="images"><p class="selectedName">${selectedDrink.name}<p>`;
        // for (const drink of dranks) { // iterate through database.drinks
        //   if (drink.id === drinkNum) { // check to see if the change event value is equal to database.drinks.id
        //     addToDrankOrder(drink.name) // add drink name to yourDrinks array, which updates the drankOrder
        //     break; // stop iterating after finding a matching drink
        //   }
        // }

        setDrink(drinkNum)
      }
  }
)

// const addToDrankOrder = (selectedDrink) => { // this function builds the yourDrinks array and places the values into drankOrder to be desplayed under the index.html Orders h2 element
//   yourDrinks.push(selectedDrink)
//   const drinksInOrder = "Your Drinks: " + yourDrinks.join(', ')
//   drankOrder = drinksInOrder
// }

const setDrinkMenu = () => {
  const newState = transientState()
  let localDranks = '<option>Drink Options</option>'
  let drinkNum = []
  drankLocation.forEach(local => { 
    if (newState.locationId === local.locationId) {
      drinkNum.push(local.drinkId)
    }
  })
  drinkNum.forEach(num => {
      for (const drank of dranks) {
        if(drank.id === num)
      localDranks += `<option value="${drank.id}">${drank.name}</option>`
    }
  })
  // console.log(localDranks)
  return localDranks
}

export const drinkOptions = () => {
  let html = '<select name="drinkNum">'

  html += setDrinkMenu()
 

  // console.log(html);
  html += '</select>'

  return html
}

export let drankOrder = ''