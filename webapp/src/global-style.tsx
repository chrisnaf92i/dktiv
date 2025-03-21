"use client"
import { createGlobalStyle } from "styled-components";
import { Sora, DM_Sans } from "next/font/google"

export const sora = Sora({subsets: ["latin"], weight:["600", '800']})
export const dmSans = DM_Sans({subsets: ["latin"], weight:["400", '500', "700"]})
const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${dmSans.style.fontFamily}, sans-serif;
    }
    
    h1, h2, h3, h4, h5 {
        font-family: ${sora.style.fontFamily}, sans-serif;
    }
`


export default GlobalStyle;