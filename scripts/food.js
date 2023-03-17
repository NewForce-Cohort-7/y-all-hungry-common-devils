import {getFoods} from "./database"

const arrayOfood= getFood()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value))
        }
    }
)



export const generateFoodHTML = () => {
    let html = `<select id="food">
    <option value="0">Menu -Food Items</option>`


    for (const foodObject of arrayofFood) {
        html +=  `<option value="${foodObject.id}"> ${foodObject.name}</option>`
    }

    html += `</select>`

    return html
}




