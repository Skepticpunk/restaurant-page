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





