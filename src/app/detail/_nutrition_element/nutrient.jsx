import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

export const Nutrients = ({ infoNutrients }) => {
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginBottom: '1rem' }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Amount</TableCell>
                        <TableCell align='center'>Percent Of Daily Needs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {infoNutrients?.map(elem =>
                        <TableRow key={elem.name} sx={{ border: 0 }}>
                            <TableCell align='center'>{elem.name}</TableCell>
                            <TableCell align='center'>{elem.amount} {elem.unit}</TableCell>
                            <TableCell align='center'>{elem.percentOfDailyNeeds}</TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
