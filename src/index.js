import "./styles.css"
import { mainPage } from "./main-page.js"
import { menuPage } from "./menu-page.js"
import { blogPage } from "./blog-page.js"

class navController {
  constructor(buttons, pages) {
    buttons.forEach( function ( button, buttonIndex ) {
      button.addEventListener( "click", () => {
        parent = document.querySelector( "div#content" )
        parent.remove()
        const newParent = document.createElement( "div" )
        newParent.id = "content"
        pages[ buttonIndex ].buildPage( newParent ) 
        document.querySelector("body").append(newParent) } ) } ) } }

const navButtons = document.querySelectorAll( "nav > button" )
const sitePages = [ mainPage, menuPage, blogPage ]
const nav = new navController( navButtons, sitePages)

sitePages[0].buildPage( document.querySelector( "div#content" ) )