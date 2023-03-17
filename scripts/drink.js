import {getDrinks} from './database.js';

const dranks = getDrinks();

// const listItemsArray = drinks.map(
//   (drink) => {
//       return `<select>
      // <option value="drink[1].id">Option 1</option>
      // <option value="option2">Option 2</option>
      // <option value="option3">Option 3</option>
      // <option value="option4">Option 4</option>
//     </select>`
//   }
// )
// html += listItemsArray.join("")

document.addEventListener(
  "change",
  (event) => {
      if (event.target.name === "drink") {
          window.alert(``)
      }
  }
)

export const drinkOptions = () => {
  let html = "<select>"

  // Use .map() for converting objects to <li> elements
  const drinkList = drinks.map(size => {
      return `<option value="${drinks.id}">
        ${drinks.name}
        </option>`
  })

  html += drinkList.join("")
  html += "</select>"
console.log(drinkList);
  return html
}
