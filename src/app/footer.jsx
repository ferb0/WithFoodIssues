import Link from 'next/link'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { linkTheme } from '@/global_objects/theme'

export default function Footer() {
    return (
        <Box>
            <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography
                        variant='subtitle1'
                        sx={{ marginLeft: 'auto' }}>
                        <Link
                            href='https://www.ferb.ar/'
                            target='_blank'
                            style={linkTheme}>
                            Created by ferb.
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </Box>
    )
}
