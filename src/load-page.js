import pageImage from "./mans-life.jpg"

class Page {
  #pageContent = document.querySelector("#content")
  #pageHeader = document.createElement("div")
  #pageBody = document.createElement("p")
  #pageImageFrame = document.createElement("div")  
  #header = document.createElement("h1")
  #image = document.createElement("img")
  #caption = document.createElement("p")
  
  constructor() {
    this.#header.innerHTML = "No page header set - use Page.setHeader()!"
    this.#pageBody.textContent = "No page body set - use Page.setBody()!"
    this.#caption.textContent = "No caption set - use Page.setCaption()!" }
    
  setHeader( newHeader ) {
    this.#header.innerHTML = newHeader }
  setBody( newBody ) {
    this.#pageBody.textContent = newBody }
  setImage( newImage ) {
    this.#image.src = newImage }
  setCaption( newCaption ) {
    this.#caption.textContent = newCaption }
  buildPage( parent ) {
    parent.append( this.#pageHeader )
    parent.append( this.#pageBody )
    parent.append( this.#pageImageFrame )
    this.#pageHeader.append( this.#header )
    this.#pageHeader.id = "pageHeader"
    this.#pageBody.id = "pageBody"
    this.#pageImageFrame.append( this.#image )
    this.#pageImageFrame.append( this.#caption )
    this.#pageImageFrame.id = "pageImage"
    this.#caption.id = "caption" } }

const mainPage = new Page()

mainPage.setHeader( "Welcome to the Folsom Bar & Grill!" )
mainPage.setImage( pageImage )
mainPage.setBody( "Here at the Folsom Bar & Grill, we actually give a shit about food! We want to make the most kickass food at affordable prices that we can, while providing a comfortable, enjoyable atmosphere for our guests." )
mainPage.setCaption( "One of the many fine publications that customers enjoy at the Folsom Bar & Grill." )

mainPage.buildPage( document.querySelector( "#content" ) )



