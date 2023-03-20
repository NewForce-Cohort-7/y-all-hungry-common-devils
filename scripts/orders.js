import { getOrders, getFood, getDrinks, getDesserts, getLocations, addCustomOrder } from "./database.js"

const food = getFood()
const drinks = getDrinks()
const desserts = getDesserts()
const locations = getLocations()

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
    console.log(getOrders())
let totalCost = (foundFood.price + foundDrink.price + foundDesserts.price) * 1.07

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
Order ${order.id}  cost: ${costString}



</li>`
}

export const orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html+= listItems.join("")
    html += "</ul>"

    return html


}