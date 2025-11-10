import { Page } from "./load-page.js"

const blogPage = new Page()

blogPage.setHeader( "Blog" )
blogPage.addLine( "November 10, 2025" )
blogPage.addLine( "Finally finished setting this page up. Maybe I'll set up a proper CMS for this shit and use it for an actual website on Neocities or something so I can put stuff there and then publish it on social media from there. That honestly sounds like a lot of fun." )
blogPage.setCaption( "First Google Image Search result for 'neocities'." )

blogPage.buildPage( document.querySelector( "#content" ) )