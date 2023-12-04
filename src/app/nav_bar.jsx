import * as React from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/navigation'
import { AppBar, Box, Toolbar, Typography, TextField, Autocomplete, Link as LinkMUI, Stack } from '@mui/material'

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

          <Stack
            sx={{ flexGrow: 1}}>
            <Typography variant='h6'>
              <Link href={'/'} style={linkTheme}>With Food Issues</Link>
            </Typography>
            <Typography
              variant='body2'>
              <LinkMUI
                href='https://www.ferb.ar/'
                target='_blank'
                underline='none'
                rel='noreferrer'
                color='secondary'>
                by ferb
              </LinkMUI>
            </Typography>
          </Stack>

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
