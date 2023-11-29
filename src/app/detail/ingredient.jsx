import { Stack, Typography } from "@mui/material"

export const Ingredient = ({ ingredient }) => {
    const PADDING_SIDE = '3rem'
    return (
        <Stack direction='row'>
            <Typography
                mr='auto'
                pl={PADDING_SIDE}>
                {ingredient.name[0].toUpperCase() + ingredient.name.substring(1)}
            </Typography>

            <Typography m='auto'> ........................... </Typography>

            <Typography
                ml='auto'
                pr={PADDING_SIDE}>
                {ingredient.measures.metric.amount + ' ' + ingredient.measures.metric.unitShort}
            </Typography>
        </Stack>
    )
}
