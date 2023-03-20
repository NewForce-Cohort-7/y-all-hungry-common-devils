import { getLocations, setLocation } from "./database.js";
const locationArr = getLocations()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "location") {
            setLocation(parseInt(event.target.value))
        }
    }
)

export const location = () => {
    let html = `<select id="select-location">
            <option value="0"> Store Location</option>`

    const listItemsArray = locationArr.map(location => {
        return `<option name="location" value="${location.id}">${location.name}</option>`
    })

    html += listItemsArray.join("")
    html += "</select>"

    return html
}