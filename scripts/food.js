
import {getFood,setFood, transientState,getFoodLocations} from "./database.js"
const foodLocation = getFoodLocations ()
const arrayOfood= getFood()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "food") {
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
        foodNum.push(local.id)
      }
    })
    foodNum.forEach(num => {
        for (const food of arrayOfood) {
          if(food.id == num)
        localFoods += `<option value="${food.id}">${food.name}</option>`
      }
    })
//  console.log(foodNum)
//  console.log(localFoods)
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
  

