import { Typography, Box } from '@mui/material'
import image from '@/global_objects/food_landing.jpg'

export const Landing = () => {
    return (
        <Box sx={{paddingTop: '1rem'}}>
            <Typography component='h1' variant='h3' align='center'>With Food Issues</Typography>
            <Typography
                variant='subtitle1'
                align='center'
                sx={{ display: 'block', paddingBottom: '1rem' }}>
                Page where you will find the most varied recipes together with complete information about their ingredients and steps to make the recipe. Enjoy it.
            </Typography>
            <img
                src={image.src}
                alt='Image food'
                style={{ maxWidth: '35rem', margin: 'auto', display: 'block', width: '100%' }} />
        </Box>
    )
}

export default Landing