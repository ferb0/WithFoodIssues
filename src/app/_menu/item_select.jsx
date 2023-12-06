import * as React from 'react'
import { Switch, Typography } from "@mui/material";

export default function SelectSearch() {
    const [checked, setChecked] = React.useState(true)

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <li style={{ display: 'flex', alignItems: 'center' }}>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{ marginLeft: '1rem' }} />
            <Typography
                align='center'
                sx={{ paddingLeft: '1rem' }}>
                {checked ? 'Recipe' : 'Ingredient'}
            </Typography>
        </li>
    )
}
