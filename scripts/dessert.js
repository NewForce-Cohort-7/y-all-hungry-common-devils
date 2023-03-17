import { getDesserts, setDessert, getDessertLocations } from "./database.js"

const desserts = getDesserts()
const dessertLocations = getDessertLocations()

const filterDessertLocationsByDessert = (singleDessert) => {
    const assignments = []
    for (const assignment of dessertLocations) {
        if (assignment.dessertId === singleDessert.id) {
            assignments.push(assignment)
        }
    } 
}

document.addEventListener("change", (event) => {
    if (event.target.id === "desserts") {
        setDessert(parseInt(event.target.value))
    }
})


export const Desserts = () => {

    let html = ""

    html += '<select id="desserts">'
    html += '<option value="0">Milkshake Flavors</option>'

    const arrayOfOptions = desserts.map( (dessert) => {
        return `<option value="${dessert.id}">${dessert.name}</option>`
    }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}