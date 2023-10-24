import { ThemeProvider } from '@mui/material/styles'
import theme from '../global_objects/theme.js'


import NavBar from "./nav_bar.jsx"

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </main>
  )
}
