const database = {
    transientState: {
        // locationId: null,
        // drinkId: null,
        // foodId: null,
        // dessertId: null
    },
    
    // pretendTransientState: {
    // },

        foods: [
            
            { id: 1, name: "Chili Dog", price: 4 },
            { id: 2, name: "Plain Dog", price: 4 },
            { id: 3, name: "Mustard Dog", price: 3 },
            { id: 4, name: "Chili-Cheese Dog", price: 5 },
            { id: 5, name: "Nic's Famous Truck Dog", price: 15 },
            { id: 6, name: "Chili Dog", price: 5 },
            { id: 7, name: "Slaw Dog", price: 3 },
            { id: 8, name: "Philly Dog", price: 5 },
            { id: 9, name: "Pizza Dog", price: 4 },
            { id: 10, name: "Hoagie Dog", price: 5 },
            { id: 11, name: "Pineapple Dog", price: 3 },
            { id: 12, name: "Italian Dog", price: 4 },
            { id: 13, name: "Tropical Dog", price: 5 },
            { id: 14, name: "Chili-Cheese Dog", price: 7 },
            { id: 15, name: "Buffalo Dog", price: 6 },
            { id: 16, name: "BBQ Dog", price: 4 },
            { id: 17, name: "Weenie Hut JR Dog", price: 7 },
            { id: 18, name: "Polish Dog", price: 5 },
            { id: 19, name: "Wandering Dog", price: 4 },
            { id: 20, name: "Classic Dog", price: 6 }

        ],

        drinks: [
            
            { id: 1, name: "Coke", price: 3 },
            { id: 2, name: "Pepsi", price: 3 },
            { id: 3, name: "MT DEW", price: 3 },
            { id: 4, name: "Diet MT DEW", price: 3 },
            { id: 5, name: "Diet Pepsi", price: 3 },
            { id: 6, name: "Orange Fanta", price: 4 },
            { id: 7, name: "Grape Fanta", price: 5 },
            { id: 8, name: "Cherry Fanta", price: 6 },
            { id: 9, name: "Extreme Fanta", price: 10 },
            { id: 10, name: "RC", price: 1 },
            { id: 11, name: "Livewire MT DEW", price: 4 },
            { id: 12, name: "Voltage MT DEW", price: 4 },
            { id: 13, name: "Baja Blast", price: 5 },
            { id: 14, name: "Water", price: 8 },
            { id: 15, name: "Cold Water", price: 10 },
            { id: 16, name: "Room Temp Water", price: 1 },
            { id: 17, name: "Tap Water", price: 2 },
            { id: 18, name: "Sprite", price: 4 },
            { id: 19, name: "Purple tinted Sprite", price: 150 },
            { id: 20, name: "Cherry Sprite", price: 3 }
        ],

        desserts: [
            
            { id:1, name: "Chocolate", price: 3 },
            { id: 2, name: "Strawberry", price: 3 },
            { id: 3, name: "Peach", price: 3 },
            { id: 4, name: "Peanut Butter", price: 5 },
            { id: 5, name: "Peanut Butter Chocolate", price: 6 },
            { id: 6, name: "Pineapple", price: 7 },
            { id: 7, name: "Vanilla", price: 3 },
            { id: 8, name: "Caramel", price: 5 },
            { id: 9, name: "Twisted Tea", price: 9 },
            { id: 10, name: "Butterscotch", price: 4 },
            { id: 11, name: "Laffy Taffy", price: 4 },
            { id: 12, name: "Bussin' Brownies", price: 5 },
            { id: 13, name: "Four Loko Berry Blast", price: 11 },
            { id: 14, name: "Rainbow Sherbert", price: 4 },
            { id: 15, name: "Strawberry Cheesecake", price: 5 },
            { id: 16, name: "Cake Batter", price: 4 },
            { id: 17, name: "Orange Cream Fanta", price: 7 },
            { id: 18, name: "Grape Cream Fanta", price: 7 },
            { id: 19, name: "Straight up Fanta & Ice Cream", price: 11 },
            { id: 20, name: "Extreme Chocolate", price: 4 }

        ],

        location: [
            { id: 1, name: "Nic's Truck", address: "Northside" },
            { id: 2, name: "David's Truck", address: "Southside" },
            { id: 3, name: "Jodi's Truck", address: "Eastside" },
            { id: 4, name: "Bobby's Truck", address: "Westside" },
        ],

        foodLocations: [
            { id: 1, foodId: 1, locationId: 1, quantity: 7000 },
            { id: 2, foodId: 2, locationId: 1, quantity: 4000 },
            { id: 3, foodId: 3, locationId: 1, quantity: 2000 },
            { id: 4, foodId: 4, locationId: 1, quantity: 1000 },
            { id: 5, foodId: 5, locationId: 1, quantity: 500 },
            { id: 6, foodId: 6, locationId: 2, quantity: 499 },
            { id: 7, foodId: 7, locationId: 2, quantity: 600 },
            { id: 8, foodId: 8, locationId: 2, quantity: 700 },
            { id: 9, foodId: 9, locationId: 2, quantity: 2000 },
            { id: 10, foodId: 10, locationId: 2, quantity: 3000 },
            { id: 11, foodId: 11, locationId: 3, quantity: 2500 },
            { id: 12, foodId: 12, locationId: 3, quantity: 1000 },
            { id: 13, foodId: 13, locationId: 3, quantity: 2000 },
            { id: 14, foodId: 14, locationId: 3, quantity: 1000 },
            { id: 15, foodId: 15, locationId: 3, quantity: 3000 },
            { id: 16, foodId: 16, locationId: 4, quantity: 1000 },
            { id: 17, foodId: 17, locationId: 4, quantity: 500 },
            { id: 18, foodId: 18, locationId: 4, quantity: 700 },
            { id: 19, foodId: 19, locationId: 4, quantity: 800 },
            { id: 20, foodId: 20, locationId: 4, quantity: 600 }
        ],

        drinkLocations: [
            { id: 1, drinkId: 1, locationId: 1, quantity: 7000 },
            { id: 2, drinkId: 2, locationId: 1, quantity: 4000 },
            { id: 3, drinkId: 3, locationId: 1, quantity: 2000 },
            { id: 4, drinkId: 4, locationId: 1, quantity: 1000 },
            { id: 5, drinkId: 5, locationId: 1, quantity: 500 },
            { id: 6, drinkId: 6, locationId: 2, quantity: 499 },
            { id: 7, drinkId: 7, locationId: 2, quantity: 600 },
            { id: 8, drinkId: 8, locationId: 2, quantity: 700 },
            { id: 9, drinkId: 9, locationId: 2, quantity: 2000 },
            { id: 10, drinkId: 10, locationId: 2, quantity: 3000 },
            { id: 11, drinkId: 11, locationId: 3, quantity: 2500 },
            { id: 12, drinkId: 12, locationId: 3, quantity: 1000 },
            { id: 13, drinkId: 13, locationId: 3, quantity: 2000 },
            { id: 14, drinkId: 14, locationId: 3, quantity: 1000 },
            { id: 15, drinkId: 15, locationId: 3, quantity: 3000 },
            { id: 16, drinkId: 16, locationId: 4, quantity: 1000 },
            { id: 17, drinkId: 17, locationId: 4, quantity: 500 },
            { id: 18, drinkId: 18, locationId: 4, quantity: 700 },
            { id: 19, drinkId: 19, locationId: 4, quantity: 800 },
            { id: 20, drinkId: 20, locationId: 4, quantity: 600 }
        ],
        
        dessertLocations: [
            { id: 1, dessertId: 1, locationId: 1, quantity: 7000 },
            { id: 2, dessertId: 2, locationId: 1, quantity: 4000 },
            { id: 3, dessertId: 3, locationId: 1, quantity: 2000 },
            { id: 4, dessertId: 4, locationId: 1, quantity: 1000 },
            { id: 5, dessertId: 5, locationId: 1, quantity: 500 },
            { id: 6, dessertId: 6, locationId: 2, quantity: 499 },
            { id: 7, dessertId: 7, locationId: 2, quantity: 600 },
            { id: 8, dessertId: 8, locationId: 2, quantity: 700 },
            { id: 9, dessertId: 9, locationId: 2, quantity: 2000 },
            { id: 10, dessertId: 10, locationId: 2, quantity: 3000 },
            { id: 11, dessertId: 11, locationId: 3, quantity: 2500 },
            { id: 12, dessertId: 12, locationId: 3, quantity: 1000 },
            { id: 13, dessertId: 13, locationId: 3, quantity: 2000 },
            { id: 14, dessertId: 14, locationId: 3, quantity: 1000 },
            { id: 15, dessertId: 15, locationId: 3, quantity: 3000 },
            { id: 16, dessertId: 16, locationId: 4, quantity: 1000 },
            { id: 17, dessertId: 17, locationId: 4, quantity: 500 },
            { id: 18, dessertId: 18, locationId: 4, quantity: 700 },
            { id: 19, dessertId: 19, locationId: 4, quantity: 800 },
            { id: 20, dessertId: 20, locationId: 4, quantity: 600 }
        ],

        orders: [
            {
                id: 1,
                foodId: 1,
                drinkId: 1,
                dessertId: 1,
                locationId: 1
            }
        ],
       
    
}

export const transientState = () => {
    return {...database.transientState}
}


export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const getFood = () => {
    return database.foods.map(food => ({...food}))
}

export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}

export const getFoodLocations = () => {
    return database.foodLocations.map(foodLocation => ({...foodLocation}))
}

export const getDrinkLocations = () => {
    return database.drinkLocations.map(drinkLocation => ({...drinkLocation}))
}

export const getDessertLocations = () => {
    return database.dessertLocations.map(dessertLocation => ({...dessertLocation}))
}

export const setFood = (id) => {
    database.transientState.foodId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setDrink = (id) => {
    database.transientState.drinkId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setDessert = (id) => {
    database.transientState.dessertId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setLocation = (id) => {
    database.transientState.locationId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.location.map(f => ({...f}))
}

export const addCustomOrder = () => {
    const newOrder = {...database.transientState}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.transientState = {}

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
