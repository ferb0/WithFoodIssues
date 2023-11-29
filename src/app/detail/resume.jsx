import { Typography, CardMedia, Card, Grid } from '@mui/material'

export const ResumeDetail = ({ image, summary }) => {
    return (
        <Card
            sx={{ padding: '0.5rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <CardMedia
                        component='img'
                        src={image}
                        alt='Image recipe' />

                </Grid>
                <Grid item xs={8}>
                    <Typography
                        dangerouslySetInnerHTML={{ __html: summary }} />
                </Grid>
            </Grid>
        </Card>
    )
}
