import { getOrders, getFood, getDrinks, getDesserts, getLocations, addCustomOrder } from "./database.js"

const food = getFood()
const drinks = getDrinks()
const desserts = getDesserts()
const locations = getLocations()

let currentSubtotal = 0 // Initialize current subtotal to 0

const buildOrderListItem = (order) => {
    const foundFood = food.find((food) => {
        return food.id === order.foodId
    })
    
    const foundDrink = drinks.find((drink) => {
        return drink.id === order.drinkId
    })
    
    const foundDesserts = desserts.find((dessert) => {
        return dessert.id === order.dessertId
    })
    
    const foundLocation = locations.find((location) => {
        return location.id === order.locationId
    })

    // Add the price of each selected item to the current subtotal
    currentSubtotal = foundDrink.price + foundFood.price + foundDesserts.price

    const subtotalString = currentSubtotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    const totalCost = currentSubtotal * (1 + 7/100)

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

return `Subtotal: ${subtotalString}
Total: ${costString}
`
}

export const orders = () => {
    const orders = getOrders()

    let html = "<p>"

    const listItems = orders.map(buildOrderListItem)

    html+= listItems.join("")
    html += "</p>"

    return html

}
