import * as React from 'react'
import { Switch, Typography } from "@mui/material";

import { searchContext } from '../../context/search_context.js'

export default function SelectSearch() {
    const {
        switchSearch, setSwitchSearch
    } = React.useContext(searchContext)

    const handleChange = (event) => {
        setSwitchSearch(event.target.checked)
    }

    return (
        <li style={{ display: 'flex', alignItems: 'center' }}>
            <Switch
                checked={switchSearch}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{ marginLeft: '1rem' }} />
            <Typography
                align='center'
                sx={{ paddingLeft: '1rem' }}>
                {switchSearch ? 'Recipe' : 'Ingredient'}
            </Typography>
        </li>
    )
}
