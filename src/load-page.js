import coverImage from "./mans-life.jpg"

const pageContent = document.querySelector("#content")
const header = document.createElement("h1")
const picture = document.createElement("img")
const body = document.createElement("p")
const caption = document.createElement("p")
const headerContainer = document.createElement("div")
const picContainer = document.createElement("div")
const articleContainer = document.createElement("div")

headerContainer.append(header)
picContainer.append(picture)
picContainer.append(caption)
articleContainer.append(body)
articleContainer.append(picContainer)

articleContainer.id = "article"
header.innerHTML = "Welcome to the Folsom Bar & Grill!"
headerContainer.id = "articleHeader"
picture.src = coverImage
picContainer.id = "coverImage"
caption.textContent = "One of the many fine publications that customers enjoy at the Folsom Bar & Grill."
caption.id = "caption"
body.textContent = "Here at the Folsom Bar & Grill, we actually give a shit about food! We want to make the most kickass food at affordable prices that we can, while providing a comfortable, enjoyable atmosphere for our guests."
body.id = "pageBody"

class Page {
  constructor(parent, ...elements) {
    elements.forEach((element) => parent.append(element))
  }
}

const mainPage = new Page(pageContent, headerContainer, articleContainer)