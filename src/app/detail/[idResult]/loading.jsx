import { Stack, Typography } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
    return (
    <Stack spacing={1}>
        <CircularProgress />
        <Typography>Loading...</Typography>
    </Stack>
    )
}
