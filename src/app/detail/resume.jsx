import { Typography, CardMedia, Card, Grid, Stack, Link } from '@mui/material'

export const ResumeDetail = ({ image, summary, source }) => {
    return (
        <Card
            sx={{ padding: '0.5rem' }}>
            <Grid container spacing={2}>

                <Grid item xs={4}>
                    <Stack>
                        <CardMedia
                            component='img'
                            src={image}
                            alt='Image recipe' />
                        <Link
                            href={source ? 'https://www.' + source : ''}
                            target='_blank'
                            underline="none"
                            rel="noreferrer"
                            sx={{ display: 'flex', margin: 'auto' }}>
                            {source}
                        </Link>

                    </Stack>
                </Grid>

                <Grid item xs={8}>
                    <Typography
                        dangerouslySetInnerHTML={{ __html: summary }} />
                </Grid>

            </Grid>
        </Card>
    )
}
