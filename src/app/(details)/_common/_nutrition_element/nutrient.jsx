import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export default function Nutrients({ infoNutrients }) {
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginBottom: '1rem' }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' sx={{ padding: '0.5rem' }}><strong>Name</strong></TableCell>
                        <TableCell align='center' sx={{ padding: '0.5rem' }}><strong>Amount</strong></TableCell>
                        <TableCell align='center' sx={{ padding: '0.5rem' }}><strong>Percent Of Daily Needs</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {infoNutrients?.map(elem =>
                        <TableRow key={elem.name} sx={{ border: 0 }}>
                            <TableCell align='center' sx={{ padding: '0.5rem' }}>{elem.name}</TableCell>
                            <TableCell align='center' sx={{ padding: '0.5rem' }}>{elem.amount} {elem.unit}</TableCell>
                            <TableCell align='center' sx={{ padding: '0.5rem' }}>{elem.percentOfDailyNeeds} %</TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
