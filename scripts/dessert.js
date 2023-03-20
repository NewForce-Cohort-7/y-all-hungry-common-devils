import { getDesserts, setDessert, getDessertLocations,getTransientState} from "./database.js"

const desserts = getDesserts()
const dessertLocations = getDessertLocations()

// const filterDessertLocationsByDessert = (singleDessert) => {
//     const inventories = []
//     for (const inventory of dessertLocations) {
//         if (inventory.dessertId === singleDessert.id) {
//             inventories.push(inventory)
//         }
//     } 
//     return inventories
// }

document.addEventListener("change", (event) => {
    if (event.target.id === "desserts") { 
        setDessert(parseInt(event.target.value))
            }
        }
    )


export const dessert = () => {
    const transientState = getTransientState()
    // const inventories = filterDessertLocationsByDessert(dessert)
    
    let html = ""

    html += '<select id="desserts">'
    html += '<option value="0">Milkshake Flavors</option>'

    // if (transientState.locationId === dessert.id){
        //-------
        console.log(transientState)
        const filterDessertLocationsByLocations = (dessertLocation) => {
            const perLocal = []
            if (dessertLocation.locationId === transientState.locationId) {
                perLocal.push(dessertLocation)
            }
            return perLocal
        }
        // const perLocal = dessertLocations.filter( x => {
        //     return x.locationId === transientState.locationId
        // })
        perLocal = filterDessertLocationsByLocations(dessertLocations)
        const arrayOfOptions = perLocal.map( (bridgeObj) => {
            const activeDessert = desserts.find(x => bridgeObj.dessertId === x.id )
            //----
        return `<option value="${activeDessert.id}">${activeDessert.name}</option>`
        }
    
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

// get all the dessertes 

// see if the dessert.id is in bridge table for that location 

// use bridge table and get location id from state

// compare and show desserts per location 

// we need location id 
    // comes from state

// bridge table 
    // dessertLocations()

// all desserts
    // getDesserts()


