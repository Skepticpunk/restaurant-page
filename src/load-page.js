import coverImage from "./mans-life.jpg"

const pageContent = document.querySelector("#content")
const header = document.createElement("h1")
const picture = document.createElement("img")
const body = document.createElement("p")

header.innerHTML = "Welcome to Folsom Bar and Grill!"
picture.src = coverImage
body.textContent = "Here at Folsom Bar and Grill, we actually give a shit about food! We want to make the most kickass food at affordable prices that we can, while providing a comfortable, enjoyable atmosphere for our guests."

class Page {
  constructor(parent, ...elements) {
    elements.forEach((element) => parent.append(element))
  }
}

const mainPage = new Page(pageContent, header, picture, body)