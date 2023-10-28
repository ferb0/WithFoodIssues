import * as React from 'react'
import { IconButton, Stack, Menu, MenuItem, Button, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ItemDiet } from './item_diet'

export const OptionsMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Stack>
            <Button
                id="menuu-button"
                aria-controls={open ? 'option-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}>
                <Typography variant="h7"
                    sx={{ color: 'black' }}>
                    Options
                </Typography>
            </Button>
            <Menu
                id="option-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menuu-button'
                }}>
                <ItemDiet />
            </Menu>
        </Stack>
    )
}
