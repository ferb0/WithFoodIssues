import { Card, Typography, Stack } from "@mui/material"
import { CaloriesBreackDown } from "./_nutrition_element/calories_breackdown"

export const NutritionsDetails = ({ nutrition }) => {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}>
                Nutritional Facts
            </Typography>

            <Stack>
                <CaloriesBreackDown dataCalories={nutrition?.caloricBreakdown} />
            </Stack>
        </Card>
    )
}
