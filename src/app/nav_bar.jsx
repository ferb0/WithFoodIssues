import * as React from 'react'

import { AppBar, Box, Toolbar, Typography, TextField } from '@mui/material'

import { styleTextInput } from '../global_objects/theme.js'

import { useContext } from 'react'
import { searchContext } from '../context/search_context.js'
import { OptionsMenu } from './menu/option_menu.jsx'

export default function NavBar() {
  const [input, setInput] = React.useState("")
  const search = useContext(searchContext)

  function handleOnChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      search.setSearch(input)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <OptionsMenu/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            With Food Issues
          </Typography>

          <TextField
            sx={{ ...styleTextInput, width: 175 }}
            size="small"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={handleOnChange}
            onKeyPress={handleSubmit}
            value={input} />

          {/* Para que los resultados no se pongan debajo de la barra flotante */}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}