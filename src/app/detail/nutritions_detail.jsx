import { Card, Typography, Stack } from "@mui/material"
import { CaloriesBreackDown } from "./_nutrition_element/calories_breackdown.jsx"
import { Nutrients } from "./_nutrition_element/nutrient.jsx"
import { Extra } from './_nutrition_element/extra'

export const NutritionsDetails = ({ nutrition }) => {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}
                pb='1rem'>
                Nutritional Facts
            </Typography>

            <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}}>
                <Nutrients infoNutrients={nutrition?.nutrients}/>
                <Stack sx={{margin: 'auto', marginTop:'0rem'}}>
                <CaloriesBreackDown dataCalories={nutrition?.caloricBreakdown} />
                <Extra properties={nutrition?.properties}/>
                </Stack>
            </Stack>
        </Card>
    )
}
