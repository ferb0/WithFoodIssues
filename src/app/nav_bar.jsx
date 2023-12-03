import * as React from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/navigation'
import { AppBar, Box, Toolbar, Typography, TextField, Autocomplete } from '@mui/material'

import { linkTheme, styleTextInput } from '../global_objects/theme.js'
import { OptionsMenu } from './menu/menu.jsx'

export default function NavBar() {
  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState([''])
  const route = useRouter()

  React.useEffect(() => {
    if (inputValue)
      fetch(`/api/auto_recipes/${inputValue}`)
        .then(res => res.json())
        .then(res => setOptions(res.data))
  }, [inputValue])

  function handleSubmit(valueSelected) {
    if (valueSelected)
      route.push(`/results_list?search=${valueSelected}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <OptionsMenu />
          <Typography variant='h6' componeznt='div' sx={{ flexGrow: 1 }}>
            <Link href={'/'} style={linkTheme}>With Food Issues</Link>
          </Typography>

          <Autocomplete
            sx={{ ...styleTextInput, width: 175 }}
            size='small'
            filterOptions={x => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            noOptionsText='No coincidences'
            onChange={(event, valueSelected) => handleSubmit(valueSelected)}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            renderInput={params => <TextField {...params} label='Add an ingredient' fullWidth />} />

          {/* Para que los resultados no se pongan debajo de la barra flotante */}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}
