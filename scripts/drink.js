import {getDrinks, setDrink} from './database.js'

const dranks = getDrinks()

document.addEventListener(
  "change",
  (event) => {
      if (event.target.name === "drink") {
          setDrink(parseInt(event.target.value))
      }
  }
)

export const drinkOptions = () => {
  let html = '<select name="drink"><option value="none">None</option>'

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
