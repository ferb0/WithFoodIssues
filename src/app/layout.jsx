import { ThemeProvider } from '@mui/material/styles'
import theme from '../global_objects/theme.js'

import NavBar from "./nav_bar.jsx"

export const metadata = {
  title: 'With Food Issues',
  description: 'Created by FerB with Next.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <NavBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
