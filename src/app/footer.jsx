import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material'

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
                            underline='none'
                            rel='noreferrer'
                            color='secondary'>
                            Created by ferb.
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </Box>
    )
}
