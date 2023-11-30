import { Typography, CardMedia, Card, Stack, Link } from '@mui/material'

export const ResumeDetail = ({ image, summary, source }) => {
    return (
        <Card
            sx={{ padding: '0.5rem' }}>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}>
                Resume
            </Typography>

            <Stack spacing={2} direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}}>
                    <Stack>
                        <CardMedia
                            component='img'
                            src={image}
                            alt='Image recipe'
                            sx={{minWidth: '20rem'}}/>
                        <Link
                            href={source ? source : ''}
                            target='_blank'
                            underline="none"
                            rel="noreferrer"
                            sx={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto'}}>
                            Source
                        </Link>

                    </Stack>

                    <Typography
                        dangerouslySetInnerHTML={{ __html: summary }} />
            </Stack>
        </Card>
    )
}
