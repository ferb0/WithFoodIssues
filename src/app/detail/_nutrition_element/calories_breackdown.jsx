import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material"

export const CaloriesBreackDown = ({ dataCalories }) => {
    const PADDING_SIDE = '3rem'
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginBottom: '0.5rem' }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableBody>
                    <TableRow sx={{ border: 0 }}><TableCell>Carbs: {dataCalories?.percentCarbs}%.</TableCell></TableRow>
                    <TableRow sx={{ border: 0 }}><TableCell>Fat: {dataCalories?.percentFat}%.</TableCell></TableRow>
                    <TableRow sx={{ border: 0 }}><TableCell>Protein: {dataCalories?.percentProtein}%.</TableCell></TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
