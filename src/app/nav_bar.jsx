import * as React from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/navigation'
import { AppBar, Box, Toolbar, Typography, TextField, Autocomplete, Link as LinkMUI, Stack } from '@mui/material'

import { linkTheme, styleTextInput } from '../global_objects/theme.js'
import OptionsMenu from './_menu/menu.jsx'

import { searchContext } from '@/context/search_context.js'

export default function NavBar() {
  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState([''])

  const {
    switchSearch, setSwitchSearch
  } = React.useContext(searchContext)

  const route = useRouter()

  React.useEffect(() => {
    if (inputValue)
      fetch(`/api/auto_recipes/${inputValue}`)
        .then(res => res.json())
        .then(res => setOptions(res.data))
  }, [inputValue])

  function handleSubmit(valueSelected) {
    if (switchSearch) {
      if (valueSelected)
        route.push(`/results_list?search=${valueSelected.name}`)
    }
    else
      route.push(`/detailIngredient?id=${valueSelected.id}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <OptionsMenu />

          <Stack
            sx={{ flexGrow: 1 }}>
            <Typography variant='h6'>
              <Link href={'/'} style={linkTheme}>With Food Issues</Link>
            </Typography>
            <Typography
              variant='body2'>
              <Link href={'/about'} style={linkTheme}>by ferb</Link>
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
            getOptionLabel={(option) => option? `${option.name}` : ''}
            isOptionEqualToValue={(option, value) => option.name === value.name}
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
