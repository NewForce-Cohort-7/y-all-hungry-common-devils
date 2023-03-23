import { food } from "./food.js"
import { drinkOptions, drankOrder } from "./drink.js"
import { dessert, dessertMessage } from "./dessert.js"
import { orders } from "./orders.js"
import { location} from "./location.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const headerBannerImage = () => {
    return `
    <article class="imageContainer">
        <img src="images/yallHungryIcon.png" alt="Y'all Hungry icon which has a cartoon hotdog wearing a trucker hat pointing to a food-truck that has the Y'all Hungry logo on top, as a sign" id="icon">
    </article>

    <article class="locations storeLocation">
        <section id=" belowHeader">
            <h2> Store Location </h2>
            ${location()}
        </section>
    </article>
    `
}

export const yallHungry = () => {
    return `
        <article class="border">
            <section class="belowHeaderLeft">
                <article class="choices">
                    <section class="choices__foods options">
                        <h2> Food Items </h2>
                        ${food()}
                    </section>
                    
                    <section class="choices__drinks options">
                        <h2> Drink Items </h2> 
                        ${drinkOptions()}
                    </section>

                    <section class="choices__desserts options">
                        <h2> Ice Cream Flavors </h2>
                        ${dessert()}
                    </section>
                </article>
            </section>

            <section class="belowHeaderCenter">
                <article class="customOrders">
                    <h2> Orders </h2> 
                    <div class="viewSelection">${drankOrder}</div>
                    <div class="viewSelection">${dessertMessage}</div>
                    ${orders()}
                    
                </article>
            </section>

            <section class="belowHeaderRight">
                <article class="button">
                    <button id="orderButton"> Place Order </button>
                </article>
            </section>
        </article>
    `
}