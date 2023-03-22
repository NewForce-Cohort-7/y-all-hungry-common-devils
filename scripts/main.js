import { yallHungry, headerBannerImage } from "./yallHungry.js"

const headerBanner = document.querySelector("#headerBanner")
const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    headerBanner.innerHTML = headerBannerImage()
    mainContainer.innerHTML = yallHungry()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})