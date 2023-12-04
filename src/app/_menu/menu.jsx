import * as React from 'react'
import { Stack, Menu, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { OptionItem } from './item_menu.jsx'

import { searchContext } from '../../context/search_context.js'
import { dietOptions, intolerancesOptions, cuisineOptions } from '@/global_objects/recipes_options.js'

export const OptionsMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const {
        dietOption, setDietOption,
        intolerancesOption, setIntolerancesOption,
        cuisineOption, setCuisineOption
    } = React.useContext(searchContext)

    return (
        <Stack>
            <Button sx={{margin: '0', paddingLeft: '0rem', minWidth: '0rem'}}
                aria-controls={open ? 'option-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={(event) => { setAnchorEl(event.currentTarget) }}
                endIcon={<MenuIcon sx={{ color: 'black', margin: '0'}} />}>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => { setAnchorEl(null) }}
                MenuListProps={{
                    'aria-labelledby': 'menu-button'
                }}>
                <OptionItem
                    value={dietOption}
                    setValue={setDietOption}
                    label={'Diet Options'}
                    options={dietOptions} />
                <OptionItem
                    value={cuisineOption}
                    setValue={setCuisineOption}
                    label={'Cousine Options'}
                    options={cuisineOptions} />
                <OptionItem
                    value={intolerancesOption}
                    setValue={setIntolerancesOption}
                    label={'Intolerance Options'}
                    options={intolerancesOptions} />
            </Menu>
        </Stack>
    )
}
