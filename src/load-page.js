import pageImage from "./mans-life.jpg"

const pageContent = document.querySelector("#content")
const header = document.createElement("h1")
const pageBody = document.createElement("p")
const picture = document.createElement("img")
const caption = document.createElement("p")
const pageHeader = document.createElement("div")
const pageImageFrame = document.createElement("div")

pageHeader.append(header)
pageImageFrame.append(picture)
pageImageFrame.append(caption)

header.innerHTML = "Welcome to the Folsom Bar & Grill!"
pageHeader.id = "pageHeader"
picture.src = pageImage
pageImageFrame.id = "pageImage"
caption.textContent = "One of the many fine publications that customers enjoy at the Folsom Bar & Grill."
caption.id = "caption"
pageBody.textContent = "Here at the Folsom Bar & Grill, we actually give a shit about food! We want to make the most kickass food at affordable prices that we can, while providing a comfortable, enjoyable atmosphere for our guests."
pageBody.id = "pageBody"

class Page {
  constructor(parent, ...elements) {
    elements.forEach((element) => parent.append(element))
  }
}

const mainPage = new Page(pageContent, pageHeader, pageBody, pageImageFrame)