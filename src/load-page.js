import coverImage from "./mans-life.jpg"

const pageContent = document.querySelector("#content")
const header = document.createElement("h1")
const picture = document.createElement("img")
const body = document.createElement("p")
const headerContainer = document.createElement("div")
const picContainer = document.createElement("div")
const bodyContainer = document.createElement("div")

headerContainer.append(header)
picContainer.appendChild(picture)

header.innerHTML = "Welcome to Folsom Bar and Grill!"
headerContainer.id = "homeHeader"
picture.src = coverImage
picContainer.id = "coverImage"
body.textContent = "Here at Folsom Bar and Grill, we actually give a shit about food! We want to make the most kickass food at affordable prices that we can, while providing a comfortable, enjoyable atmosphere for our guests."
body.id = "pageBody"

class Page {
  constructor(parent, ...elements) {
    elements.forEach((element) => parent.append(element))
  }
}

const mainPage = new Page(pageContent, headerContainer, body, picContainer)