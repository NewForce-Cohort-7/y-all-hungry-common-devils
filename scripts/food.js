
import {getFood,setFood, transientState,getFoodLocations} from "./database.js"
const foodLocation = getFoodLocations ()
const arrayOfood= getFood()
export let foodmessage = ""

document.addEventListener("change",(event) => {
        if (event.target.id === "food") {
            const selectedFood = arrayOfood.find(food => food.id === parseInt(event.target.value))
            foodmessage = ` <img class="images" src="${selectedFood.image}" alt="${selectedFood.description}"><p class="images"><p class="selectedName">${selectedFood.name}<p>`;
            setFood(parseInt(event.target.value))
        }
    }
)





const setFoodMenu = () => {
    const newState = transientState()
    let localFoods = '<option>Food Options</option>'
    let foodNum = []
    foodLocation.forEach(local => { 
      if (newState.locationId == local.locationId) {
        foodNum.push(local.foodId)
      }
    })
    foodNum.forEach(num => {
        for (const food of arrayOfood) {
          if(food.id == num)
        localFoods += `<option value="${food.id}">${food.name}</option>`
      }
    })

    return localFoods
  }










export const food = () => {
    let html = `<select id="food">
    <option value="0">Menu -Food Items</option>`


    // for (const foodObject of arrayOfood) {
    //     html +=  `<option value="${foodObject.id}"> ${foodObject.name}</option>`
    // }

   
  html += setFoodMenu()
   
  
  // console.log(html);
  html += '</select>'




    return html
}






  
//   html += setFoodMenu()
   
  
    // // console.log(html);
    // html += '</select>'
  

