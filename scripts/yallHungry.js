import { food } from "./food.js"
import { drink } from "./drink.js"
import { dessert } from "./dessert.js"
import { orders } from "./orders.js"
import { location } from "./location.js"
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


export const yallHungry = () => {
    return `
    
    <h1> Y'all Hungry?? </h1>

    <article class="locations">
      <h2> Store Location </h2>
        ${location()}
    </article>

         <article class="choices">
      <section class="choices__foods options">
          <h2> Food Items </h2>
         ${food()}
      </section>
        
        <section class="choices__drinks options">
        <h2> Drink Items </h2> 
            ${drink()}
            </section>

        <section class="choices__desserts options">
        <h2> Ice Cream Flavors </h2>
            ${dessert()}
            </section>

        <article>

            <button id="orderButton"> Place Order </button>
             
        </article>

        <article class="customOrders">
            <h2> Orders </h2> 
            ${orders()}
        </article>
    
    `
}