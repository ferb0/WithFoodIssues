import { Stack, Typography, Link } from '@mui/material'

export default function NotFound() {
  return (
    <Stack spacing={2}>
      <Typography variant='h3' align='center'>Not Found</Typography>
      <Typography align='center'>Could not find requested resource. Sorry.</Typography>
      <Link
        align='center'
        underline='none'
        href="/">
        Return Home
      </Link>
    </Stack>
  )
}
