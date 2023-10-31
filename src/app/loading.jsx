'use client'
import { Stack, Typography } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
    return (
        <Stack
            spacing={3}
            sx={{
                paddingTop: '1rem',
                display: 'block',
                textAlign: 'center'
            }} >
            <CircularProgress />
            <Typography>Loading...</Typography>
        </Stack>
    )
}
