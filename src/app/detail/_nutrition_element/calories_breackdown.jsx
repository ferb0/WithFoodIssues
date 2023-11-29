import { Stack, Typography } from "@mui/material"

export const CaloriesBreackDown = ({ dataCalories }) => {
    const PADDING_SIDE = '3rem'
    return (
        <Stack direction='row'>
            <Typography pl={PADDING_SIDE} mr='auto'>Carbs: {dataCalories?.percentCarbs}%.</Typography>
            <Typography m='auto'>Fat: {dataCalories?.percentFat}%.</Typography>
            <Typography pr={PADDING_SIDE} ml='auto'>Protein: {dataCalories?.percentProtein}%.</Typography>
        </Stack>
    )
}
