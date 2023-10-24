"use client"

import * as React from 'react'
// import { useDispatch } from 'react-redux'

import { AppBar, Box, Toolbar, Typography, IconButton, TextField } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

// import { searchRecepiesByIngredient } from '../redux/actions.js'

import { styleTextInput } from '../global_objects/theme.js'

export default function NavBar() {
  const [input, setInput] = React.useState("")

  // const dispatch = useDispatch()

  function handleOnChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    // if (event.key === "Enter") {
    //   event.preventDefault();
    //   dispatch(searchRecepiesByIngredient(input));
    // }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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