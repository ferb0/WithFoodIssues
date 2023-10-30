import * as React from 'react'
import { Autocomplete, MenuItem, TextField } from '@mui/material'

export const OptionItem = (props) => {
    return (
        <MenuItem >
            <Autocomplete
                autoSelect
                freeSolo
                onInputChange={(event, newValue) => { props.setValue(newValue) }}
                options={props.options}
                renderInput={(params) => <TextField {...params} label={props.label} />}
                inputValue={props.value}
                sx={{ width: 300 }} />
        </MenuItem>
    )
}
