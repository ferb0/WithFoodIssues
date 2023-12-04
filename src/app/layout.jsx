'use client'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../global_objects/theme.js'

import { useState } from 'react'
import { searchContext } from '../context/search_context.js'

import NavBar from "./nav_bar.jsx"

// export const metadata = {
//   title: 'With Food Issues',
//   description: 'Created by FerB with Next.',
// }

export default function RootLayout({ children }) {
  let [dietOption, setDietOption] = useState('')
  let [intolerancesOption, setIntolerancesOption] = useState('')
  let [cuisineOption, setCuisineOption] = useState('')

  return (
    <html lang="en">
      <searchContext.Provider
        value={{
          dietOption, setDietOption,
          intolerancesOption, setIntolerancesOption,
          cuisineOption, setCuisineOption
        }}>
        <ThemeProvider theme={theme}>
          <body>
            <NavBar />
            {children}
          </body>
        </ThemeProvider>
      </searchContext.Provider>
    </html>
  )
}
