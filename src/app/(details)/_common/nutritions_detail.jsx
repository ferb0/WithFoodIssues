import { Card, Typography, Stack } from '@mui/material'
import { CaloriesBreackDown } from './_nutrition_element/calories_breackdown.jsx'
import { Nutrients } from './_nutrition_element/nutrient.jsx'
import { Extra } from './_nutrition_element/extra.jsx'
import { IngredientsDetail } from './_nutrition_element/ingredientsDetail.jsx'

export const NutritionsDetails = ({ nutrition, ingredientsArray }) => {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}
                pb='1rem'>
                {ingredientsArray != null ? 'Recipe Information' : 'Ingredient Information'}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}>
                {ingredientsArray != null ? <IngredientsDetail ingredientsArray={ingredientsArray} /> : null}
                <Stack sx={{ margin: 'auto', marginTop: '0rem' }}>
                    <CaloriesBreackDown dataCalories={nutrition?.caloricBreakdown} />
                    <Extra properties={nutrition?.properties} />
                </Stack>
                <Nutrients infoNutrients={nutrition?.nutrients} />
            </Stack>
        </Card>
    )
}
