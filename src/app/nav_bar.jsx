import * as React from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/navigation'
import { AppBar, Box, Toolbar, Typography, OutlinedInput, IconButton } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import { linkTheme, styleTextInput } from '../global_objects/theme.js'
import { OptionsMenu } from './menu/menu.jsx'

export default function NavBar() {
  const [input, setInput] = React.useState('')
  const route = useRouter()

  function handleSubmit(event) {
      event.preventDefault()
      route.push(`/results_list?search=${input}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <OptionsMenu />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href={'/'} style={linkTheme}>With Food Issues</Link>
          </Typography>

          <OutlinedInput
            sx={{ ...styleTextInput, width: 175 }}
            size='small'
            id='outlined-basic'
            variant='outlined'
            onChange={(event) => setInput(event.target.value)}
            value={input}
            endAdornment={
              <IconButton
                type='button'
                onClick={handleSubmit}
                sx={{ p: '10px' }}>
                <SearchIcon />
              </IconButton>} />

          {/* Para que los resultados no se pongan debajo de la barra flotante */}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}