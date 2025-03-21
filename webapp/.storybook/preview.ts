import type { Preview } from '@storybook/react'

import { createGlobalStyle } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Sora } from "next/font/google"

const sora = Sora({subsets: ["latin"], weight:["600", '800']})


/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${sora.style.fontStyle}, sans-serif;
  }
`;

export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles
    })
]

