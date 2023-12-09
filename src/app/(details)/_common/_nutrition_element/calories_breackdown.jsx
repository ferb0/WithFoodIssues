import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Skeleton } from '@mui/material'

export default function CaloriesBreackDown({ dataCalories }) {
    const PADDING_SIDE = '3rem'
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{
                width: 'auto', padding: '1rem', margin: 'auto', marginBottom: '0.5rem',
                marginTop: { xs: '1rem', sm: '1rem' }
            }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableBody>

                    <TableRow sx={{ border: 0 }}>
                        <TableCell>
                            <Typography>{dataCalories ? `Protein: ${dataCalories?.percentProtein}%.` : <Skeleton variant="text" width='7rem' />}</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ border: 0 }}>
                        <TableCell>
                            {dataCalories ?
                                <Typography>Carbs: {dataCalories?.percentCarbs}%.</Typography>
                                :
                                <Skeleton variant="text" width='7rem' />}
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ border: 0 }}>
                        <TableCell>
                            {dataCalories ?
                                <Typography>Fat: {dataCalories?.percentFat}%.</Typography>
                                :
                                <Skeleton variant="text" width='7rem' />}
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}
