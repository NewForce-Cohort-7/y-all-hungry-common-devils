





import {getFood,setFood} from "./database.js"

const arrayOfood= getFood()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
            setFood(parseInt(event.target.value))
        }
    }
)



export const food = () => {
    let html = `<select id="food">
    <option value="0">Menu -Food Items</option>`


    for (const foodObject of arrayOfood) {
        html +=  `<option value="${foodObject.id}"> ${foodObject.name}</option>`
    }

    html += `</select>`

    return html
}




