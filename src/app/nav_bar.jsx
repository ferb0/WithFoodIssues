import * as React from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/navigation'
import { OptionsMenu } from './menu/menu.jsx'

import { AppBar, Box, Toolbar, Typography, TextField } from '@mui/material'
import { linkTheme, styleTextInput } from '../global_objects/theme.js'

export default function NavBar() {
  const [input, setInput] = React.useState('')
  const route = useRouter()

  function handleSubmit(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      route.push(`/results_list?search=${input}`)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <OptionsMenu />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href={'/'} style={linkTheme}>With Food Issues</Link>
          </Typography>

          <TextField
            sx={{ ...styleTextInput, width: 175 }}
            size='small'
            id='outlined-basic'
            label='Search'
            variant='outlined'
            onChange={() => setInput(event.target.value)}
            onKeyPress={handleSubmit}
            value={input} />

          {/* Para que los resultados no se pongan debajo de la barra flotante */}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}