import { Page } from "./load-page.js"

const menuPage = new Page()

menuPage.setHeader( "Menu" )
menuPage.addLine( "Hot Dog: $6" )
menuPage.addLine( "Burger: $8" )
menuPage.addLine( "Double Burger: $12" )
menuPage.setCaption( "We very definitely serve these at Folsom Bar & Grill." )

menuPage.buildPage( document.querySelector( "#content" ) )

export { menuPage };