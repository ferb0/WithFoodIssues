import * as React from 'react'
import { Autocomplete, MenuItem, TextField } from '@mui/material'

import { searchContext } from '../../context/search_context.js'

const dietOptions = [
    'Gluten Free',
    'Ketogenic'
]

export const ItemDiet = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const { dietOption, setDietOption } = React.useContext(searchContext)

    const handleClose = () => {
        setAnchorEl(null)
    }

    const setSelection = (event, newValue) => {
        setDietOption(newValue)
    }

    return (
        <MenuItem onClick={handleClose}>
            <Autocomplete
                onInputChange={setSelection}
                disablePortal
                options={dietOptions}
                renderInput={(params) => <TextField {...params} label="Options" />}
                inputValue={dietOption}
                sx={{ width: 300 }} />
        </MenuItem>
    )
}
