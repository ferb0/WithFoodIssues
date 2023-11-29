import { Card, Typography, Stack } from "@mui/material"
import { CaloriesBreackDown } from "./_nutrition_element/calories_breackdown.jsx"
import { Nutrients } from "./_nutrition_element/nutrient.jsx"

export const NutritionsDetails = ({ nutrition }) => {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}
                pb='1rem'>
                Nutritional Facts
            </Typography>

            <Stack direction='row'>
                <Nutrients infoNutrients={nutrition?.nutrients}/>
                <CaloriesBreackDown dataCalories={nutrition?.caloricBreakdown} />
            </Stack>
        </Card>
    )
}
