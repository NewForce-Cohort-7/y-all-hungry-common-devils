import { getLocations, setLocation, transientState } from "./database.js";
const locationArr = getLocations()

let message = ""


document.addEventListener("change", (event) => {
    if (event.target.id === "location") {
        const selectedLocation = locationArr.find(location => location.id === parseInt(event.target.value));
        message = `You're ordering from ${selectedLocation.name}`;
        // document.querySelector('#location').textContent = message;
        setLocation(parseInt(event.target.value));
    }
});

export const location = () => {
    let html = `
    <select id="location">
    <option value="0">Store Location</option>
     `
    
    const listItemsArray = locationArr.map(location => {   
        const truck = transientState()  
        if (truck.locationId == location.id) {

            return `<option value="${location.id}" selected /> ${location.name}</option>`

        } else {

        return `<option id="location" value="${location.id}">${location.name}</option>`  
        }
    })
    
    html += listItemsArray.join("")
    html += "</select>"
    html += `<div id="location-message"> </div>`
    html += message
      
      

     return html
 }
