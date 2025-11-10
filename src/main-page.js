import pageImage from "./mans-life.jpg"
import { Page } from "./load-page.js"

const mainPage = new Page()

mainPage.setHeader( "Welcome to the Folsom Bar & Grill!" )
mainPage.setImage( pageImage )
mainPage.setBody( "Here at the Folsom Bar & Grill, we actually give a shit about food! We want to make the most kickass food at affordable prices that we can, while providing a comfortable, enjoyable atmosphere for our guests." )
mainPage.setCaption( "One of the many fine publications that customers enjoy at the Folsom Bar & Grill." )

mainPage.buildPage( document.querySelector( "#content" ) )