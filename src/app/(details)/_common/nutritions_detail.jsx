import { Card, Typography, Stack } from '@mui/material'
import CaloriesBreackDown from './_nutrition_element/calories_breackdown.jsx'
import Nutrients from './_nutrition_element/nutrient.jsx'
import Extra from './_nutrition_element/extra.jsx'
import IngredientsDetail from './_nutrition_element/ingredientsDetail.jsx'
import TasteChart from './_nutrition_element/taste_graphic_chart.jsx'

export default function NutritionsDetails({ idRecipe, nutrition, ingredientsArray }) {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}
                pb='1rem'>
                {ingredientsArray != null ? 'Recipe Information' : 'Nutritional Information per 100g'}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}>
                <Stack
                direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }}
                sx={{ margin: 'auto', marginTop: '0rem' }}>
                    {ingredientsArray != null ? <IngredientsDetail ingredientsArray={ingredientsArray} /> : null}
                    <Stack sx={{ margin: 'auto', marginTop: '0rem' }}>
                        <CaloriesBreackDown dataCalories={nutrition?.caloricBreakdown} />
                        <Extra properties={nutrition?.properties} />
                    </Stack>
                    {ingredientsArray != null ? <TasteChart idRecipe={idRecipe} /> : null}
                </Stack>
                <Nutrients infoNutrients={nutrition?.nutrients} />
            </Stack>
        </Card>
    )
}
