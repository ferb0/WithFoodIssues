import { Typography, Card, Stack } from '@mui/material'
import { Ingredient } from './ingredient'

export const IngredientsDetail = ({ ingredientsArray }) => {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}>
                Ingredients
            </Typography>

            <Stack spacing={1}>
                {ingredientsArray?.map(element => <Ingredient key={element.id + element.image} ingredient={element} />)}
            </Stack>
        </Card>
    )
}
