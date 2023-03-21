import { getDesserts, setDessert, getDessertLocations, transientState} from "./database.js"

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
})
// const inventories = filterDessertLocationsByDessert(dessert)

const filterDessertLocationsByLocation = () => {
    const  correctDessertLocations = []
    const customOrder = transientState()
     for (const dessertLocation of dessertLocations) {
        // // use bridge table and get location id from state
        if (dessertLocation.locationId === customOrder.locationId) {
            // console.log(dessertLocation)
            correctDessertLocations.push(dessertLocation)
        }
    }
    return correctDessertLocations
}
const filterDessertLocationsByDessert = (desserts, theRightDessertLocations) => {
 let correctDesserts = ''
//  use loop to get dessert.id  
 desserts.forEach(dessert => {
     // //Use correct locations to find the correct desserts for that location
     for (const theRightDessertLocation of theRightDessertLocations) {
         if (dessert.id === theRightDessertLocation.dessertId) {
             correctDesserts += `<option value="${dessert.id}">${dessert.name}</option>`
            }
        }
    })
    //  Use correct desserts to return html string with dessert names in the selection options
    // return `<option value="${correctDesserts.id}">${correctDesserts.name}</option>`
    return correctDesserts
}
export const dessert = () => {
    
    let html = ""
    
    html += '<select id="desserts">'
    html += '<option value="0">Milkshake Flavors</option>'
    // see if the dessert.id is in bridge table for that location 
    
    //finds the correct locationId for the transientState
    
    const theRightDessertLocations = filterDessertLocationsByLocation()
    
    const correctDesserts = filterDessertLocationsByDessert(desserts, theRightDessertLocations)
    // // console.log(correctDesserts)
    // console.log(theRightDessertLocations)
    // console.log(correctDesserts)

        // line 42 should be [{id:6, dessertId: 6, locationId: 2, quantity:499},
        //                  {id:7, dessertId: 7, locationId: 2, quantity:600},
                       // {id:8, dessertId: 8, locationId: 2, quantity:700}


        //-------  
    html += correctDesserts
    // add an option that says none
    html += "</select>"
    return html
}


// get all the desserts 
// const desserts = getDesserts()


// compare and show desserts per location 

// we need location id 
            // comes from state
            
            // bridge table 
            // dessertLocations()
            
            // all desserts
            // getDesserts()
            
            
            
            // const perLocal = dessertLocations.filter( x => { 
            //         return x.locationId === customOrder.locationId
            //     })
            //     const arrayOfOptions = perLocal.map( (dessertLocation) => {
            //             const activeDessert = desserts.find(dessert => dessertLocation.dessertId === dessert.id )
            //             //----
            
            
            
            // console.log(customOrder)
            // const filterDessertLocationsByLocation = (dessertLocation) => {
                //     const correctLocal = []
                //     for (dessertLocation of dessertLocations) {
                    //         if (dessertLocation.locationId === customOrder.locationId) {
                        //             correctLocal.push(dessertLocation)
                        //         }
                        //         return correctLocal
//     }
//     console.log(correctLocal)
// const correctDesserts = filterDessertLocationsByDessert()
// }
// const correctLocations = filterDessertLocationsByLocation(location)
// const filterDessertLocationsByDessert = () => {
    //    const activeDesserts = []
    //    for (const correctLocation of correctLocations) {
        //        if (correctLocation.dessertId === dessert.id) {
            //            return activeDesserts.push(correctLocation)
            //        }
            //        return activeDesserts
            //    }
            //    console.log(activeDesserts)
// }
