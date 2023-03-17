import {getfood} from "./food.js"

const arrayOffood= getFood()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value))
        }
    }
)




export const generateInteriorHTML = () => {
    let html = `<select id="food">
    <option value="0">Menu -Food Items</option>`


    for (const foodObject of arrayofFood) {
        html +=  `<option value="${foodObject.id}"> ${foodObject.material}</option>`
    }

    html += `</select>`

    return html
}